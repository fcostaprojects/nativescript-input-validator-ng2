import { Login } from './../../model/login';
import { Component, OnInit } from '@angular/core';
import { validate, ValidationError } from 'class-validator';
var dialogs = require("ui/dialogs");

@Component({
	moduleId: module.id,
	selector: 'home',
	templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

	login: Login;

	listErrors: Array<ValidationError> = [];

	constructor() {
		this.login = new Login();
	}

	ngOnInit() { }

	validLogin() {
		try {
			validate(this.login).then(errors => {
				if (errors.length > 0) {
					this.listErrors = errors;
				} else {
					this.listErrors = null;
					this.messageLoginOk();
				}
			});
		} catch (e) {
			console.log(e);
		}
	}

	messageLoginOk() {
		dialogs.alert("Login sucess").then(function () {
			console.log("Login sucess");
		});

	}
}