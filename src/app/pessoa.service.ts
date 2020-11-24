import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class PessoaService {

	private baseUrl = 'http://localhost:8080/crud/api/pessoas';

	constructor(private http: HttpClient) { }

	obterPessoa(id: number): Observable<any> {
		return this.http.get(`${this.baseUrl}/${id}`);
	}

	criarPessoa(pessoa: Object): Observable<Object> {
		return this.http.post(`${this.baseUrl}`, pessoa);
	}

	atualizarPessoa(id: number, value: any): Observable<Object> {
		return this.http.put(`${this.baseUrl}/${id}`, value);
	}

	excluirPessoa(id: number): Observable<any> {
		return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
	}

	obterPessoasLista(): Observable<any> {
		return this.http.get(`${this.baseUrl}`);
	}
}
