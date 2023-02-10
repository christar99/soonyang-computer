import { CreateUserReqDto } from './create-user.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateUserReqDto extends PartialType(CreateUserReqDto) {}
