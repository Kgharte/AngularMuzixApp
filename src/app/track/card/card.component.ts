import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Track } from '../Track';
import { Image } from '../Image';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  trackComment: string;
  @Input()
  track: Track;
  @Input()
  imageName: string;
  @Input()
  imageUrl: Image;
  @Output() trackNameEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  sendTrackname() {
    this.trackNameEvent.emit(this.track);
  }

}
