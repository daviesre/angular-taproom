import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
    <div>
      <h3>Edit Description: </h3>
      <input [(ngModel)]="keg.name" class="col-sm-4 input-lg keg-form">
      <input [(ngModel)]="keg.brand" class="col-sm-4 input-lg keg-form">
      <input [(ngModel)]="keg.price" class="col-sm-1 input-lg keg-form"b>
      <input [(ngModel)]="keg.alcoholContent" class="col-sm-1 input-lg keg-form">
    </div>
  `
})

export class EditKegDetailsComponent {
  public keg: Keg;
}
