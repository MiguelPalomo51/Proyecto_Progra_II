import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Component({
  selector: 'app-consulugar',
  templateUrl: './consulugar.component.html',
  styleUrls: ['./consulugar.component.css']
})
export class ConsulugarComponent {

  lugar:any = [];
  constructor(private http:HttpClient){
    this.buscarLugar();
  }

  buscarLugar(){
    this.servicioBuscarLugar().subscribe(
      (us:any) => this.lugar = us
    )
  }

  servicioBuscarLugar():Observable<any>{
    return this.http.get("http://localhost:8080/lugar/buscar");
  }

}