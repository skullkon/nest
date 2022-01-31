import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Car } from "./cars.model";
import { CreateCarDto } from "./dto/create-car.dto";

@Injectable()
export class CarsService {
  constructor(@InjectModel(Car) private carRepository: typeof Car) {}

  async createCar(dto: CreateCarDto) {
    const role = await this.carRepository.create(dto);
    return role;
  }

  async getCarByValue(vendor: string) {
    const role = await this.carRepository.findOne({where: {vendor}})
    return role;
  }
}