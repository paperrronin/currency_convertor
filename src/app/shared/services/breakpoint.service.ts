import { Injectable, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { tap, distinctUntilChanged } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {
  Breakpoints = Breakpoints;
  currentBreakpoint:string = '';

  public breakpoint$ = this.breakpointObserver
    .observe([Breakpoints.Large, Breakpoints.Medium, Breakpoints.Small, Breakpoints.XSmall])
    .pipe(
      distinctUntilChanged()
    );
    
  constructor(private breakpointObserver: BreakpointObserver) { }

  public getCurrentBreakpoint() {
    if(this.breakpointObserver.isMatched(Breakpoints.Large)) {
      this.currentBreakpoint = Breakpoints.Large;
      return this.currentBreakpoint
    } else if(this.breakpointObserver.isMatched(Breakpoints.Medium)) {
      this.currentBreakpoint = Breakpoints.Medium;
      return this.currentBreakpoint
    } else if(this.breakpointObserver.isMatched(Breakpoints.Small)) {
      this.currentBreakpoint = Breakpoints.Small;
      return this.currentBreakpoint
    } else if(this.breakpointObserver.isMatched(Breakpoints.XSmall)) {
      this.currentBreakpoint = Breakpoints.XSmall;
      return this.currentBreakpoint
    }
    return this.currentBreakpoint
  }
}
