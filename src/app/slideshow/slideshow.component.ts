import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {IReview, ReviewsStateService} from "../reviews-state.service";


@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css'],
  animations: [
    trigger('slideAnimation', [
      transition(':increment', [
        style({ transform: 'translateX(100%)' }),
        animate('200ms ease-in', style({ transform: 'translateX(0)' })),
      ]),
      transition(':decrement', [
        style({ transform: 'translateX(-100%)' }),
        animate('200ms ease-in', style({ transform: 'translateX(0)' })),
      ]),
    ]),
  ]
})
export class SlideshowComponent implements OnInit {
  slides : IReview[] = [];
  currentSlideIndex = 0;

  constructor(private reviews: ReviewsStateService) {
  }

  ngOnInit() {
    this.slides = this.reviews.getData();
  }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlideIndex =
      this.currentSlideIndex === 0
        ? this.slides.length - 1
        : this.currentSlideIndex - 1;
  }
}
