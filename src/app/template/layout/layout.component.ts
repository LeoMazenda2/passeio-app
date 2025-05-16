import { Component, OnInit } from '@angular/core';
import { Layoutprops } from './Layoutprops';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs'
import { AuthgoogleService } from '../../authgoogle.service';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {
  props: Layoutprops = { titulo: '', subTitulo: '' };

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loginService: AuthgoogleService
  ){}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter( () => this.activatedRoute.firstChild !== null ),
        map( () => this.obterPropriedadeLayout() )
      ).subscribe((props: Layoutprops) => this.props = props )
  }

  obterPropriedadeLayout() : Layoutprops {
    let rotaFilha = this.activatedRoute.firstChild;

    while(rotaFilha?.firstChild){
      rotaFilha = rotaFilha.firstChild;
    }

    return rotaFilha?.snapshot.data as Layoutprops;
  }

  logout(){
    this.loginService.logout();
  }
}
