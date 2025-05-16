import { Component, OnInit } from '@angular/core';
import { Layoutprops } from './layoutprops';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit {
  props: Layoutprops = { titulo: '', subTitulo: '' };

  constructor(private router: Router, private ativatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(() => this.ativatedRoute.firstChild !== null),
      map (() => this.obterPropriedadeLayout())
    ).subscribe((props: Layoutprops) => this.props = props);
  }

  obterPropriedadeLayout(): Layoutprops {
    let rotafilha = this.ativatedRoute.firstChild;

    while (rotafilha?.firstChild) {
      rotafilha = rotafilha.firstChild;
    }

    return rotafilha?.snapshot.data as Layoutprops;
  }
}
