import { Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { ProductService } from './product.service';
import { ColorProduct } from './product.type';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Get('/:listprice')
  async getAllProduct(@Param('listprice') listPrice: number) {
    return await this.productService.getAllProducts(listPrice, [
      'ProductID',
      'Name',
      'ProductNumber',
      'ListPrice',
    ]);
  }

  @Get()
  async productosEnsamble() {
    return await this.productService.productosEnsamble();
  }
  @Get('/dias/:days')
  async getDiasProduct(@Param('days') days: number) {
    return await this.productService.diasProductos(days, [
      'ProductID',
      'Name',
      'ProductNumber',
      'ListPrice',
    ]);
  }

  @Get('/color/:color')
  async getPorColor(@Param('color') color: ColorProduct, @Res() res: Response) {
    const colorCheck = `${color[0].toUpperCase()}${color.toString().slice(1)}`;
    if (!Object.values(ColorProduct).includes(colorCheck)) {
      res.status(400).json({ message: 'El color ingresado no existe' });
    } else {
      const data = await this.productService.productoPorColor(colorCheck);
      res.json(data);
    }
  }
}
