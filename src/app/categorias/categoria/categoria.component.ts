import { Component } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
@Component({
  selector: 'app-categoria',
  standalone: false,
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent {
  camposForm: FormGroup;

  constructor (){
    this.camposForm = new FormGroup ({
        nome: new FormControl('', Validators.required),
        descricao: new FormControl('', Validators.required),
    });    
  }

  salvar(){
    console.table(this.camposForm.value);
    console.log('Está válido?', this.camposForm.valid)
  }
}
