import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'tempConverter'
})
export class TempConverterPipe implements PipeTransform {

  transform(value: string, unit: string) {
    if(value.length>=3 && !(value=="")) {
      if (unit === 'F') {
        let success="success!"
        return success;
      } 
      else if (unit === 'L') {
        let success="success!"
        return success;
      } 
    }
    else{
      let wrong="wrong!!!"
      return wrong;
    }
    return;

  }
}
