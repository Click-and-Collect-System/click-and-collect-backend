import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'products', timestamps: true })
export class Product extends Model<Product> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  declare product_id: number;

  @Column({ type: DataType.STRING(50), allowNull: false })
  declare name: string;

  @Column({ type: DataType.DECIMAL(5,3), allowNull: false })
  declare price: number;

  @Column({ type: DataType.STRING(50), allowNull: false })
  declare category: string;

  @Column({ type: DataType.BOOLEAN, allowNull: false })
  declare available: boolean;
}
