import { Component, OnInit } from '@angular/core';
import { json } from '../assets/data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // Variables
  title = 'prueba-motencnologias';
  data: any = json;
  resultExercise1: any = json;
  resultExercise2: any = json;
  resultExercise3: any = json;

  ngOnInit(): void {
    this.Exercise1();
    this.Exercise2();
    this.Exercise3();
  }

  // Exercise N°1
  // El mismo arreglo pero todas las personas cuya edad sea mayor a 35 sumarle a su salario $500.000
  Exercise1 = () => {
    const payRise = 500000;
    this.data.forEach((e) => {
      if (e.age > 35) {
        e.salary = e.salary.substring(1, e.salary.length);
        e.salary = e.salary + payRise;
        e.salary = '$' + e.salary;
      }
    });
    this.resultExercise1 = this.data;
  };

  // Exercise N°2
  // Un arreglo de todas las personas activas
  Exercise2 = () => {
    const activePeople = [];
    this.data.forEach((e) => {
      if (e.isActive) {
        activePeople.push(e);
      }
    });
    this.resultExercise2 = activePeople;
  };

  // Exercise N°3
  // Un objeto de todas las profesiones con sus respectivas personas
  Exercise3 = () => {
    const professions = [];
    const peopleByProfession = {};
    this.data.forEach((e) => {
      if (!professions.includes(e.profesion)) {
        professions.push(e.profesion);
      }
    });

    professions.map((value, index) => {
      const people = [];
      this.data.forEach((x) => {
        if (x.profesion === value) {
          people.push(x);
        }
      });
      peopleByProfession[`${value}`] = people;
    });
    this.resultExercise3 = peopleByProfession;
  };
}
