# nativescript-input-validator-ng2
Example of input validation component for nativescript ng2, using class-validator
```javascript
export abstract class BasicModel {

}

export class Login extends BasicModel  {

   @IsEmail(undefined, {message:"Email invalid"})
   @IsNotEmpty({message:"Email is required"})
   email: string;

   @IsNotEmpty({message:"Password is required"})
   password: string;
}

export class Book extends BasicModel {

   @IsNotEmpty({message:"Name is required"})
   name: string;

   @IsNotEmpty({message:"Author is required"})
   author: string;
   
   @IsNotEmpty({message:"Pages is required"})
   pages: string;

}
```

![screen](https://cloud.githubusercontent.com/assets/22457603/23334454/9ca32b10-fb7d-11e6-84c3-734d63376ff5.png)

![screen-book](https://cloud.githubusercontent.com/assets/22457603/23341455/cffe55f8-fc26-11e6-829f-a8488e2fefa4.png)
