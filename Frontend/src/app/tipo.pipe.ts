import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipo'
})
export class TipoPipe implements PipeTransform {

  transform(value: number, tipoanuncio:any[]): unknown {
    let e : any;
    for(e of tipoanuncio){
      if(e.idtipoAnuncio == value){
        return e.descripcion;
      }
    }
    return "No hay información";
  }

}
