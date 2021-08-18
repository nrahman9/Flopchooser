import { Injectable } from '@angular/core';
import { FLOP_DATA } from './FLOP_DATA';
@Injectable({
  providedIn: 'root'
})
export class flopChooserService {
  flopsData;
  constructor() {
    this.flopsData = FLOP_DATA;
  }
  getRandomIndex() {
    return Math.floor(Math.random() * Math.floor(this.flopsData.length));
  }
  getTwoRandomFlops() {
    let firstIndex = this.getRandomIndex();
    let secondIndex = firstIndex;
    while (secondIndex === firstIndex) secondIndex = this.getRandomIndex();
    return {
      first: this.flopsData[firstIndex],
      second: this.flopsData[secondIndex]
    };
  }
  isChoiceCorrect(choice, other) {
    return choice.stars <= other.stars;
  }
}
