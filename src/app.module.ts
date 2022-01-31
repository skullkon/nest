import {Module} from "@nestjs/common"
import {ConfigModule} from "@nestjs/config";
import {SequelizeModule} from "@nestjs/sequelize";
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { CarsService } from './cars/cars.service';
import { CarsModule } from './cars/cars.module';
import { User } from "./users/users.model";
import { Car } from "./cars/cars.model";
import { UserCars } from "./cars/user-cars.model";
import { UsersService } from "./users/users.service";



@Module({
  controllers:[],
  providers:[],
  imports:[
    ConfigModule.forRoot({
      envFilePath: `.development.env`
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRESS_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRESS_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User,Car,UserCars],
      autoLoadModels: true
    }),
    UsersModule,
    CarsModule,
  ]
})

export class AppModule {}