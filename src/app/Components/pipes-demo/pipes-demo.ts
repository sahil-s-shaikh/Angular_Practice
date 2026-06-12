import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../Custom_pipes/remaining-pipe';
import { OdinalPipe } from '../../Custom_pipes/odinal-pipe';
import { CreditcardPipe } from '../../Custom_pipes/creditcard-pipe';
import { AgePipe } from '../../Custom_pipes/age-pipe';
import { AlphaNumeric } from '../../custom-directives/alpha-numeric';
import { MySortPipe } from '../../Custom_pipes/my-sort-pipe';

@Component({
  selector: 'app-pipes-demo',
  imports: [CommonModule,FormsModule,RemainingPipe,OdinalPipe,CreditcardPipe,AgePipe,AlphaNumeric,MySortPipe],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
User_Name : string ='RoHit ShRaMa';
salary =40000;
dateObj = new Date();

user={name:'sahil',role:'student',address:'pune',age:22}

cars=['Tata','Bmw','Honda','Toyota','Supra'];

msg = 'Hello';

num = 21;

cardno:string='';

DOB = new Date('');

numArr=[20,3,30,10,40,50];



}
