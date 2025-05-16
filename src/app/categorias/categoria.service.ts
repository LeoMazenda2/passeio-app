import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from './categoria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private httt: HttpClient) { }

  salvar(categoria: Categoria) : Observable<Categoria>{
    return this.httt.post<Categoria>('http://localhost:3000/categorias', categoria);
  }

  obterTodas() : Observable<Categoria[]>{
    return this.httt.get<Categoria[]>('http://localhost:3000/categorias')
  }
}
