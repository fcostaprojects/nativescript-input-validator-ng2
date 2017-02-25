import { ValidateIf, IsNotEmpty, IsEmail, IsEmailOptions, ValidateNested } from "class-validator";

export class Login {

   @IsEmail(undefined, {message:"Email invalid"})
   @IsNotEmpty({message:"Email is required"})
   email: string;

   @IsNotEmpty({message:"Password is required"})
   password: string;
}