// import { MaestroModel, MovimientoModel, MaestroTipoModel } from './../datos.model';
import { DatosService } from './../datos.service';

import { Component, OnInit, OnChanges , Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit, OnChanges {
  tipos: any[] = [];
  categorias: any[] = [];
  // recibe el movimiento para editar
  @Input() movimiento: any;
  // emite un evento de guardado
  @Output() guardar: EventEmitter<any> = new EventEmitter<any>();

  // las dependencias se declaran como parámetros del constructor  
  constructor(private datosService: DatosService) { }

  ngOnInit() {
    this.tipos = this.datosService.getTipos();
  }
  // en cada cambio de alguna propiedad
  ngOnChanges(changes) {
    this.cambioTipo();
  }
  
  cambioTipo() {
    this.categorias = this.datosService.getCategoriasPorTipo(this.movimiento.tipo);
    // Cambios en el tipo, crean cambios en la categoría
    this.movimiento.categoria = this.datosService.getCategoriaBase(this.movimiento.tipo);
  }

  guardarMovimiento() {
    this.guardar.emit(this.movimiento);
  }
}
