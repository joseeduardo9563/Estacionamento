import { Component } from '@angular/core';
import {EstacionamentoService} from '../estacionamento.service';
import {Estacionamento} from '../estacionamento';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  items:Array<any>;
constructor(private estService: EstacionamentoService){}

ngOnInit(){
  this.items = this.estService.getPayService();
}
  
getValue(value){
  let he = parseFloat(value.entrada.slice(0,2));
  let hs = parseFloat(value.saida.slice(0,2));
  let minE = parseFloat(value.entrada.slice(3,5));
  let minS = parseFloat(value.entrada.slice(3,5));
  let result = 0.0;

  if(he>hs){
    if(minE>minS){
      result+=((23.00-he+hs)*60.00)+(60.00-minE+minS);
    }else{
      result+=((24.00-he+hs)*60.00)+(minE-minS);
    }
  }else if(he===hs){
    if(minE>minS){
      result+=((23*60.00)*60.00)+(60.00-minE+minS);
    }else{
      result+=((he-hs)*60.00)+(minE-minS);
    }
  }else{
    result+=((hs-he-1)*60.00)+(60.00 - minE+minS);
    result = Math.round(result/50.00*10.00);
  }

  return result;
}

}
