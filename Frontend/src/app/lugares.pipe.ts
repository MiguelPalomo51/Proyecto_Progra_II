import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lugares'
})
export class LugaresPipe implements PipeTransform {

  transform(value: number, lugares:any[]): unknown {

    let l : any;
    for(l of lugares){
      if(l.idestado == value){
        return l.valor;
      }
    }

    return "No hay información";
  }

}
