import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Component({
  selector: 'app-consureservas',
  templateUrl: './consureservas.component.html',
  styleUrls: ['./consureservas.component.css']
})
export class ConsuresevaComponent {

  reserva:any = [];
  estados:any = [];
  constructor(private http:HttpClient){
    this.buscarReserva();
    this.buscarEstados();
  }

  buscarReserva(){
    this.serviciobuscarReserva().subscribe(
      (rs:any) => this.reserva = rs
    )
  }

  serviciobuscarReserva():Observable<any>{
    return this.http.get("http://localhost:8080/reservacion/buscar");
  }

  buscarEstados(){
    this.serviciobuscarEstados().subscribe(
        (u:any)=> this.estados = u
    )
  }

  serviciobuscarEstados():Observable<any>{
    return this.http.get<any>("http://localhost:8080/estado/buscar");
  }

}