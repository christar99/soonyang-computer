import {
  CACHE_MANAGER,
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cache } from 'cache-manager';
import { Repository } from 'typeorm';
import { CreateUserReqDto, CreateUserResDto } from './dto/create-user.dto';
import { UpdateUserReqDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { plainToInstance } from 'class-transformer';
import { hash } from 'src/helper/crypto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
  ) {}

  async create(createUserReqDto: CreateUserReqDto) {
    const existUser = await this.userRepository.findOne({
      where: {
        email: createUserReqDto.email,
      },
    });

    if (existUser) {
      throw new ConflictException('Email already exists');
    }

    const token = await this.cacheManager.get(createUserReqDto.email);

    if (token === undefined) {
      throw new ConflictException('Unverified mail');
    }

    const user = this.userRepository.create(createUserReqDto);
    user.password = hash(createUserReqDto.password);

    await this.cacheManager.del(createUserReqDto.email);
    await this.userRepository.save(user);

    return plainToInstance(CreateUserResDto, user);
  }

  async findAll() {
    return this.userRepository.find();
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('User does not exist');
    }

    return user;
  }

  update(id: number, updateUserReqDto: UpdateUserReqDto) {
    return this.userRepository.update(id, updateUserReqDto);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
