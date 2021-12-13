import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import Location from '../location/location.entity';
import Product from '../product/product.entity';

@Entity({
  database: 'Produccion',
  schema: 'Production',
  name: 'ProductInventory',
})
export default class ProductInventory {
  @ManyToOne(() => Product, (product) => product.productInventory, {
    primary: true,
  })
  @JoinColumn({ name: 'ProductID' })
  ProductID: Product;

  @ManyToOne(() => Location, (locationID) => locationID.productInventory, {
    primary: true,
  })
  @JoinColumn({ name: 'LocationID' })
  LocationID: Location;
  @Column()
  Shelf: string;

  @Column()
  Bin: number;

  @Column()
  Quantity: number;

  @Column()
  rowguid: string;

  @Column()
  ModifiedDate: Date;
}
