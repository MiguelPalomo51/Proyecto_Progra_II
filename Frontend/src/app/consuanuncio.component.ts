import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Component({
  selector: 'app-consuanuncio',
  templateUrl: './consuanuncio.component.html',
  styleUrls: ['./consuanuncio.component.css']
})
export class ConsuanuncioComponent {

  tipoanuncio:any = {};

  anuncio:any = [];
  constructor(private http:HttpClient){
    this.buscarAnuncio();
    this.buscarTipo();
  }

  buscarAnuncio(){
    this.servicioBuscarAnuncio().subscribe(
      (us:any) => this.anuncio = us
    )
  }

  servicioBuscarAnuncio():Observable<any>{
    return this.http.get("http://localhost:8080/anuncio/buscaranuncio");
  }

  buscarTipo(){
    this.serviciobuscarTipo().subscribe(
        (v:any)=> this.tipoanuncio = v
    )
  }

  serviciobuscarTipo():Observable<any>{
    return this.http.get<any>("http://localhost:8080/tipoanuncio/buscar");
  }

}