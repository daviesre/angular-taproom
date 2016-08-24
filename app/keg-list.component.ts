import {Component, EventEmitter} from 'angular2/core';
import { KegComponent } from './keg.component';
import {Keg} from './keg.model';
import {EditKegDetailsComponent} from './edit-keg-details.component';
import {NewKegComponent} from './new-keg.component';
import {EmptyPipe} from './empty.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  pipes: [EmptyPipe],
  directives: [KegComponent, EditKegDetailsComponent, NewKegComponent],
  template: `
  <label>Filter Inventory:
    <select (change)="onChange($event.target.value)" class="filter">
      <option selected value="125">Show All</option>
      <option value="10">Show Close to Empty</option>
    </select>
  </label>
  <div class="row header-row">
    <div class="col-xs-3"><h3>Name</h3></div>
    <div class="col-xs-3"><h3>Brewing Company</h3></div>
    <div class="col-xs-1"><h3>Price</h3></div>
    <div class="col-xs-1"><h3>Alc.</h3></div>
    <div class="col-xs-1"><h3>Pints</h3></div>
    <div class="col-xs-3"><h3></h3></div>
  </div>
  <keg-display *ngFor="#currentKeg of kegList | empty:selectedEmpty"
    (click)="kegClicked(currentKeg)"
    [class.selected]="currentKeg === selectedKeg"
    [keg]="currentKeg">
  </keg-display>
  <edit-keg-details *ngIf="selectedKeg" [keg]="selectedKeg"></edit-keg-details>
  <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  public selectedEmpty: number = 125;
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    console.log("child", clickedKeg);
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(keg): void {
    this.kegList.push(
      new Keg (keg.userName, keg.userBrand, keg.userPrice, keg.userAlc)
    );
  }
  onChange(optionFromMenu) {
    this.selectedEmpty = optionFromMenu;
    console.log(this.selectedEmpty);
  }
}
