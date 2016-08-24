import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';


@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
    <div class='keg-form'>
      <div class="row form-row">
        <h3>Create Keg:</h3>
        <input placeholder="Name" class="col-xs-4 input-lg" #newName>
        <input placeholder="Brand" class="col-xs-4 input-lg" #newBrand>
        <input placeholder="Price" class="col-xs-1 input-lg" #newPrice>
        <input placeholder="Alcohol Content" class="col-xs-1 input-lg" #newAlcoholContent>
        <button (click)="addKeg(newName, newBrand, newPrice, newAlcoholContent)" class="btn btn-success btn-lg add-button">Add</button>
      </div>
    </div>
  `
})

export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<Object>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(userName: HTMLInputElement, userBrand: HTMLInputElement, userPrice: HTMLInputElement, userAlc: HTMLInputElement) {
    this.onSubmitNewKeg.emit({userName: userName.value, userBrand: userBrand.value, userPrice: userPrice.value, userAlc: userAlc.value});
    userName.value = "";
    userBrand.value = "";
    userPrice.value = "";
    userAlc.value = "";
  }
}
