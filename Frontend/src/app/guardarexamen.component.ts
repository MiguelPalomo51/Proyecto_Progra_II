import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-guardarexamen',
  templateUrl: './guardarexamen.component.html',
  styleUrls: ['./guardarexamen.component.css']
})
export class guardarexamenComponent {

  examen:any = {};

  constructor(private http:HttpClient){

  }

  guardarExamen(){
    let validarFormulario:any = document.getElementById("examenForm");
    if(validarFormulario.reportValidity()){
      this.servicioExamen().subscribe(
      )
    }
  }


  servicioExamen(){
    let httpOptions = {
      headers : new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.http.post<any>
    ("http://localhost:8080/examen/guardar",this.examen,httpOptions);
  }

}