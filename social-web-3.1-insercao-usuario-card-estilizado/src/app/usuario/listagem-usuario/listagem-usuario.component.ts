import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrls: ['./listagem-usuario.component.scss']
})
export class ListagemUsuarioComponent implements OnInit {

  usuarios = [
    { nome: 'usuario1', cpf: '123', idade: 30 },
    { nome: 'usuario2', cpf: '124', idade: 40 },
    { nome: 'usuario3', cpf: '125', idade: 32 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
