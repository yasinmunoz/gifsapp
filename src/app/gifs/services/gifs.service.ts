import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _apiKey: string = 'wp042ndAtFZi2c2iORLRVWcL5COJWdWi'

  private _historial: string[] = [];

  // TODO: Cambiar any por su tipo correspondiente
  public resultados: any[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor (private _http: HttpClient) {}

  buscarGifs(query: string) {

    // convertimos todas las búsquedas en minúsculo
    query = query.trim().toLocaleLowerCase();

    // si no existe esa búsqueda en el array de búsqueda, lo inserto
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
    }

    this._http.get(`https://api.giphy.com/v1/gifs/search?api_key=wp042ndAtFZi2c2iORLRVWcL5COJWdWi&q=${ query }&limit=10`)
      .subscribe( ( res: any ) => {
        console.log( res.data );
        this.resultados = res.data;
      } );


  }
}
