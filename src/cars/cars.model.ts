import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import { User } from "../users/users.model";
import { UserCars } from "./user-cars.model";

interface CarsCreationAttrs {
  name: string;
}

@Table({tableName:'cars'})
export class Car extends Model<Car,CarsCreationAttrs> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;
  @Column({type: DataType.STRING, allowNull:false})
  vendor: string;

  @BelongsToMany(()=> Car,()=> UserCars)
  users: User[];

}