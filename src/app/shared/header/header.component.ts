import { Component } from '@angular/core';
import { Tile } from 'src/app/core/models/tile.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  tiles: Tile[] = [
    {text: 'One', cols: 2, rows: 2, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 2, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
    {text: 'Five', cols: 1, rows: 2, color: '#FF4040'},
    {text: 'Six', cols: 1, rows: 1, color: '#FFBF40'},
    {text: 'Seven', cols: 1, rows: 1, color: '#392E85'},
  ];
}
