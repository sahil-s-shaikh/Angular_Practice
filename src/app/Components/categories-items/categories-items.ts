import { Component } from '@angular/core';

@Component({
  selector: 'app-categories-items',
  imports: [],
  templateUrl: './categories-items.html',
  styleUrl: './categories-items.css',
  inputs:['categoriesObj']
})
export class CategoriesItems {

categoriesObj : any;
 
}
