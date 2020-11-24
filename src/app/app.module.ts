import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CriarPessoaComponent } from './criar-pessoa/criar-pessoa.component';
import { PessoaDetalhesComponent } from './pessoa-detalhes/pessoa-detalhes.component';
import { PessoaListaComponent } from './pessoa-lista/pessoa-lista.component';
import { AtualizarPessoaComponent } from './atualizar-pessoa/atualizar-pessoa.component';

@NgModule({
  declarations: [
    AppComponent,
    CriarPessoaComponent,
    PessoaDetalhesComponent,
    PessoaListaComponent,
    AtualizarPessoaComponent
  ],
   imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
