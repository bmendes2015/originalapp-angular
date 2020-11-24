import { PessoaService } from '../pessoa.service';
import { Pessoa } from '../pessoa';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-criar-pessoa',
	templateUrl: './criar-pessoa.component.html',
	styleUrls: ['./criar-pessoa.component.css']
})
export class CriarPessoaComponent implements OnInit {

	pessoa:Pessoa = new Pessoa();
	submitted = false;

	constructor(private pessoaService: PessoaService,
		private router: Router) { }

	ngOnInit(): void {
	}

	novaPessoa(): void {
		this.submitted = false;
		this.pessoa = new Pessoa();
	}

	salvar() {
		this.pessoaService
			.criarPessoa(this.pessoa).subscribe(data => {
				console.log(data)
				this.pessoa = new Pessoa();
				this.gotoList();
			},
				error => console.log(error));
	}

	onSubmit() {
		this.submitted = true;
		this.salvar();
	}

	gotoList() {
		this.router.navigate(['/pessoas']);
	}

}
