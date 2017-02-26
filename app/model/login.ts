import { ValidateIf, IsNotEmpty, IsEmail, IsEmailOptions, ValidateNested } from "class-validator";
import { BasicModel} from "./basic-model";

export class Login extends BasicModel  {

   @IsEmail(undefined, {message:"Email invalid"})
   @IsNotEmpty({message:"Email is required"})
   email: string;

   @IsNotEmpty({message:"Password is required"})
   password: string;
}