import { Component, OnInit } from '@angular/core';
import { MovimientoModel } from './datos.model';
import { DatosService } from './datos.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-movimientos', // ojo al prefijo, por defecto app
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent implements OnInit {
  movimiento: MovimientoModel;
  movimientos$ : Observable<MovimientoModel[]>;

  // las dependencias se declaran como parámetros del constructor
  constructor(private datosService: DatosService) { }

  ngOnInit() {
    this.movimiento = this.datosService.getNuevoMovimiento();
    this.movimientos$ = this.datosService.getMovimientos$();
  }

  guardarMovimiento() {
    console.log(`Guardando ${JSON.stringify(this.movimiento)}`);
    this.datosService.postMovimiento(this.movimiento);
    this.movimientos$.subscribe(d=>console.log("Dato recibido: ", d));
  }
}
