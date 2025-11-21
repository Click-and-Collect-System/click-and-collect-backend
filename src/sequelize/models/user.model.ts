import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'users', timestamps: true })
export class User extends Model<User> {
  
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  declare id: number;
  
  @Column({ type: DataType.STRING, allowNull: false })
  declare fullname: string;
  
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  declare email: string;
  
  @Column({ type: DataType.TEXT, allowNull: true })
  declare about?: string;
}
