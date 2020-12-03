import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', { static: true}) signupForm : NgForm;
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  /* onSubmit(form: HTMLFontElement) {
    console.log(form);
  } */
  onSubmit(){
    console.log(this.signupForm);
  }
}
