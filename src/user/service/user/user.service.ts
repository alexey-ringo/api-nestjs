import { Injectable } from '@nestjs/common';
import { UserDto } from '../../dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../../entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  create(user: UserDto): Promise<UserDto> {
    return this.userRepository.save(user);
  }

  findAll(): Promise<UserDto[]> {
    return this.userRepository.find();
  }
  // public users: UserDto[] = [];
  //
  // create(user: UserDto): UserDto {
  //   this.users.push(user);
  //   return user;
  // }
  //
  // findAll(): UserDto[] {
  //   return this.users;
  // }

}
