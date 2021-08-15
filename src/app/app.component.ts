import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
  /*template: '<span>Jose Luis</span>'*/
})

export class AppComponent{
  titulo: string = 'Contador App';  /*Copiamos desde esta linea de codigo */
  numero: number = 10;
  base: number=5;

  acumular ( valor:number) {
    this.numero += valor;
  }                                 /*hasta esta, y la pegamos en el doc. contadora.component.ts */
}




  /*----otras actividades 
  ------Introduccion a angular
  suma5: number = 5;
  sumar(){
    this.numero += 1;
  }
  restar(){
    this.numero -= 1;
  }
  -----Ejercicio 1 parcial 3
  acumular(valor:number){
    this.numero += valor;
  }
  -----Ejercicio 2 parcial 3*/