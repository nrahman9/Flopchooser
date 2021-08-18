import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DisplayMovieComponent } from './display-movie/display-movie.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, DisplayMovieComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
