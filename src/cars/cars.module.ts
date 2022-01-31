import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { Car } from "./cars.model";
import { User } from "../users/users.model";
import { UserCars } from "./user-cars.model";
import { CarsService } from "./cars.service";

@Module({
  providers: [CarsService],
  controllers: [CarsController],
  imports: [
    SequelizeModule.forFeature([Car, User, UserCars])
  ],
  exports: [
    CarsService
  ]
})
export class CarsModule {}
