import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { Order } from './order.model';
import { Product } from './product.model';

@Table({ tableName: 'orderitems', timestamps: true })
export class OrderItem extends Model<OrderItem> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  declare orderitem_id: number;

  @ForeignKey(() => Order)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare order_id: number;

  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare product_id: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  declare quantity: number;
}
