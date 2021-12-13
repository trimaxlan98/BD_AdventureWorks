import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Product from '../product/product.entity';
import ScrapReason from '../scrap-reason/ScrapReason.entity';

@Entity({ database: 'Produccion', schema: 'Production', name: 'WorkOrder' })
export default class WorkOrder {
  @PrimaryGeneratedColumn('increment')
  WorkOrderID: number;
  @Column()
  OrderQty: number;
  @Column()
  ScrappedQty: number;
  @Column()
  StartDate: Date;
  @Column()
  EndDate: Date;
  @Column()
  DueDate: Date;
  @Column()
  ModifiedDate: Date;
  @ManyToOne(() => Product)
  @JoinColumn({ name: 'ProductID' })
  ProductID: Product;
  @ManyToOne(() => ScrapReason, (ScrapReasonID) => ScrapReasonID.workOrder)
  @JoinColumn({ name: 'ScrapReasonID' })
  ScrapReasonID: ScrapReason;
}
