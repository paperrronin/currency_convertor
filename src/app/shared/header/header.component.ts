import { Component, OnInit } from '@angular/core';
import { Tile } from 'src/app/core/models/tile.interface';
import { BreakpointService } from '../services/breakpoint.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit{

  constructor(private breakpoint:BreakpointService) {}

  ngOnInit() {
    this.breakpoint.breakpoint$.subscribe();
    this.renderGrid()
  }

  tiles: Tile[] = [
    {text: 'One', cols: 4, rows: 2, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 1},
    {text: 'Three', cols: 2, rows: 2, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
    {text: 'Five', cols: 2, rows: 2, color: '#FF4040'},
    {text: 'Six', cols: 1, rows: 1, color: '#FFBF40'},
    {text: 'Seven', cols: 1, rows: 1, color: '#392E85'},
  ];

 
  
  renderGrid() {
    if(this.breakpoint.getCurrentBreakpoint() == this.breakpoint.Breakpoints.XSmall){
      this.tiles[0].cols = 10
      this.tiles[1].cols = 2
      this.tiles[2].cols = 3
      this.tiles[3].cols = 2
      this.tiles[4].cols = 3
      this.tiles[5].cols = 2
      this.tiles[6].cols = 2
    } else { 
      this.tiles = [
        {text: 'One', cols: 4, rows: 2, color: 'lightblue'},
        {text: 'Two', cols: 1, rows: 1},
        {text: 'Three', cols: 2, rows: 2, color: 'lightpink'},
        {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
        {text: 'Five', cols: 2, rows: 2, color: '#FF4040'},
        {text: 'Six', cols: 1, rows: 1, color: '#FFBF40'},
        {text: 'Seven', cols: 1, rows: 1, color: '#392E85'},
      ];
    }
  }
}
