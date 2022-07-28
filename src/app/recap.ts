const username:string = 'jorgeBytes';

const sum = (a:number, b:number) => {
  return a + b;
}

sum(1, 2);

class person {
  constructor(private age:number, private name:string, private lastName:string) {
  }
}

const objPerson =new person(34, 'Jorge', 'Vilca');
