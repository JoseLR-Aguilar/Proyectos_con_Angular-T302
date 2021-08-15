import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadoraComponent } from './Contador/contadora.component';   /*Importamos el componente ContadoraComponent*/
import { HeroesModule } from './Heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
    ContadoraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
