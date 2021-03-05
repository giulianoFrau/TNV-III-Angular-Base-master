import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtronomevalutazione'
})
export class FiltronomevalutazionePipe implements PipeTransform {

  transform(value: any, nomePoi : string, valutazione : string): any {
    let myArray=[];
    for(let i = 0; i<value.length; i++){
      if(value[i].nomePoi === nomePoi &&
        value[i].valutazione === valutazione){
          myArray.push(value[i])
        }
    }
    return myArray;
}

}
