import {Component} from 'angular2/core';
import {Keg} from './keg.model'

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <div class="col-xs-3">{{ keg.name }}</div>
    <div class="col-xs-3">{{ keg.brand }}</div>
    <div class="col-xs-1">{{ keg.price }}</div>
    <div class="col-xs-1">{{ keg.alcoholContent }}</div>
    <div class="col-xs-1">{{ keg.pints }}</div>
    <div class="col-xs-3"><button (click)="keg.pints = keg.pints -1" class="btn btn-warning">Serve Pint</button></div>
  `
})
export class KegComponent {
  public keg: Keg;
}
