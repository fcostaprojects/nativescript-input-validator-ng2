import { Component, OnInit } from '@angular/core';
import { Book } from '../../model/book';
import { ValidationError, validate } from 'class-validator';
import { BasicComponent } from '../shared/basic-component';
import { Login } from '../../model/login';
var dialogs = require("ui/dialogs");

@Component({
	moduleId: module.id,
	selector: 'book',
	templateUrl: './book.component.html'
})

export class BookComponent extends BasicComponent<Book> {

	constructor() {
		super(new Book());
	}

	afterValidate() {
		super.message("Save OK");
	}

}