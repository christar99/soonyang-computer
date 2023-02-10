import { MailerService } from '@nestjs-modules/mailer';
import {
  CACHE_MANAGER,
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { randomUUID } from 'crypto';
import { ConfigService } from '@nestjs/config';
import { Cache } from 'cache-manager';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { compare } from 'src/helper/crypto';
import { UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService,
    private jwtService: JwtService,
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async mail(mailTo: string) {
    const uuid = randomUUID();
    const mailFrom = this.configService.get('MAIL_USER');

    try {
      await this.mailerService.sendMail({
        to: mailTo,
        from: mailFrom,
        subject: 'DA 쇼핑몰 인증 메일',
        template: 'mail-auth',
        context: {
          message: uuid,
        },
      });
    } catch (err) {
      throw new ConflictException('메일 발송 실패');
    }

    await this.cacheManager.set(mailTo, uuid, 30 * 1000);
  }

  async validateUser(email: string, passwd: string) {
    const user = await this.userRepository.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      throw new NotFoundException('User does not exist');
    }

    if (!compare(passwd, user.password)) {
      throw new UnauthorizedException("Password doesn't match");
    }

    const { password, ...rest } = user;

    return rest;
  }

  login(user: User) {
    const payload = { email: user.email, sub: user.id };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
