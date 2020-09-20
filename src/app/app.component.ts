import { Component } from '@angular/core';

interface Mode {
  id: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-curse';
  typeChartSelected: string;

  public name: string;
  public modes: Mode[] = [
    {name: 'barras', id: 'bar'},
    {name: 'puntos', id: 'scatter'}
  ];

}
