import { Test, TestingModule } from '@nestjs/testing';
import { CatsService } from './cats.service';

describe('CatsService', () => {
  let provider: CatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsService],
    }).compile();

    provider = module.get<CatsService>(CatsService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
