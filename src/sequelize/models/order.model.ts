import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { User } from './user.model';
import { OrderItem } from './orderitem.model';

@Table({ tableName: 'orders', timestamps: true })
export class Order extends Model<Order> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  declare order_id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare user_id: number;

  @Column({ type: DataType.DATE, allowNull: false })
  declare date: Date;

  @Column({
    type: DataType.ENUM('offen', 'in_bearbeitung', 'abholbereit', 'abgeholt', 'storniert'),
    allowNull: false,
    defaultValue: 'offen'
  })
  declare status: string;

  @BelongsTo(() => User)
  declare user: User;

  @HasMany(() => OrderItem)
  declare items: OrderItem[];
}

