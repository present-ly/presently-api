import { Test, TestingModule } from '@nestjs/testing';
import { FriendController } from './friend.controller';

describe('Friend Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [FriendController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: FriendController = module.get<FriendController>(FriendController);
    expect(controller).toBeDefined();
  });
});
