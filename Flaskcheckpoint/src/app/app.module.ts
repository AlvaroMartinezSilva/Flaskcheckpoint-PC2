import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AnalisisSentimientosComponent } from './components/analisis-sentimientos/analisis-sentimientos.component';

import { HttpClientModule } from '@angular/common/http';

import { FalskApiService } from './services/falsk-api.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AnalisisSentimientosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [FalskApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
