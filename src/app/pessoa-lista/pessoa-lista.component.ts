import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaDetalhesComponent } from '../pessoa-detalhes/pessoa-detalhes.component';
import { Observable } from "rxjs";
import { PessoaService } from "../pessoa.service";
import { Pessoa } from "../pessoa";



@Component({
  selector: 'app-pessoa-lista',
  templateUrl: './pessoa-lista.component.html',
  styleUrls: ['./pessoa-lista.component.css']
})
export class PessoaListaComponent implements OnInit {
	
  pessoas: Observable<Pessoa[]>;
	
  constructor(private pessoaService: PessoaService,
    private router: Router) {
	
 }

  ngOnInit(): void {
	this.atualizarDados();	
  }

  atualizarDados() {
    this.pessoas = this.pessoaService.obterPessoasLista();
  }	

  excluirPessoa(id: number) {
    this.pessoaService.excluirPessoa(id)
      .subscribe(
        data => {
          console.log(data);
          this.atualizarDados();
        },
        error => console.log(error));
  }

  pessoaDetalhes(id: number){
    this.router.navigate(['detalhes', id]);
  }

}
