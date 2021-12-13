import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LocationService } from '../location/location.service';
import { ProductService } from '../product/product.service';
import ProductInventory from './product-inventory.entity';

@Injectable()
export class ProductInventoryService {
  constructor(
    @InjectRepository(ProductInventory)
    private productInventoryRepository: Repository<ProductInventory>,
    private productService: ProductService,
    private locationService: LocationService,
  ) {}

  //   --8.- Listar la cantidad total de productos por el área en el que se encuentran dentro de la planta de producción.
  async totalProductByArea() {
    return await this.productInventoryRepository
      .createQueryBuilder('productInventory')
      .leftJoinAndSelect('productInventory.LocationID', 'l')
      .select('l.LocationID')
      .addSelect('Name')
      .addSelect('SUM(productInventory.Quantity)', 'cantidad')
      .groupBy('l.LocationID')
      .addGroupBy('Name')
      .orderBy('l.LocationID')
      .getRawMany();
  }

  // --10 .- Obtener la cantidad de productos que ya se encuentran en el área de ensamblaje final
  async totalProductsFinal() {
    return await this.productInventoryRepository.count({
      where: { LocationID: 60 },
    });
  }

  //   -- 13 Agregar 666 registros a un estante tipo 4 a un estante R en un compartimiento de almacenamiento 100

  async addQuantity(datos: any) {
    try {
      const { ProductID, LocationID } = datos;
      const product = await this.productService.getProductById(ProductID);
      if (!product) throw Error('Producto no existe');
      const Location = await this.locationService.getById(LocationID);
      if (!Location) throw new Error('Locación no existente');
      const { Shelf, Bin, Quantity } = datos;
      const data = this.productInventoryRepository.create({
        LocationID,
        ProductID,
        Shelf,
        Bin,
        Quantity,
      });
      this.productInventoryRepository.save(data);
    } catch (error) {
      console.log('Product inventory, add Quantitu => ', error);
      throw error;
    }
  }

  // insert into [Production].[ProductInventory](
  //             [ProductID]
  //             ,[LocationID]
  //             ,[Shelf]
  //             ,[Bin]
  //             ,[Quantity])
  // values ( 4
  // 		,5
  // 		,'R'
  // 		,100
  // 		,666);
}
