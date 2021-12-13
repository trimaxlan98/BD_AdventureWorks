/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
import { ProductService } from '../product/product.service';
import { ScrapReasonService } from '../scrap-reason/scrap-reason.service';
import WorkOrder from './work-order.entity';
import { CreateFields } from './work-order.type';

@Injectable()
export class WorkOrderService {
  constructor(
    @InjectRepository(WorkOrder)
    private workOrderRepository: Repository<WorkOrder>,
    private productService: ProductService,
    private scrapReasonService: ScrapReasonService,
  ) {}

  async create(createObj: CreateFields) {
    try {
      const product = await this.productService.getProductById(
        createObj.productID,
      );
      if (!product) throw new Error('El producto no existe');
      const scrapReason = await this.scrapReasonService.getById(
        createObj.scrapReasonID,
      );
      if (!scrapReason) throw new Error('Elemento no existente');
      const { productID, scrapReasonID, ...rest } = createObj;
      const data = this.workOrderRepository.create({
        ...rest,
        ProductID: product,
        ScrapReasonID: scrapReason,
      });
      await this.workOrderRepository.save(data);
    } catch (error) {
      console.log('create work order => ', error);
      throw error;
    }
  }

  //   --11.- Listar las ordenes de producción que terminaron de fabricarse el 1 de enero del año 2013
  async getOrdersByDate(EndDate: Date) {
    return await this.workOrderRepository.find({ where: { EndDate } });
  }

  //   --12.- Listar las ordenes de manufactura que no cumplieron con su meta de stock
  async getOrdersNotFinished() {
    return await this.workOrderRepository.find({ ScrappedQty: Not(0) });
  }
}
