import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './edu.controller';

describe('EduController', () => {
    let controller: EduController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [EduController],
        }).compile();

        controller = module.get<EduController>(EduController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
