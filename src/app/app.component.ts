import { Component } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Pokédex';

  constructor(private breakpoint: BreakpointObserver) { }

  isHandset$ = this.breakpoint.observe([
    Breakpoints.Handset,
    Breakpoints.TabletPortrait,
  ]);

  ngOnInit(): void { }
}
