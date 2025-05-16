import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Lugar } from './lugar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LugarService {
  constructor(private http: HttpClient) {}

  salvar(lugar: Lugar): Observable<Lugar> {
    return this.http.post<Lugar>('http://localhost:3000/lugares', lugar);
  }

  onterTodos(): Observable<Lugar[]> {
    return this.http.get<Lugar[]>('http://localhost:3000/lugares');
  }

  filtarComLike(nome: string, categoria: string){
    let parametros = new HttpParams();

    if(nome){
      parametros = parametros.set('nome_like', nome);
    }

    if(categoria){
      parametros = parametros.set('categoria', categoria);
    }

     return this.http.get<Lugar[]>('http://localhost:3000/lugares', {
      params: parametros
     });
  }
}
