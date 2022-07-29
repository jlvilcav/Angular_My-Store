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
  btnDisabled = true;

  person = {
    name: 'Jorge',
    lastName: 'Vilca',
    age: 34,
    avatar:'https://source.unsplash.com/random'
  }

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age++;
  }
  decreaseAge() {
    this.person.age--;
  }
}
