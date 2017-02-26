import { ValidateIf, IsNotEmpty, IsEmail, IsEmailOptions, ValidateNested } from "class-validator";
import { BasicModel} from "./basic-model";

export class Book extends BasicModel {

   @IsNotEmpty({message:"Name is required"})
   name: string;

   @IsNotEmpty({message:"Author is required"})
   author: string;
   
   @IsNotEmpty({message:"Pages is required"})
   pages: string;

}