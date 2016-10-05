import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  movimiento = {
    fecha: new Date(Date.now()),
    importe: 0,
    tipo: this.tipos[0]
  }
  tipos: string[] = ["Ingreso", "Gasto"];
  categorias: string[] = ["Nómina", "Venta", "Intereses"];
  
  constructor() { }
  
  ngOnInit() {
  }

  guardarMovimiento = function () {
    console.log(this.movimiento);
  }
}
