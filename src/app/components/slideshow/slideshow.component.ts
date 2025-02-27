import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';

import { Movie } from '../../interfaces/cartelera-response';
import { NgFor, NgStyle, SlicePipe } from '@angular/common';



@Component({
  selector: 'app-slideshow',
  standalone: true,
  imports: [ NgFor, SlicePipe, NgStyle],
  templateUrl: './slideshow.component.html',
  styleUrl: './slideshow.component.css'
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input() movies!: Movie[];

  public mySwiper!: Swiper;


  constructor(){}

  ngAfterViewInit(): void {

    this.mySwiper = new Swiper('.swiper-container', {
      loop: true,
      });

    }

    ngOnInit(): void {
      // console.log(this.movies);

    }

    onSlideNext() {

      this.mySwiper.slideNext();

    }

    onSlidePrev() {

      this.mySwiper.slidePrev();

    }
  }


