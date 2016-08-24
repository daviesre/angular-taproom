import {Component} from 'angular2/core';
import {Keg} from './keg.model'

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <div class="row content">
      <div class="col-sm-3"><span class="small">Name: </span><p>{{ keg.name }}</p></div>
      <div class="col-sm-3"><span class="small">Brand: </span><p>{{ keg.brand }}</p></div>
      <div [class.expensive]="keg.price > 5" [class.budget]="keg.price < 4" class="col-sm-1"><span class="small">Price: </span><p>{{ keg.price }}</p></div>
      <div class="col-sm-1"><span class="small">Alc: </span><p>{{ keg.alcoholContent }}</p></div>
      <div class="col-sm-1"><span class="small">Pints: </span><p>{{ keg.pints }}</p></div>
      <div class="col-sm-3" *ngIf="keg.pints > 0"><button (click)="keg.pints = keg.pints -1" class="btn btn-warning">Serve Pint</button></div>
    </div>
  `
})
export class KegComponent {
  public keg: Keg;
}
