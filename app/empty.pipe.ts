import {Pipe, PipeTransform} from 'angular2/core';
import {Keg} from './keg.model';

@Pipe ({
  name: "empty",
  pure: false
})

export class EmptyPipe implements PipeTransform {
  transform(input: Keg[], info) {
    var pintAmount = info[0];
    var output: Keg[] = [];
    for (var i= 0; i < input.length; i++) {
      if (input[i].pints < pintAmount) {
          output.push(input[i]);
      }
    }
    return output;
  }
}
