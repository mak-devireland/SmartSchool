import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  titulo = "Professores";

  public professores = [
    {id: 1, nome:"Ton", disciplina: "Matematica"},
    {id: 2, nome:"Jerry", disciplina: "Ingles"},
    {id: 3, nome:"Spike", disciplina: "Programacao"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
