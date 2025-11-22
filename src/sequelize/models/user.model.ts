import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'users', timestamps: true })
export class User extends Model<User> {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  declare user_id: number;

  @Column({ type: DataType.STRING(50), allowNull: false })
  declare firstName: string;

  @Column({ type: DataType.STRING(50), allowNull: false })
  declare lastName: string;

  @Column({ type: DataType.STRING(50), allowNull: false, unique: true })
  declare email: string;

  @Column({ type: DataType.STRING(255), allowNull: false })
  declare password: string;

  @Column({
    type: DataType.ENUM('admin', 'user'),
    allowNull: false,
    defaultValue: 'user',
    comment: 'user: normal user, admin: CMS access'
  })
  declare role: 'user' | 'admin';
}
