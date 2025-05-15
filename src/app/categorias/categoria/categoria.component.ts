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
    this.camposForm.markAllAsTouched();

    if(this.camposForm.valid) {
      console.table(this.camposForm.value);      
    }   
  }

  isCampoInvalido(nomeCampo: string) : boolean{
    const campo = this.camposForm.get(nomeCampo);
    return (campo?.invalid && campo?.touched) || false;
  }
}
