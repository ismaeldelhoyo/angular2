import { MaestroModel, Movimiento, MaestroTipoModel } from './../datos.model';
import { Component, OnInit,  Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  // recibe todso vía propiedades
  @Input() tipos: MaestroModel[] = [];
  @Input() categorias: MaestroTipoModel[] = [];
  @Input() movimiento: Movimiento;
  // emite un evento de cambio y de guardado
  @Output() guardar: EventEmitter<Movimiento> = new EventEmitter<Movimiento>();
  @Output() cambiarTipo: EventEmitter<number> = new EventEmitter<number>();

  // ya no se usa datos service
  constructor() { }

  ngOnInit() {  }
  
  // emisión de eventos para cambios o pedir guardar el movimiento
  
  cambioTipo() {
    this.cambiarTipo.emit(this.movimiento.tipo);
  }

  guardarMovimiento() {
    this.guardar.emit(this.movimiento);
  }
}
