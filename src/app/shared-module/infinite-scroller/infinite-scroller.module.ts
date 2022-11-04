import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollerDirective } from 'src/app/directives/infinite-scroller.directive';



@NgModule({
  declarations: [
    InfiniteScrollerDirective
],
exports: [
    InfiniteScrollerDirective
],
  imports: [
    CommonModule
  ]
})
export class InfiniteScrollerModule { }
