import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-guardartipoanuncio',
  templateUrl: './guardartipoanuncio.component.html',
  styleUrls: ['./guardartipoanuncio.component.css']
})
export class guardartipoanuncioComponent {

  selectedImage: string | ArrayBuffer | null = null;
  tipoanuncio:any = {};
  imagen:any = {};

  constructor(private http:HttpClient){

  }

  guardarTipoanuncio(){
    let validarFormulario:any = document.getElementById("tipoForm");
    if(validarFormulario.reportValidity()){
      this.servicioguardartipo().subscribe(
      )
    }
  }


  servicioguardartipo(){
    let httpOptions = {
      headers : new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.http.post<any>
    ("http://localhost:8080/tipoanuncio/guardar",this.tipoanuncio,httpOptions);
  }

  limpiarFormulario(){
    this.tipoanuncio = {};
  }

  handleUpload(event:any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        this.tipoanuncio.imagen = reader.result;
        
    };
    
    }

}