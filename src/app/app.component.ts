import { Component } from '@angular/core';
import { Product } from './product.model';
// import scss from '@angular/scss';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  widthImg = 10;

  name = 'Jorge Vilca'; //debe ser publico, si no se declara se reconoce coomo publico
  age = 34;
  img = 'https://source.unsplash.com/random';
  btnDisabled = true;

  register = {
    name: '',
    email: '',
    password: ''
  }

  person = {
    name: 'jorge',
    lastName: 'vilca',
    age: 34,
    avatar:'https://source.unsplash.com/random'
  }

  names: string[] = ['Jorge', 'Juan', 'Pedro', 'Pablo', 'Pepito'];
  newName: string = '';
  box = {
    width: 100,
    height: 100,
    background: 'red'
  }

  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

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

  onRegister() {
    console.log(this.register);
  }
}
