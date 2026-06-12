import { Component } from '@angular/core';
// import { Form } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {

UserName : string ='Shubham';

my_img_url =
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmRlwbWH3kPMJ32C3qDf4HcI_f8gBfUrb6ww&s';


Flag : boolean=true;

toggelFlag(){
  this.Flag =! this.Flag
}

}
