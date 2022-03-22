import { Component, OnInit } from '@angular/core';
import { AnalisisSentimientosComponent } from '../analisis-sentimientos/analisis-sentimientos.component';
import { FlaskApiService } from '../../services/flask-api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prueba-ngfor-y-ngif',
  templateUrl: './prueba-ngfor-y-ngif.component.html',
  styleUrls: ['./prueba-ngfor-y-ngif.component.scss']
})
export class PruebaNgforYNgifComponent implements OnInit {

  textareaContent: string = '';
  json: any = false;
  imagen: any;
  result: any;

  texto = '';

  constructor(private http: HttpClient, private flask_api: FlaskApiService) { }

  ngOnInit(): void {
  }

  animales:any[] = [
  ]

  analizarTexto(){



    this.flask_api.analizarSentimiento(this.texto).subscribe((res) =>
    {
      console.log('Res ', res);
      console.log('Res',res.analisis.carita);
      this.texto='Sentimiento: '+res.analisis.carita+'\nResultado: '+res.analisis.sentimiento+'\nTexto: '+res.analisis.texto;

      this.flask_api.logSentimientos().subscribe((res) =>
    {
      console.log('Res ', res);
      this.animales = res;

    });

    });
  }

}
