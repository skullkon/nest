import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateCarDto } from "./dto/create-car.dto";
import { CarsService } from "./cars.service";

@Controller('cars')
export class CarsController {
  constructor(private carsService: CarsService) {}

  @Post()
  create(@Body() dto: CreateCarDto) {
    return this.carsService.createCar(dto);
  }

  @Get('/:value')
  getByValue(@Param('value') value: string) {
    return this.carsService.getCarByValue(value);
  }
}
