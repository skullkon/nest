import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import { Car } from "../cars/cars.model";
import { UserCars } from "../cars/user-cars.model";

interface UserCreationAttrs {
  name: string;
}

@Table({tableName:'users'})
export class User extends Model<User,UserCreationAttrs> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;
  @Column({type: DataType.STRING, allowNull:false})
  name: string;

  @BelongsToMany(()=> User,()=> UserCars)
  cars: Car[];

}