import { Body, Controller, Get, Post } from '@nestjs/common';
import { EduService } from '../../service/edu.service';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { TeacherResponseDto } from '../../dto/response/teacher-response.dto';
import { TeacherResponseDataDto } from '../../dto/response/teacher-response-data.dto';

@Controller('edu')
export class EduController {
  constructor(private eduService: EduService) {}

  @Get()
  allTeachers(): Observable<TeacherResponseDto> {
    return this.eduService.allTeachers();
  }

  @Get('data-dto')
  allTeachersDataDto(): Observable<TeacherResponseDataDto[]> {
    return this.eduService.allTeachersDataDto();
  }

  @Get('data-without-dto')
  allTeachersDataWithoutDto(): Observable<AxiosResponse<any>> {
    return this.eduService.allTeachersDataWithoutDto();
  }

  @Get('promise')
  async allTeachersPromise(): Promise<AxiosResponse<any>> {
    return await this.eduService.allTeachersPromise();
  }

  @Get('new-promise')
  async allTeachersNewPromise(): Promise<AxiosResponse<any>> {
    return await this.eduService.allTeachersNewPromise();
  }
}
