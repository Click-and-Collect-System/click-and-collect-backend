import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { User } from './user.model';

@Table({ tableName: 'orders', timestamps: true })
export class Order extends Model<Order> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  declare order_id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare user_id: number;

  @Column({ type: DataType.DATE, allowNull: false })
  declare date: Date;

  /* status noch als ENUM-Werte festlegen,
   z. B. "offen", "abgeschlossen", "abgeholt".*/
  @Column({ type: DataType.STRING(20), allowNull: false })
  declare status: string;
}
