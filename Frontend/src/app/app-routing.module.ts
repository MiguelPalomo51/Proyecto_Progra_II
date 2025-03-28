import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { MiPerfilComponent } from './miperfil.component';
import { ConsuresevaComponent } from './consureservas.component';
import { guardartipoanuncioComponent } from './guardartipoanuncio.component';
import { ConsutipoanuncioComponent } from './consutipoanuncio.component';

const routes: Routes = [
  { path:'',component:LoginComponent},
  { path:'consultarusuario',component:BienvenidaComponent},
  { path:'menuprincipal',component:MenuComponent},
  { path:'consultaranuncio',component:ConsuanuncioComponent},
  { path:'guardaranuncio',component:guardaranuncioComponent},
  { path:'eliminaranuncio',component:eliminaranuncioComponent},
  { path:'examen',component:ExamenComponent},
  { path:'guardarexamen',component:guardarexamenComponent},
  { path:'buscarlugar',component:ConsulugarComponent},
  { path:'guardarlugar',component:guardarlugarComponent},
  { path:'eliminarlugar',component:eliminarlugarComponent},
  { path:'guardarviaje',component:guardarviajeComponent},
  { path:'miperfil',component:MiPerfilComponent},
  { path:'consultarreserva',component:ConsuresevaComponent},
  { path:'guardartipoanuncio',component:guardartipoanuncioComponent},
  { path:'consultartipo',component:ConsutipoanuncioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
