import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import ProductInventory from '../product-inventory/product-inventory.entity';
import WorkOrder from '../work-order/work-order.entity';

@Entity({ database: 'Produccion', schema: 'Production' })
export default class Product {
  @PrimaryGeneratedColumn('increment', { name: 'ProductID' })
  ProductID: number;

  @Column({ nullable: false })
  Name: string;

  @Column()
  ProductNumber: string;

  @Column({ default: true })
  MakeFlag: boolean;

  @Column({ default: true })
  FinishedGoodsFlag: boolean;

  @Column({
    enum: [
      null,
      'Black',
      'Blue',
      'Grey',
      'Multi',
      'Red',
      'Silver',
      'Silver/Black',
      'White',
      'Yellow',
    ],
  })
  Color: string;

  @Column()
  SafetyStockLevel: number;

  @Column()
  ReorderPoint: number;

  @Column()
  StandardCost: number;

  @Column()
  ListPrice: number;

  @Column()
  Size: string;

  @Column()
  SizeUnitMeasureCode: string;

  @Column()
  WeightUnitMeasureCode: string;

  @Column()
  Weight: number;

  @Column()
  DaysToManufacture: number;

  @Column()
  ProductLine: string;

  @Column()
  Class: string;

  @Column()
  Style: string;

  @Column()
  ProductSubcategoryID: number;

  @Column()
  ProductModelID: number;

  @OneToMany(() => WorkOrder, (workOrder) => workOrder.ProductID)
  workOrder: WorkOrder;

  @OneToMany(
    () => ProductInventory,
    (productInventory) => productInventory.ProductID,
  )
  productInventory: ProductInventory;
}
