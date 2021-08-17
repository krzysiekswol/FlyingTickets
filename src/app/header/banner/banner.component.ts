import { Component, OnInit } from '@angular/core';
import {Banner} from '../../models/banner-model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  banner1 = 'url("../../../assets/img/banner1v1.jpg")';
  banner2 = 'url("../../../assets/img/banner2v2.jpg")';
  banner3 = 'url("../../../assets/img/banner3v3.jpg")';
  banner: Banner = {
    backgroundImage: this.banner1
  };
  constructor() { }

  ngOnInit(): void {
  }
  changeSlideForward(): void {
    if (this.banner.backgroundImage === this.banner1) {
      this.banner.backgroundImage = this.banner2;
    } else if (this.banner.backgroundImage === this.banner2) {
      this.banner.backgroundImage = this.banner3;
    } else {
      this.banner.backgroundImage = this.banner1;
    }
  }
  changeSlideBackward(): void {
    if (this.banner.backgroundImage === this.banner1) {
      this.banner.backgroundImage = this.banner3;
    } else if (this.banner.backgroundImage === this.banner2) {
      this.banner.backgroundImage = this.banner1;
    } else {
      this.banner.backgroundImage = this.banner2;
    }
  }
}
