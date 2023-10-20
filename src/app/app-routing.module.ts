import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RutasComponent } from './components/rutas/rutas.component';
import { GuiasComponent } from './components/guias/guias.component';

const routes: Routes = [
  { path:'', component: IndexComponent, pathMatch:"full"},
  { path: 'login', component: LoginComponent, pathMatch: "full" },
  { path: 'register', component: RegisterComponent, pathMatch: "full" },
  { path: 'rutas', component: RutasComponent, pathMatch: "full" },
  { path: 'guias', component: GuiasComponent, pathMatch: "full" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
