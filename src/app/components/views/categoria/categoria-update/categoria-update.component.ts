import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-update',
  templateUrl: './categoria-update.component.html',
  styleUrls: ['./categoria-update.component.css']
})
export class CategoriaUpdateComponent implements OnInit {

  constructor(
    private service: CategoriaService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['categorias']);
  }

}
