import{Component} from "@angular/core";
@Component({
    selector:'app-Heroe',
    templateUrl:'Heroe.component.html'
})
export class HeroeComponent{
    nombre:string='Ironman';
    edad:number=45;
    obtenerNombre():string{
        return`${this.nombre}-${this.edad}`
    }
    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }
    CambiarNombre():void{
        this.nombre='Spiderman'
    }
    CambiarEdad():void{
        this.edad=28
    }
}
