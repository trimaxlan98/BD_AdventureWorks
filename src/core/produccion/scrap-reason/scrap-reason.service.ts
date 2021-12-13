import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import ScrapReason from './ScrapReason.entity';

@Injectable()
export class ScrapReasonService {
  constructor(
    @InjectRepository(ScrapReason)
    private scrapReasonRepository: Repository<ScrapReason>,
  ) {}

  async getById(scrapReasonID: number) {
    return await this.scrapReasonRepository.findOne(scrapReasonID);
  }
}
