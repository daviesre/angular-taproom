import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
    <div>
      <div class="row form-row">
      <h3>Edit Description: </h3>
        <input [(ngModel)]="keg.name" class="col-xs-4 input-lg keg-form">
        <input [(ngModel)]="keg.brand" class="col-xs-4 input-lg keg-form">
        <input [(ngModel)]="keg.price" class="col-xs-1 input-lg keg-form"b>
        <input [(ngModel)]="keg.alcoholContent" class="col-xs-1 input-lg keg-form">
      </div>
    </div>
  `
})

export class EditKegDetailsComponent {
  public keg: Keg;
}
