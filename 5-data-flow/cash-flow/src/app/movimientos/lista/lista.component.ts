import { MovimientoModel } from './../datos.model';
// import { Observable } from 'rxjs/Observable';
// import { DatosService } from './../datos.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  // Recfibe los movimientos vía propiedad desde su contenedor
  @Input('movimientos') movimientos : MovimientoModel[];  

  constructor() { }

  ngOnInit() {

  }

}
