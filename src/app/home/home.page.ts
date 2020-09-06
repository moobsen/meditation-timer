import { Component } from '@angular/core';
import { AudioService } from '../services/audio.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  meditation_time: number = 5;
  
  constructor(private audio: AudioService) {}

  ngAfterViewInit(){

    this.audio.preload('bell', 'assets/audio/meditation_bell.mp3');

  }

  start_meditation(){
    this.audio.play('bell');
  }

}
