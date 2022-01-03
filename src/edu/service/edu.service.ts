import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map, Observable, pluck } from 'rxjs';
import { TeacherDto } from '../dto/teacher.dto';
import { AxiosResponse } from 'axios';
import { plainToInstance } from 'class-transformer';
import { TeacherResponseDto } from '../dto/response/teacher-response.dto';
import { TeacherResponseDataDto } from '../dto/response/teacher-response-data.dto';

@Injectable()
export class EduService {
  constructor(private httpService: HttpService) {}

  allTeachers(): Observable<TeacherResponseDto> {
    const resp = this.httpService
      .get('https://edu.nuzhnapomosh.ru/wp-json/v1/users/teachers')
      .pipe(
        map((response) => {
          const respTeachers = response.data.data;
          return plainToInstance(TeacherResponseDto, respTeachers);
        }),
      );
    return resp;
  }

  allTeachersDataDto(): Observable<TeacherResponseDataDto[]> {
    const resp = this.httpService
      .get('https://edu.nuzhnapomosh.ru/wp-json/v1/users/teachers')
      .pipe(
        map((response) => {
          const respTeachersData = response.data.data.users;
          if (Array.isArray(respTeachersData)) {
            const dataDtoTeachers = respTeachersData.map((item) => {
              return plainToInstance(TeacherResponseDataDto, item);
            });
            return dataDtoTeachers;
          }
          // return response.data.data.users;
        }),
      );
    console.log(resp.constructor.name);
    return resp;
  }

  allTeachersDataWithoutDto(): Observable<AxiosResponse<any>> {
    const resp = this.httpService
      .get('https://edu.nuzhnapomosh.ru/wp-json/v1/users/teachers')
      .pipe(map((response) => response.data.data.users));
    return resp;
  }

  async allTeachersPromise(): Promise<AxiosResponse<any>> {
    const resp = await this.httpService
      .get('https://edu.nuzhnapomosh.ru/wp-json/v1/users/teachers')
      .toPromise();
    return resp.data;
  }

  async allTeachersNewPromise(): Promise<AxiosResponse<any>> {
    const teachers = this.httpService
      .get('https://edu.nuzhnapomosh.ru/wp-json/v1/users/teachers')
      .pipe(map((response) => response.data));
    return await lastValueFrom(teachers).then();
  }
}
