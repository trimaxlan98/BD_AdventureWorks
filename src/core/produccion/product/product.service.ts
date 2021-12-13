import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThanOrEqual, Repository } from 'typeorm';
import Product from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  // --1.- Listar todos los productos que tengan un precio de venta mayor o igual a n dólares.
  async getAllProducts(listPrice: number, select: any[]) {
    return await this.productRepository.find({
      select,
      where: { ListPrice: MoreThanOrEqual(listPrice) },
    });
  }

  //   --2.- Listar la cantidad de productos que se venden para ensamblar en casa
  async productosEnsamble() {
    return await this.productRepository.count({ where: { MakeFlag: 1 } });
  }

  //   --3.- Listar los productos que les toma un día o más en ensamblar el producto
  async diasProductos(dias: number, select: any[]) {
    return await this.productRepository.find({
      where: { DaysToManufacture: MoreThanOrEqual(dias) },
      select,
    });
  }

  //   --4.- Listar la cantidad de productos Amarillos
  async productoPorColor(Color: string) {
    try {
      return await this.productRepository.find({ where: { Color } });
    } catch (e) {
      console.log(e);
    }
  }

  async getProductById(ProductID: number) {
    return await this.productRepository.findOne(ProductID);
  }
}
