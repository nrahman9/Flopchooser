import { Component } from '@angular/core';
import { flopChooserService } from './flop-chooser.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  flops;
  isCorrect = false;
  hasChosen = false;
  onFirstSelected() {
    if (!this.hasChosen) {
      console.log('first');
      this.hasChosen = true;
      this.isCorrect = this.choose.isChoiceCorrect(
        this.flops.first,
        this.flops.second
      );
      console.log(this.isCorrect);
    }
  }
  onSecondSelected() {
    if (!this.hasChosen) {
      console.log('second');
      this.hasChosen = true;
      this.isCorrect = this.choose.isChoiceCorrect(
        this.flops.second,
        this.flops.first
      );
      console.log(this.isCorrect);
    }
  }
  onPlayClickAgain() {
    this.hasChosen = false;
    this.selectNewFlop();
  }
  selectNewFlop() {
    this.flops = this.choose.getTwoRandomFlops();
  }
  constructor(public choose: flopChooserService) {}
  ngOnInit() {
    this.selectNewFlop();
  }
}
