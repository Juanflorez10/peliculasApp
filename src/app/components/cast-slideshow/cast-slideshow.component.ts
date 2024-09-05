import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Cast } from '../../interfaces/credits-response';
import Swiper from 'swiper';
import { NgFor, NgStyle } from '@angular/common';
import { PosterPipe } from '../../pipes/poster.pipe';

@Component({
  selector: 'app-cast-slideshow',
  standalone: true,
  imports: [NgFor, PosterPipe, NgStyle],
  templateUrl: './cast-slideshow.component.html',
  styleUrl: './cast-slideshow.component.css'
})
export class CastSlideshowComponent implements OnInit, AfterViewInit {

  @Input() cast!: Cast[];

  constructor() { }

  ngOnInit(): void {
    // console.log(this.cast);
  }

  ngAfterViewInit() {

    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15
  });
  }

}
