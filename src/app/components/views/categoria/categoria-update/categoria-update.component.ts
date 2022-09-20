import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-update',
  templateUrl: './categoria-update.component.html',
  styleUrls: ['./categoria-update.component.css']
})
export class CategoriaUpdateComponent implements OnInit {

  categoria: Categoria = {
    id: '',
    nome: '',
    descricao: ''
  }

  constructor(
    private service: CategoriaService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.categoria.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  update(): void {
    this.service.update(this.categoria).subscribe((reponse) => {
      this.router.navigate(['categorias'])
      this.service.mensagem('Categoria Alterado com Sucesso!')
    }, err => {
      this.service.mensagem('É preciso prencher todos os campos corretamente!')
    });
  }

  cancel(): void {
    this.router.navigate(['categorias']);
  }

  findById(): void {
    this.service.findById(this.categoria.id!).subscribe((response) => {
      this.categoria = response
    });
  }

}
