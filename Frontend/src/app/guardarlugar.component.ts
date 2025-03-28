import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-guardarlugar',
  templateUrl: './guardarlugar.component.html',
  styleUrls: ['./guardarlugar.component.css']
})
export class guardarlugarComponent {

  selectedImage: string | ArrayBuffer | null = null;
  lugar:any = {};
  imagen:any = {};

  constructor(private http:HttpClient){

  }

  guardarLugar(){
    let validarFormulario:any = document.getElementById("lugarForm");
    if(validarFormulario.reportValidity()){
      this.servicioguardarlugar().subscribe(
      )
    }
  }


  servicioguardarlugar(){
    let httpOptions = {
      headers : new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.http.post<any>
    ("http://localhost:8080/lugar/guardar",this.lugar,httpOptions);
  }

  limpiarFormulario(){
    this.lugar = {};
  }

  handleUpload(event:any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        this.lugar.imagen = reader.result;
        
    };
    
    }

}