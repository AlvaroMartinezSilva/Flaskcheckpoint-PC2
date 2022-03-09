import { Component } from '@angular/core';
import { FalskApiService } from './services/falsk-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FalskApiService]
})
export class AppComponent {
  title = 'Flaskcheckpoint';

  constructor(private dataSvc: FalskApiService) {}
  ngOnInit() {
    this.dataSvc.getAll().subscribe((res) => {console.log('Res ', res)});
  }

}
