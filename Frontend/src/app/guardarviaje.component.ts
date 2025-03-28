import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';


@Component({
  selector: 'app-guardarviaje',
  templateUrl: './guardarviaje.component.html',
  styleUrls: ['./guardarviaje.component.css']
})
export class guardarviajeComponent {

  viaje:any = {};
  viajes:any = {};
  estados:any = [];
  lugares:any = [];

  constructor(private http:HttpClient){
    this.buscarViajes();
    this.buscarEstados();
    this.buscarLugares();
  }

  buscarViajes(){
    this.serviciobuscarViajes().subscribe(
        (v:any)=> this.viajes = v
    )
  }

  serviciobuscarViajes():Observable<any>{
    return this.http.get<any>("http://localhost:8080/viaje/buscar");
  }

  buscarEstados(){
    this.serviciobuscarEstados().subscribe(
        (u:any)=> this.estados = u
    )
  }

  serviciobuscarEstados():Observable<any>{
    return this.http.get<any>("http://localhost:8080/estado/buscar");
  }

  buscarLugares(){
    this.serviciobuscarLugares().subscribe(
        (l:any)=> this.lugares = l
    )
  }

  serviciobuscarLugares():Observable<any>{
    return this.http.get<any>("http://localhost:8080/lugar/buscar");
  }

  eliminar(u:any){
    this.eliminarViaje(u).subscribe(
        (u:any)=> this.actualizar(u)
    )
  }

  eliminarViaje(v:any):Observable<any>{
    return this.http.delete<any>("http://localhost:8080/viaje/eliminar/"+v.idviaje).pipe(
        catchError(e=>"error")
    );
  }

  crearViaje(){
    let validarFormulario:any = document.getElementById("viajeForm");
    if(validarFormulario.reportValidity()){
      this.servicioGuardar().subscribe(
        (u:any) => this.actualizar(u)
      )
    }
  }

  modificar(v:any){
    this.viaje = v;
  }

  actualizar(u:any){
    this.buscarViajes();
    this.buscarLugares();
    this.viaje = {};
  }


  servicioGuardar(){
    let httpOptions = {
      headers : new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.http.post<any>
    ("http://localhost:8080/viaje/guardar",this.viaje,httpOptions);
  }

  limpiarFormulario(){
    this.viaje = {};
  }

}