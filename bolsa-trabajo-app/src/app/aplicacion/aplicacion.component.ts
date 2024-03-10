import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-aplicacion',
  templateUrl: './aplicacion.component.html',
  styleUrls: ['./aplicacion.component.css']
})
export class AplicacionComponent implements OnInit {
  aplicaciones: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAplicaciones();
  }

  getAplicaciones() {
    this.http.get('/api/aplicaciones').subscribe(data => {
      this.aplicaciones = data;
    });
  }

  createAplicacion(candidatoId: string, ofertaTrabajoId: string, estado: string) {
    const nuevaAplicacion = { candidatoId, ofertaTrabajoId, estado };
    this.http.post('/api/aplicaciones', nuevaAplicacion).subscribe(data => {
      // Actualiza la lista de aplicaciones después de crear una nueva
      this.getAplicaciones();
    });
  }
}
