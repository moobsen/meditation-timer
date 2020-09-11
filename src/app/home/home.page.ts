import { Component } from '@angular/core';
import { AudioService } from '../services/audio.service';
import { Insomnia } from '@ionic-native/insomnia/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  meditation_time: number = 5;
  
  constructor(
    private audio: AudioService,
    private insomnia: Insomnia) {}

  ngAfterViewInit(){

    this.audio.preload('bell', 'assets/audio/meditation_bell.mp3');

  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  async start_meditation(){
    this.insomnia.keepAwake()
      .then(
        () => console.log('stying awake'),
        () => console.log('insomnia error')
      );
    this.audio.play('bell');
    console.log("heard that?" + this.meditation_time);
    await this.delay(this.meditation_time * 1000 * 60);
    this.audio.play('bell');
    console.log("well done");
    this.insomnia.allowSleepAgain()
      .then(
        () => console.log('success'),
        () => console.log('error')
      );
  }

}
