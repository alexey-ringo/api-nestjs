import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { EduService } from './service/edu.service';
import { EduController } from './controller/edu/edu.controller';

@Module({
  imports: [HttpModule],
  controllers: [EduController],
  providers: [EduService],
})
export class EduModule {}
