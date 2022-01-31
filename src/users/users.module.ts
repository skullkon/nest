import { forwardRef, Module } from "@nestjs/common";
import { UsersService } from './users.service';
import { UsersController } from "./users.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./users.model";
import { Car } from "../cars/cars.model";
import { UserCars } from "../cars/user-cars.model";
import { CarsModule } from "../cars/cars.module";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Car, UserCars]),
    CarsModule
  ],
  exports: [
    UsersService,
  ]
})
export class UsersModule {}
