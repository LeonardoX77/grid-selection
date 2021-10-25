import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RangeSelectionDirective } from './range-selection.directive';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, RangeSelectionDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
