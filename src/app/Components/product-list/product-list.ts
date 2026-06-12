import { Component } from '@angular/core';
import product_data from './product_data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar,faInr } from '@fortawesome/free-solid-svg-icons';
import {NgxPaginationModule} from 'ngx-pagination';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';
import { TextOnly } from '../../custom-directives/text-only';
import { DisablePaste } from '../../custom-directives/disable-paste';
import { Zoomin } from '../../custom-directives/zoomin';



@Component({
  selector: 'app-product-list',
  imports: [FontAwesomeModule,
    NgxPaginationModule,
    TextOnly,
    DisablePaste,
    Zoomin
  
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  productArr = product_data;
  faStar = faStar
  faInr = faInr
  p:any;

  sortAsc(){

    this.productArr.sort((p1,p2)=>p1.price - p2.price);
  }

  sortDesc(){
this.productArr.sort((p1,p2)=>p2 .price - p1.price);
  }
  
  opensweetAlert(){
    Swal.fire('Good Job!','You clicked the button!','success')
  }

openConfirmation(){
  Swal.fire({
  title: "Do you want to save the changes?",
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "Save",
  denyButtonText: `Don't save`
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) Swal.fire("Saved!", "", "success");
  else if (result.isDenied) Swal.fire("Changes are not saved", "", "info");
});
}
openSnackbar(){
  new Snackbar('Hello,Good Mornging',{
    position:'top-center',theme:'light',timeout:2000,actionText:'x'
  })
}


}
