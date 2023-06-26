import { Component, Input, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { constants } from '../constants';

@Component({
  selector: 'app-content-info',
  templateUrl: './content-info.component.html',
  styleUrls: ['./content-info.component.scss']
})
export class ContentInfoComponent implements OnInit{

  constructor(private sanitizer: DomSanitizer){}

  ngOnInit(): void {

  }

  @Input() type: any;

  constants = constants;
  carouselConfig = {
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    autoplay: true,
  };

  videos = [
    'L1vmF_75rag',
    'hh-qsSQPxi0',
    'mokaJuFEQec',
    'wAteQTOaERc',
    '-XL3r_Df91s',
    'QWtLfbze0ek'
  ];

  getVideoEmbedUrl(videoId: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube-nocookie.com/embed/${videoId}`);
  }
}
