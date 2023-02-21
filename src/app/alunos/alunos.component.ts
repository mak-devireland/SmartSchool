import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit{

  public titulo = "Alunos";

  public alunos =
  [
    {id: 1, nome:"Joao", sobrenome: "Pedro", telefone : 332255},
    {id: 2, nome:"Graca", sobrenome: "Maria", telefone : 332255},
    {id: 3, nome:"Paula", sobrenome: "Cristina", telefone : 332255},
    {id: 4, nome:"Camilla", sobrenome: "Linda", telefone : 332255},
    {id: 5, nome:"Jeremy", sobrenome: "Lindao", telefone : 332255},
    {id: 6, nome:"Laura", sobrenome: "Cerel", telefone : 332255}
  ]

  constructor() { }

  ngOnInit() {
  }
}
