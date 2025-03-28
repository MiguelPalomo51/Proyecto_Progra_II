import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-menuprincipal',
  templateUrl: './menuprincipal.component.html',
  styleUrls: ['./menuprincipal.component.css']
})
export class MenuComponent {

  constructor(private http:HttpClient){

  }

  darBienvenida(anuncio:any){
    if(anuncio){
      location.href="/consultaranuncio"
    }
    else{
      alert("Ha ocurido un error")
    }
  }

  servicioMenu(){
    let httpOptions = {
      headers : new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.http.post<any>
    ("http://localhost:8080/Menu",httpOptions);
  }
  
  buscarAnuncio(){
    location.href="/consultaranuncio"
}
  buscarUsuario(){
  location.href="/consultarusuario"
}
  guardarAnuncio(){
  location.href="/guardaranuncio"
}
  eliminarAnuncio(){
  location.href="/eliminaranuncio"
}
  buscarExamen(){
  location.href="/examen"
}
  guardarExamen(){
  location.href="/guardarexamen"
}
buscarLugar(){
  location.href="/buscarlugar"
}
guardarLugar(){
  location.href="/guardarlugar"
}
eliminarLugar(){
  location.href="/eliminarlugar"
}
guardarViaje(){
  location.href="/guardarviaje"
}
  buscarReserva(){
  location.href="/consultarreserva"
}
  guardarTipo(){
  location.href="/guardartipoanuncio"
}
  buscarTipo(){
  location.href="/consultartipo"
}
}