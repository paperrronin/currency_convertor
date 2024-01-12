import { Component, OnInit } from '@angular/core';
import { largeTile, mobileTile, Tile } from 'src/app/core/models/tile.interface';
import { BreakpointService } from '../services/breakpoint.service';
import { CurrencyService } from '../services/currency.service';
import { map, pipe } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit{
  tiles:Tile[] = mobileTile
  curArray:any[] = []

  constructor(private breakpoint:BreakpointService,
    public currency:CurrencyService) {}

  ngOnInit() {
    this.breakpoint.breakpoint$.subscribe();
    this.currency.getHeaderCourse()
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
