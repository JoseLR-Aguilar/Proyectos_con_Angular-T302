import { Component } from '@angular/core';
@Component({
    selector: 'app-contadora',          
                                        /*En la parte vacia de template colocamos  el codigo que cortamos del*/
                                        /*documento app.component.html*/
    template: `                         
        <h1>{{titulo}}</h1>             
        <h3>La base es: <strong>{{base}}</strong></h3>
        <button (click)="acumular(base)">+{{base}}</button>
        <span>{{ numero }}</span>
        <button (click)="acumular(-base)">-{{base}}</button>
        `
})
export class ContadoraComponent {        /*En la parte vacia de export colocamos  el codigo que cortamos del*/
    titulo: string ='Contadora App';     /*documento app.component.ts*/
    numero: number = 10;
    base: number = 5;
   acumular ( valor:number) {
        this.numero += valor;
        
    }
}