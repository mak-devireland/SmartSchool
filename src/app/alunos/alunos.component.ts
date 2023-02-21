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
    {nome:"Joao"},
    {nome:"Graca"},
    {nome:"Paula"},
    {nome:"Camilla"},
    {nome:"Jeremy"},
    {nome:"Laura"}
  ]

  constructor() { }

  ngOnInit() {
  }
}
