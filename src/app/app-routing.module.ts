import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Compartidos/login/login.component';
import { DasboardComponent } from './Compartidos/dasboard/dasboard.component';

const routes: Routes = [
  {path:'',redirectTo:'/inicio', pathMatch:'full'},
  {path:'inicio',component: DasboardComponent},
  {path:'iniciar-sesion',component:LoginComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
