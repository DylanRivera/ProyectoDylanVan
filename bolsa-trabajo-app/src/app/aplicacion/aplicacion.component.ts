import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-aplicacion',
  templateUrl: './aplicacion.component.html',
  styleUrls: ['./aplicacion.component.css']
})
export class AplicacionComponent implements OnInit {
  aplicacionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.aplicacionForm = this.fb.group({
      candidatoId: ['', Validators.required],
      ofertaTrabajoId: ['', Validators.required],
      estado: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Realizar inicializaciones adicionales si es necesario
  }

  onSubmit(): void {
    if (this.aplicacionForm.valid) {
      // Aqui para enviar los datos del formulario al backend para crear la aplicación
      console.log(this.aplicacionForm.value);
    } else {
      // Muestra un mensaje de error o toma la acción necesaria
      console.error('Formulario inválido');
    }
  }
}
