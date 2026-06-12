import { Component, inject } from '@angular/core';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-about-us',
  imports: [RouterLink],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs {

  router = inject(Router)
  DoSomeThing(){

    console.log("Do Something .....");
this.router.navigateByUrl('/home');
  }
}
