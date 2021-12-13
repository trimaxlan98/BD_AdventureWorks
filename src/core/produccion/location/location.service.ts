import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Location from './location.entity';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private locationRepository: Repository<Location>,
  ) {}

  async getById(LocationID: number) {
    return await this.locationRepository.findOne(LocationID);
  }
}
