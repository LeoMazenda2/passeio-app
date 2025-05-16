import { Categoria } from './../../categorias/categoria';
import { Component, OnInit } from '@angular/core';
import { Lugar } from '../../lugares/lugar';
import { LugarService } from '../../lugares/lugar.service';
import { CategoriaService } from '../../categorias/categoria.service';

@Component({
  selector: 'app-galeria',
  standalone: false,
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss',
})
export class GaleriaComponent implements OnInit {
  lugares: Lugar[] = [];
  categoriaFiltro: Categoria[] = [];

  constructor(
    private lugarService: LugarService,
    private categoriaService: CategoriaService
  ) {}

  ngOnInit(): void {
    this.categoriaService.obterTodas()
      .subscribe(c => (this.categoriaFiltro = c));

      this.lugarService.onterTodos()
      .subscribe(l => (this.lugares = l));
  }

  getTotalEstrelas(lugar: Lugar) : string{
    return '&#9733;'.repeat(lugar.avaliacao || 0) + '&#9734;'.repeat(5 - (lugar.avaliacao || 0))

  }
}
