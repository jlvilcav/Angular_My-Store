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

  names: string[] = ['Jorge', 'Juan', 'Pedro', 'Pablo', 'Pepito'];
  newName: string = '';

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age++;
  }
  decreaseAge() {
    this.person.age--;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;

  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number){
    this.names.splice(index, 1);
  }
}
