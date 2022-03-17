import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];

  // sin los puntos funciona
  // pero si hago alguna modificación, se modoficará el arreglo original
  // porque se hace paso por referencia
  // los puntos evitan eso, rompiendo la referencia 

  get historial() {
    return [...this._historial];
  }

  buscarGifs( query: string ){
    this._historial.unshift( query );
    console.log(this._historial);
  }
}
