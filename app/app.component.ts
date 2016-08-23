import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component'
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
      <h1>Brews</h1>
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
      new Keg("Eye of Newt Brew", "Witch's Tooth", 5, "12.5%")
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log('parent', clickedKeg);
  }
}
