import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlaskApiService } from '../../services/flask-api.service';

@Component({
  selector: 'app-analisis-sentimientos',
  templateUrl: './analisis-sentimientos.component.html',
  styleUrls: ['./analisis-sentimientos.component.scss'],
  providers: [FlaskApiService]
})


export class AnalisisSentimientosComponent implements OnInit {
  textareaContent: string = '';
  json: any = false;
  imagen: any;
  result: any;

  texto = '';

  constructor(private http: HttpClient, private flask_api: FlaskApiService) { }

  ngOnInit(): void {
    this.flask_api.getAll().subscribe((res) =>
    {
      console.log('Res ', res)
    });

  }

  analizarTexto(texto: string){



    this.flask_api.analizarSentimiento(texto).subscribe((res) =>
    {
      console.log('Res ', res)
    });
  }

  makeRequest() {
    this.http.post('http://127.0.0.1:5000/analisis', { 
      cuerpo: this.textareaContent
    }).toPromise().then(response => {
      console.log(response);
      this.json = response;
      if(this.json.compound >= 0.5){
        this.imagen = '.png';
        this.result = "Texto Positivo"
      }
      else if(this.json.compound > -0.5 && this.json.compound < 0.5){
        this.imagen = '.png';
        this.result = "Texto Neutro"
      }
      else if(this.json.compound <= -0.5){
        this.imagen = '.png';
        this.result = "Texto Negativo"
      }
      }
      
    )
    
  }


  



}