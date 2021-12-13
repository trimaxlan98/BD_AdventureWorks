import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScrapReasonController } from './scrap-reason.controller';
import { ScrapReasonService } from './scrap-reason.service';
import ScrapReason from './ScrapReason.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ScrapReason])],
  controllers: [ScrapReasonController],
  providers: [ScrapReasonService],
  exports: [ScrapReasonService],
})
export class ScrapReasonModule {}
