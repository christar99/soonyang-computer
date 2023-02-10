import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';
import { AuthService } from './auth.service';
import { LoginAuthReqDto, LoginAuthResDto } from './dto/login-auth.dto';
import { MailAuthReqDto } from './dto/mail-auth.dto';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthUser } from './user.decorator';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: '유저 로그인' })
  @ApiBody({ type: LoginAuthReqDto })
  @ApiCreatedResponse({ type: LoginAuthResDto })
  @ApiBearerAuth()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@AuthUser() user: User) {
    return this.authService.login(user);
  }

  @ApiOperation({ summary: '회원가입 메일 인증' })
  @Post('mail')
  @HttpCode(HttpStatus.NO_CONTENT)
  mail(@Body() mailAuthReqDto: MailAuthReqDto) {
    this.authService.mail(mailAuthReqDto.email);
  }
}
