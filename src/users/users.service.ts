import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./users.model";
import { CreateUserDto } from "./dto/create-user.dto";
import { AddCarDto } from "./dto/add-car.dto";
import { CarsService } from "../cars/cars.service";
import { Car } from "../cars/cars.model";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User,
              private carsService: CarsService) {
  }

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    return user;
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll({ include: { all: true } });
    return users;
  }

  async getUserByName(name: string) {
    const user = await this.userRepository.findOne({ where: { name } });
    return user;
  }

  async addCar(dto: AddCarDto) {
    const user = await this.userRepository.findByPk(dto.userId);
    const car = await this.carsService.getCarByValue(dto.vendor);
    if (car && user) {
      await user.$add("cars", car);
      return dto;
    }
    throw new HttpException("Пользователь или роль не найдены", HttpStatus.NOT_FOUND);
  }
}
