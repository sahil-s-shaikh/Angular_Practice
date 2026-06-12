import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-contact-us',
  imports: [CommonModule,FormsModule],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',
})
export class ContactUs {
  hasChanes:boolean= true;

  user={firstName:'sachin',lastName:'sharma'};

  submitForm(formData : any){

    console.log(formData)
    this.hasChanes=false;
  }
}
