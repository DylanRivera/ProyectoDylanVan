import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.css']
})
export class CandidatoComponent implements OnInit {
  candidatoForm!: FormGroup; // Operador ! para indicar que la propiedad será inicializada en ngOnInit

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.candidatoForm = this.fb.group({
      nombre: ['', Validators.required],
      experiencia: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      habilidades: [''] // No hay validadores aquí porque es un campo opcional
    });
  }

  onSubmit(): void {
    if (this.candidatoForm.valid) {
      // Para enviar los datos del formulario al backend para crear el candidato
      console.log(this.candidatoForm.value);
    } else {
      // Muestra un mensaje de error o toma la acción necesaria
      console.error('Formulario inválido');
    }
  }
}
