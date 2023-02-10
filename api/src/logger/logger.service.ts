import { LoggerService as LS } from '@nestjs/common';
import * as winston from 'winston';
import { utilities as nestWinstonModuleUtilities } from 'nest-winston';

export class LoggerService implements LS {
  private logger: winston.Logger;

  constructor(service: string) {
    this.logger = winston.createLogger({
      format: winston.format.combine(
        winston.format.errors({ stack: true }),
        winston.format.json(),
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.ms(),
        winston.format.simple(),
        // winston.format.prettyPrint(),
      ),
      defaultMeta: { service },
      transports: [
        new winston.transports.Console({
          level: 'debug',
          format: winston.format.combine(
            nestWinstonModuleUtilities.format.nestLike(),
          ),
        }),
      ],
    });
  }

  log(message: string) {
    this.logger.log({ level: 'info', message });
  }
  info(message: string) {
    this.logger.info(message);
  }
  error(message: string, trace: string) {
    this.logger.error(message, trace);
  }
  warn(message: string) {
    this.logger.warning(message);
  }
  debug(message: string) {
    this.logger.debug(message);
  }
  verbose(message: string) {
    this.logger.verbose(message);
  }
}
