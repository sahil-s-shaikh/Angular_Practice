import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './Components/navbar/navbar';
import { Carousel } from './Components/carousel/carousel';
import { Categories } from './Components/categories/categories';
import { Body } from './Components/body/body';
import { Footer } from './Components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar,Body,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular-p1');
}
