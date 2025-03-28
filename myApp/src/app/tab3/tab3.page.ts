import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  usuario:any = {};
  constructor() {
    let t = localStorage.getItem("usuario");
    if(t){
      this.usuario = JSON.parse(t);
    }

  }

  logout(){
    localStorage.clear();
    location.reload();
  }
}
