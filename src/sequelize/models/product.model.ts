import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { OrderItem } from './orderitem.model';

@Table({ tableName: 'products', timestamps: true })
export class Product extends Model<Product> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  declare product_id: number;

  @Column({ type: DataType.STRING(50), allowNull: false })
  declare name: string;

  @Column({ type: DataType.DECIMAL(5, 2), allowNull: false })
  declare price: number;

  @Column({ type: DataType.STRING(50), allowNull: false })
  declare category: string;

  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: true })
  declare available: boolean;

  @Column({ type: DataType.STRING(255), allowNull: true })
  declare imageUrl?: string;


  @HasMany(() => OrderItem)
  declare orderItems: OrderItem[];
}

