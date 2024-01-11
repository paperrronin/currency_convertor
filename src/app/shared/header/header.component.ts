import { Component, OnInit } from '@angular/core';
import { largeTile, mobileTile, Tile } from 'src/app/core/models/tile.interface';
import { BreakpointService } from '../services/breakpoint.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit{
  tiles:Tile[] = mobileTile

  constructor(private breakpoint:BreakpointService) {}

  ngOnInit() {
    this.breakpoint.breakpoint$.subscribe();
    this.renderGrid()
  }

  renderGrid() {
    if(this.breakpoint.getCurrentBreakpoint() == this.breakpoint.Breakpoints.XSmall){
      this.tiles = mobileTile
    } else { 
      this.tiles = largeTile
    }
  }
}
