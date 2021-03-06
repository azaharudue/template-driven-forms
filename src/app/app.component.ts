import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', { static: true}) signupForm: NgForm;
  defaultQuestion = 'pet';
  genders = ['Male', 'Female'];
  answer = '';
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;
  suggestUserName() {
    const suggestedName = 'Superuser';
   /*  this.signupForm.setValue({
      userData: {
        username: suggestedName,
        email: '',
        },
        secret: 'pet',
        questionAnswer: '',
        gender: 'male'
    }); */
    this.signupForm.form.patchValue({
      userData: {
        username: 'RandomUser'

    }});
  }
  /* onSubmit(form: HTMLFontElement) {
    console.log(form);
  } */
  onSubmit() {
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.userData.secret;
    this.user.answer = this.signupForm.value.userData.answer;
    this.user.gender = this.signupForm.value.userData.gender;
    this.submitted = true;
    this.signupForm.reset();

  }
}
