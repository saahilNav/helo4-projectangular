import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'helop4';
  emp= new Employee("rrr",20);
 msg:string='helo world g';
 onFormSubmit(empForm:NgForm) {
  let name = empForm.controls['name'].value;
  let age = empForm.controls['age'].value;
  this.emp = new Employee(name, age);
}
}