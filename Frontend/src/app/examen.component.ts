import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent {

  examen:any = [];
  constructor(private http:HttpClient){
    this.buscarExamen();
  }

  buscarExamen(){
    this.servicioBuscarExamen().subscribe(
      (us:any) => this.examen = us
    )
  }

  servicioBuscarExamen():Observable<any>{
    return this.http.get("http://localhost:8080/examen/buscar");
  }

}