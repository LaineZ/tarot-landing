import { Injectable } from '@angular/core';

export interface IReview {
  name: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReviewsStateService {
  data: IReview[] = [
    {
      name: 'МАРИНА',
      image: '/assets/images/reviews/marina.png',
    },
    {
      name: 'ОЛЬГА',
      image: '/assets/images/reviews/olga.png',
    },
    {
      name: 'ОКСАНА',
      image: '/assets/images/reviews/oksana.png',
    },
    {
      name: 'ЛАЛА',
      image: '/assets/images/reviews/lala.png',
    },
  ];


  getData(): IReview[] {
    return this.data;
  }
}
