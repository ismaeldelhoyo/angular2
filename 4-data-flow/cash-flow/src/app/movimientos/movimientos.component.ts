import { Component, OnInit } from '@angular/core';
//import { Movimiento, Maestro } from './datos.model';
import { MaestroModel, MaestroTipoModel, Movimiento } from './datos.model';
import { DatosService } from './datos.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-movimientos', // ojo al prefijo, por defecto app
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent implements OnInit {
  tipos: MaestroModel[] = [];
  categorias: MaestroTipoModel[] = [];
  movimiento: Movimiento;
  movimientos: Movimiento[];
  movimientos$ : Observable<Movimiento[]>;

  // las dependencias se declaran como parámetros del constructor
  constructor(private datosService: DatosService) { }

  ngOnInit() {
    this.tipos = this.datosService.getTipos();
    this.movimiento = this.datosService.getNuevoMovimiento();
    this.cambioTipo();
    this.movimientos$ = this.datosService.getMovimientos$();
    this.movimientos$.subscribe(d=>this.movimientos=d);
  }

  cambioTipo() {
    this.categorias = this.datosService.getCategoriasPorTipo(this.movimiento.tipo);
    // Cambios en el tipo, crean cambios en la categoría
    this.movimiento.categoria = this.datosService.getCategoriaBase(this.movimiento.tipo);
  }

  guardarMovimiento() {
    console.log(`Guardando ${JSON.stringify(this.movimiento)}`);
    this.datosService.postMovimiento(this.movimiento);
  }
}
