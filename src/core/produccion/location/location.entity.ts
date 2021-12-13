import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import ProductInventory from '../product-inventory/product-inventory.entity';

@Entity({ database: 'Produccion', schema: 'Production' })
export default class Location {
  @PrimaryGeneratedColumn('increment')
  LocationID: number;

  @Column()
  Name: string;

  @Column()
  CostRate: number;

  @Column()
  Availability: number;

  @Column()
  ModifiedDate: Date;

  @OneToMany(
    () => ProductInventory,
    (productInventory) => productInventory.LocationID,
  )
  productInventory: ProductInventory;
}
