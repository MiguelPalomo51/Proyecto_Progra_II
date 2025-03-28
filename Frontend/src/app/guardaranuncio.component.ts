import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-guardaranuncio',
  templateUrl: './guardaranuncio.component.html',
  styleUrls: ['./guardaranuncio.component.css']
})
export class guardaranuncioComponent {

  anuncio:any = {};
  tipoanuncio:any = {};

  constructor(private http:HttpClient){
    this.buscarTipo();
  }

  guardarAnuncio(){
    let validarFormulario:any = document.getElementById("anuncioForm");
    if(validarFormulario.reportValidity()){
      this.servicioLogin().subscribe(
      )
      alert("Anuncio creado correctamente")
    }
  }


  servicioLogin(){
    let httpOptions = {
      headers : new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.http.post<any>
    ("http://localhost:8080/anuncio/guardaranuncio",this.anuncio,httpOptions);
  }

  handleUpload(event:any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        this.anuncio.imagen = reader.result;
        
    };
    
    }
    buscarTipo(){
      this.serviciobuscarTipo().subscribe(
          (u:any)=> this.tipoanuncio = u
      )
    }
  
    serviciobuscarTipo():Observable<any>{
      return this.http.get<any>("http://localhost:8080/tipoanuncio/buscar");
    }
}