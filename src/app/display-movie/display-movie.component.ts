import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-display-movie',
  templateUrl: './display-movie.component.html',
  styleUrls: ['./display-movie.component.css']
})
export class DisplayMovieComponent {
  @Input() movie;
  @Output() select = new EventEmitter();
  onClick() {
    this.select.emit();
  }
  constructor() {}
}
