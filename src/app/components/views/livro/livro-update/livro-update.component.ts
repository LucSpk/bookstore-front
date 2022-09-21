import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';


@Component({
  selector: 'app-livro-update',
  templateUrl: './livro-update.component.html',
  styleUrls: ['./livro-update.component.css']
})
export class LivroUpdateComponent implements OnInit {
  
  id_cat: String = '';
  livro: Livro = {
    id: '',
    titulo: '',
    nome_autor: '',
    texto: ' '
  }

  titulo = new FormControl("", [Validators.minLength(3)]);
  nome_autor = new FormControl("", [Validators.minLength(3)]);
  texto = new FormControl("", [Validators.minLength(10)]);

  constructor(
    private service: LivroService,
    private router: Router,
    private route: ActivatedRoute
  ) { }    

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!
    this.livro.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  cancel(): void {
    this.router.navigate(['categorias/1/livros']);
  }

  findById(): void {
    this.service.findById(this.livro.id!).subscribe((resonse) => {
      this.livro = resonse 
    }) 
  }

  update(): void {
    this.service.update(this.livro).subscribe((response) => {
      this.router.navigate([`categorias/${this.id_cat}/livros`])
      this.service.mensagem('Livro atualizado com sucesso!')
    }, err => {
      this.router.navigate([`categorias/${this.id_cat}/livros`])
      this.service.mensagem('Falha ao atualizar livro! Tente mais tarde..')
    });
  }

  getMessageTitulo() {
    if(this.titulo.invalid) 
      return "O Campo TITULO deve conter entre 3 e 100 caracteres";
    
    return false;
  }
  getMessageAutor() {
    if(this.nome_autor.invalid) 
      return "O Campo NOME DO AUTOR deve conter entre 3 e 100 caracteres";
    
    return false;
  }
  getMessageTexto() {
    if(this.texto.invalid) 
      return "O Campo TEXTO deve conter entre 10 e 2000000 caracteres";
    
    return false;
  }
  habilitaButton() {
    if(!this.getMessageTitulo() && !this.getMessageAutor() && !this.getMessageTexto())
      return false;

    return true;
  }
}
