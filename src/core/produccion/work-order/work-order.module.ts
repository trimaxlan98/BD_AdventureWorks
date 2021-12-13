import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from '../product/product.module';
import { ScrapReasonModule } from '../scrap-reason/scrap-reason.module';
import { WorkOrderController } from './work-order.controller';
import WorkOrder from './work-order.entity';
import { WorkOrderService } from './work-order.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([WorkOrder]),
    ProductModule,
    ScrapReasonModule,
  ],
  controllers: [WorkOrderController],
  providers: [WorkOrderService],
})
export class WorkOrderModule {}
