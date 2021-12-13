import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { ProductModule } from './core/produccion/product/product.module';
import { WorkOrderModule } from './core/produccion/work-order/work-order.module';
import Product from './core/produccion/product/product.entity';
import ScrapReason from './core/produccion/scrap-reason/ScrapReason.entity';
import { ScrapReasonModule } from './core/produccion/scrap-reason/scrap-reason.module';
import { LocationModule } from './core/produccion/location/location.module';
import { ProductInventoryModule } from './core/produccion/product-inventory/product-inventory.module';
import WorkOrder from './core/produccion/work-order/work-order.entity';
import Location from './core/produccion/location/location.entity';
import ProductInventory from './core/produccion/product-inventory/product-inventory.entity';
config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: process.env.host1,
      port: 1433,
      username: process.env.user1,
      password: process.env.password1,
      database: 'Produccion',
      entities: [
        Product,
        ScrapReason,
        WorkOrder,
        Location,
        ProductInventory,
        ScrapReason,
      ],
      options: { encrypt: false },
    }),
    ScrapReasonModule,
    ProductModule,
    WorkOrderModule,
    LocationModule,
    ProductInventoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
