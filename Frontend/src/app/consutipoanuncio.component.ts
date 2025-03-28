import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Component({
  selector: 'app-consutipoanuncio',
  templateUrl: './consutipoanuncio.component.html',
  styleUrls: ['./consutipoanuncio.component.css']
})
export class ConsutipoanuncioComponent {

  tipoanuncio:any = [];
  constructor(private http:HttpClient){
    this.buscarLugar();
  }

  buscarLugar(){
    this.servicioBuscarLugar().subscribe(
      (us:any) => this.tipoanuncio = us
    )
  }

  servicioBuscarLugar():Observable<any>{
    return this.http.get("http://localhost:8080/tipoanuncio/buscar");
  }

}