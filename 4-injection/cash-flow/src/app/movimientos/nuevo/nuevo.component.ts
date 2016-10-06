import { MaestroModel, MovimientoModel, MaestroTipoModel } from './../datos.model';
import { DatosService } from './../datos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  tipos: MaestroModel[] = [];
  categorias: MaestroTipoModel[] = [];
  movimiento: MovimientoModel;

  // las dependencias se declaran como parámetros del constructor  
  constructor(private datosService: DatosService) { }

  ngOnInit() {
    this.tipos = this.datosService.getTipos();
    this.movimiento = this.datosService.getNuevoMovimiento();
    this.cambioTipo();
  }

  cambioTipo() {
     this.categorias = this.datosService.getCategoriasPorTipo(this.movimiento.tipo);
  }

  guardarMovimiento() {
    this.datosService.postMovimiento(this.movimiento);
  }
}
