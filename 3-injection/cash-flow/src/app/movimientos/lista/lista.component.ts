import { MovimientoModel } from './../datos.model';
import { Observable } from 'rxjs/Observable';
import { DatosService } from './../datos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  // los observables se sufijan con $ 
  movimientos$ : Observable<MovimientoModel[]>;  

  constructor(private datosService: DatosService) { }

  ngOnInit() {
    // No se necesita suscripción si se usa async
    this.movimientos$ = this.datosService.getMovimientos$();
    // si se quiere se puede suscribir
    this.movimientos$.subscribe(d=>console.log("Dato recibido: ", d));
  }

}
