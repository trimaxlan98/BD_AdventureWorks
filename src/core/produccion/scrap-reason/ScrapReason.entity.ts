import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import WorkOrder from '../work-order/work-order.entity';

@Entity({ database: 'Produccion', schema: 'Production', name: 'ScrapReason' })
export default class ScrapReason {
  @PrimaryGeneratedColumn('increment')
  ScrapReasonID: number;

  @Column()
  Name: string;

  @Column()
  ModifiedDate: Date;

  @OneToMany(() => WorkOrder, (workOrder) => workOrder.ScrapReasonID)
  workOrder: WorkOrder;
}
