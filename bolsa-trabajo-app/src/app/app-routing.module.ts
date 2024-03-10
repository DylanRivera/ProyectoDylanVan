import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AplicacionComponent } from './aplicacion/aplicacion.component';
import { CandidatoComponent } from './candidato/candidato.component';

const routes: Routes = [
  { path: 'aplicacion', component: AplicacionComponent }, // Ruta para AplicacionComponent
  { path: 'candidato', component: CandidatoComponent } // Ruta para CandidatoComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
