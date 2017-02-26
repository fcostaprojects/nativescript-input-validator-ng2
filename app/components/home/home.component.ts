import { Login } from './../../model/login';
import { Component, OnInit } from '@angular/core';
import { validate, ValidationError } from 'class-validator';
import { RouterExtensions } from "nativescript-angular";
import { BasicComponent } from '../shared/basic-component';
var dialogs = require("ui/dialogs");

@Component({
	moduleId: module.id,
	selector: 'home',
	templateUrl: './home.component.html'
})

export class HomeComponent extends BasicComponent<Login> {


	constructor(private routerExtensions: RouterExtensions) {
		super(new Login());
	}

	afterValidate() {
		this.routerExtensions.navigate(["book-edit"], { animated: false });
   }
}