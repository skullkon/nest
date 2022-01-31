import {BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../users/users.model"
import { Car } from "./cars.model";

@Table({tableName: 'user_cars', createdAt: false, updatedAt: false})
export class UserCars extends Model<UserCars> {

  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ForeignKey(() => Car)
  @Column({type: DataType.INTEGER})
  carId: number;

  @ForeignKey(() => User)
  @Column({type: DataType.INTEGER})
  userId: number;
}