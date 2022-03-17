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
    
    // convertimos todas las búsquedas en minúsculo
    query = query.trim().toLocaleLowerCase();

    // si no existe esa búsqueda en el array de búsqueda, lo inserto
    if ( !this._historial.includes( query ) ) {
      this._historial.unshift( query );
    }

    this._historial = this._historial.splice(0,10);

    console.log(this._historial);
  }
}
