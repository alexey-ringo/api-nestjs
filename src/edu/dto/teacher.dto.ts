import { IsNumber, IsString } from 'class-validator';

export class TeacherDto {
  @IsNumber()
  user_id: number;

  @IsNumber()
  global_user_id: number;

  @IsString()
  email: string;

  @IsString()
  name: string;

  @IsString()
  registered: string;

  @IsString()
  avatar: string;

  @IsString()
  url: string;
}
