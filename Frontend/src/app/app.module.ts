import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { BienvenidaComponent } from './consusuario.component';
import { MenuComponent } from './menuprincipal.component';
import { ConsuanuncioComponent } from './consuanuncio.component';
import { guardaranuncioComponent } from './guardaranuncio.component';
import { eliminaranuncioComponent } from './eliminaranuncio.component';
import { ExamenComponent } from './examen.component';
import { guardarexamenComponent } from './guardarexamen.component';
import { ConsulugarComponent } from './consulugar.component';
import { guardarlugarComponent } from './guardarlugar.component';
import { eliminarlugarComponent } from './eliminarlugar.component';
import { guardarviajeComponent } from './guardarviaje.component';
import { LugaresPipe } from './lugares.pipe';
import { EstadosPipe } from './estados.pipe';
import { MiPerfilComponent } from './miperfil.component';
import { ConsuresevaComponent } from './consureservas.component';
import { guardartipoanuncioComponent } from './guardartipoanuncio.component';
import { ConsutipoanuncioComponent } from './consutipoanuncio.component';
import { TipoPipe } from './tipo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BienvenidaComponent,
    MenuComponent,
    ConsuanuncioComponent,
    guardaranuncioComponent,
    eliminaranuncioComponent,
    ExamenComponent,
    guardarexamenComponent,
    ConsulugarComponent,
    guardarlugarComponent,
    eliminarlugarComponent,
    guardarviajeComponent,
    LugaresPipe,
    EstadosPipe,
    MiPerfilComponent,
    ConsuresevaComponent,
    guardartipoanuncioComponent,
    ConsutipoanuncioComponent,
    TipoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  sesionIniciada:boolean = false;
  constructor(){
    let t = localStorage.getItem("administrador");
    if(t){
      this.sesionIniciada = true;
    }
    else{
      this.sesionIniciada = false;
    }
  }
}
