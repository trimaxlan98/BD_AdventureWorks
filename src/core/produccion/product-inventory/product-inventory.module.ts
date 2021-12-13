import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationModule } from '../location/location.module';
import { ProductModule } from '../product/product.module';
import { ProductInventoryController } from './product-inventory.controller';
import ProductInventory from './product-inventory.entity';
import { ProductInventoryService } from './product-inventory.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductInventory]),
    ProductModule,
    LocationModule,
  ],
  controllers: [ProductInventoryController],
  providers: [ProductInventoryService],
})
export class ProductInventoryModule {}
