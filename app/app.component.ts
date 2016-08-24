import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component'
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container-fluid header">
      <img id="heather" src="/resources/images/heather.png">
      <h1>Heather's Hangry Hag Hangout</h1>
    </div>
    <div class="container">
      <keg-list
        [kegList]="kegs"
        (onKegSelect)="kegWasSelected($event)">
      </keg-list>
    </div>
  `
})
export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg("Dragon's Blood Vermillion Ale", "Highpass Brewing Co.", 8, "6.5%"),
      new Keg("Excalibur", "Humble Monk Distillery", 9, "7%"),
      new Keg("Griffin Sweat Pale Ale", "The Barn Out Back", 1, "14.5%"),
      new Keg("Eye of Newt Brew", "Witch's Tooth", 5, "12.5%"),
      new Keg("Shady Brownie Ale", "Windwood Brewing", 2, "3.5%")
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log('parent', clickedKeg);
  }
}
