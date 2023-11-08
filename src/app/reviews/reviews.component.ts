import { Component } from '@angular/core';
import {ReviewsStateService} from "../reviews-state.service";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  constructor(private reviews: ReviewsStateService) {
  }

  getData() {
    return this.reviews.getData();
  }
}
