import { Injectable } from '@angular/core';

// decoración para marcarlo como inyectable
@Injectable()
export class DatosService {

  private tipos: any[] = [
    { id: 1, text: "Ingreso" },
    { id: 2, text: "Gasto" }];
  private categoriasTipos: any[] = [
    { id: 1, text: "Nómina", type: 1 },
    { id: 2, text: "Ventas", type: 1 },
    { id: 3, text: "Intereses", type: 1 },
    { id: 4, text: "Hipoteca", type: 2 },
    { id: 5, text: "Compras", type: 2 },
    { id: 6, text: "Domicialiaciones", type: 2 },
    { id: 7, text: "Impuestos", type: 2 }];  
  
  constructor() { }

  getNuevoMovimiento() {
    return {
      fecha: new Date(Date.now()),
      importe: 0,
      tipo: this.tipos[0].id
    }
  }

  getTipos() {
    return this.tipos;
  } 
  
  getCategoriasPorTipo(tipo) {
    return this.categoriasTipos.filter(c => c.type === tipo);
  }
}
