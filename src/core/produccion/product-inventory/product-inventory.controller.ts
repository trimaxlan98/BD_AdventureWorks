import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { ProductInventoryService } from './product-inventory.service';

@Controller('product-inventory')
export class ProductInventoryController {
  constructor(private productInventoryService: ProductInventoryService) {}

  @Get()
  async ProductsByArea() {
    return await this.productInventoryService.totalProductByArea();
  }

  @Get('final')
  async ProductsByAreaFinal() {
    return await this.productInventoryService.totalProductsFinal();
  }

  @Post()
  async createProduct(@Body() body: any, @Res() res: Response) {
    try {
      await this.productInventoryService.addQuantity(body);
      res.json({ message: 'Registro exitoso' });
    } catch (error) {
      res.status(400).json({ message: 'Error al registrar los datos', error });
    }
  }
}
