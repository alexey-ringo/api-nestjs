import { IsNumber } from 'class-validator';
import { Exclude, Expose, Type } from 'class-transformer';
import { TeacherResponseDataDto } from './teacher-response-data.dto';

@Exclude()
export class TeacherResponseDto {
  @Expose()
  @IsNumber()
  total: number;

  @Expose()
  @Type(() => TeacherResponseDataDto)
  users: TeacherResponseDataDto[];
}
