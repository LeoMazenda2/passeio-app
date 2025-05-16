import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Lugar } from './lugar';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LugarService {

  apiUrl: string = environment.apiUrl + '/lugares';

  constructor(private http: HttpClient) {}

  salvar(lugar: Lugar): Observable<Lugar> {
    return this.http.post<Lugar>(this.apiUrl, lugar);
  }

  onterTodos(): Observable<Lugar[]> {
    return this.http.get<Lugar[]>(this.apiUrl);
  }

  filtarComLike(nome: string, categoria: string){
    let parametros = new HttpParams();

    if(nome){
      parametros = parametros.set('nome_like', nome);
    }

    if(categoria && categoria !== '0'){
      parametros = parametros.set('categoria', categoria);
    }

     return this.http.get<Lugar[]>(this.apiUrl, {
      params: parametros
     });
  }
}
