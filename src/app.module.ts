import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import * as process from 'process';
import { ConfigModule } from '@nestjs/config';
import {EduModule} from "./edu/edu.module";

const host = process.env.P_POSTGRES_HOST || 'nestjs_postgresql';
const database = process.env.P_POSTGRES_DATABASE || 'nestjs';
const username = process.env.P_POSTGRES_USER || 'postgres';
const password = process.env.P_POSTGRES_PASSWORD || 'example';
const port = Number(process.env.P_POSTGRES_PORT) || 5432;

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   envFilePath: '.env',
    // }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'api-nestjs_postgresql',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'api-nestjs',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
    EduModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
