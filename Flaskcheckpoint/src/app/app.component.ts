import { Component, OnInit } from '@angular/core';
import { FlaskAPIService } from './service/flask-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  
  title = 'Flaskcheckpoint';

  servicio: any = {};
  
  constructor(private service: FlaskAPIService){

  }

  ngOnInit(): void {
    this.service.getAllRequest().subscribe(servicio => {
      this.servicio = servicio;
    })
  }
}
