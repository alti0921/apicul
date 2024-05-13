
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @IsEmail({},{
        message:'formato email invalido'
    }) 
  email: string
  firstname: string   
  lastname:string
  
  }
  