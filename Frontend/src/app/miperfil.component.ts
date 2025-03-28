import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.component.html',
  styleUrls: ['./miperfil.component.css']
})
export class MiPerfilComponent {

  administrador:any = {};
  administradorp:any = {};

  constructor(private http:HttpClient){
    let t = localStorage.getItem("administrador");
    if(t){
      this.administrador = JSON.parse(t);
    }
  }

  buscarAdministrador(){
    this.serviciobuscarAdministrador().subscribe(
        (u:any)=> this.administrador = u
    )
  }
  serviciobuscarAdministrador():Observable<any>{
    return this.http.get<any>("http://localhost:8080/administrador/buscar");
  }

  cambiarPassword(){
    let validarFormulario:any = document.getElementById("passwordForm");
    if(validarFormulario.reportValidity()){
      this.servicioGuardar().subscribe((u:any) => this.actualizar = u)
        console.log(this.administrador);
        this.limpiarFormulario();
    }
  }

  servicioGuardar(){
    let httpOptions = {
      headers : new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    this.administrador.password = this.administradorp.password;
    return this.http.post("http://localhost:8080/administrador/guardar",this.administrador,httpOptions);
  }

  actualizar(u:any){
    this.administradorp = {};
  }

  limpiarFormulario(){
    alert("Contraseña canbiada con exito")
    this.administradorp = {};
  }


}