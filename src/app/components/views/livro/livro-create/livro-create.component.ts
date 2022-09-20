import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LivroService } from '../livro-read-all/livro.service';

@Component({
  selector: 'app-livro-create',
  templateUrl: './livro-create.component.html',
  styleUrls: ['./livro-create.component.css']
})
export class LivroCreateComponent implements OnInit {

  constructor(
    private service: LivroService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  create(): void {
    
  }

  cancel(): void {
    this.router.navigate(['categorias/1/livros']);
  }

}
