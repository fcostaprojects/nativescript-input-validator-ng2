import { ValidationError, validate } from 'class-validator';
import { OnInit } from '@angular/core';
var dialogs = require("ui/dialogs");
import { BasicModel} from "../../model/basic-model";


export abstract class BasicComponent<T extends BasicModel> {

   model: T;
   
   listErrors: Array<ValidationError> = [];

	constructor(arg: T) {
      this.model = arg;
	}

	validate() {
		try {
			validate(this.model).then(errors => {
				if (errors.length > 0) {
					this.listErrors = errors;
				} else {
					this.listErrors = [];
               this.afterValidate();
				}
			});
		} catch (e) {
			console.log(e);
		}
	}

   afterValidate() {

   }

	message(message: string) {
		dialogs.alert(message).then(function () {
			console.log(message);
		});

	}
}