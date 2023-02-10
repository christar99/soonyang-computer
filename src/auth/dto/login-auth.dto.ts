import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginAuthReqDto {
  @ApiProperty({
    description: '메일',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: '패스워드',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}

@Exclude()
export class LoginAuthResDto {
  @ApiProperty({
    description: '액세스 토큰',
  })
  @Expose()
  accessToken: string;
}
