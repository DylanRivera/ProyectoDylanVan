import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bolsa-trabajo-app';
  selectedComponent: string = ''; // Variable para almacenar el componente seleccionado

  onRegistroCandidatoClick() {
    this.selectedComponent = 'candidato'; // Indica que se ha seleccionado el componente 'candidato'
  }

  onAplicacionClick() {
    this.selectedComponent = 'aplicacion'; // Indica que se ha seleccionado el componente 'aplicacion'
  }
}

