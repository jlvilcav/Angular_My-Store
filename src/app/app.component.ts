import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Jorge Vilca'; //debe ser publico, si no se declara se reconoce coomo publico
  age = 34;
  img = 'https://source.unsplash.com/random';
}
