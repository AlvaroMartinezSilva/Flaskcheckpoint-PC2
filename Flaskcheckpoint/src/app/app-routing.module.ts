import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalisisSentimientosComponent } from './components/analisis-sentimientos/analisis-sentimientos.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
{
path:'analisis-sentimientos', component: AnalisisSentimientosComponent

},{
  path:'footer', component: FooterComponent

}
,{
  path:'navbar', component: NavbarComponent

},{
  path:'welcome', component: WelcomeComponent

}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
