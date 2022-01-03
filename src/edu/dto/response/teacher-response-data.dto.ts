import { IsNumber, IsString } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class TeacherResponseDataDto {
  @Expose()
  @IsNumber()
  user_id: number;

  @Expose()
  @IsNumber()
  global_user_id: number;

  @Expose()
  @IsString()
  email: string;

  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsString()
  registered: string;

  @Expose()
  @IsString()
  avatar: string;

  @Expose()
  @IsString()
  url: string;
}
