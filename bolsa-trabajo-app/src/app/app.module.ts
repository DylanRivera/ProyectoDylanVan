import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AplicacionComponent } from './aplicacion/aplicacion.component';
import { CandidatoComponent } from './candidato/candidato.component'; // Importa el componente AplicacionComponent

@NgModule({
  declarations: [
    AppComponent,
    AplicacionComponent,
    CandidatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule // Agrega ReactiveFormsModule a los imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
