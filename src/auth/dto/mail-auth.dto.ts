import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class MailAuthReqDto {
  @ApiProperty({
    description: '인증 메일',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
