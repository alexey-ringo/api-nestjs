import { TeacherDto } from './teacher.dto';

describe('UserDto', () => {
  it('should be defined', () => {
    expect(new TeacherDto()).toBeDefined();
  });
});
