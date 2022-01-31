import {IsNumber } from "class-validator";


export class AddCarDto {
  readonly vendor: string;
  @IsNumber({},{message:"must be a number"})
  readonly userId: number;
}