import { Component, OnInit } from '@angular/core';
import { FalskApiService } from '../../services/falsk-api.service';

@Component({
  selector: 'app-analisis-sentimientos',
  templateUrl: './analisis-sentimientos.component.html',
  styleUrls: ['./analisis-sentimientos.component.scss'],
  providers: [FalskApiService]
})
export class AnalisisSentimientosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
