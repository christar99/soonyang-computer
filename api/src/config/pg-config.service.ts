import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class PgConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configService.get('DB_HOST'),
      port: Number(this.configService.get('DB_PORT')),
      username: this.configService.get('DB_USER'),
      password: this.configService.get('DB_PASSWD'),
      database: this.configService.get('DB_NAME'),
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: this.configService.get('NODE_ENV') === 'local',
    };
  }
}
