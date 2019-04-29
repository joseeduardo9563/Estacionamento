import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EstacionamentoService } from '../estacionamento.service';
import {Estacionamento} from '../estacionamento';
import { sanitizeHtml } from '@angular/core/src/sanitization/sanitization';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.page.html',
  styleUrls: ['./new-item.page.scss'],
})
export class NewItemPage implements OnInit {
  items: Array<any>;
  estacionamento:Estacionamento;
  ent:Number;
  sai:Number;
  result:Number;
  result1:number=0;
  result2:number=0;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private estService:EstacionamentoService) { }

  ngOnInit() {
   this.estacionamento = new Estacionamento();
   this.route.params.subscribe(
     data =>{
       this.estacionamento.ticket = data.id;
     }
   );
   this.estacionamento.valor=2;
   this.result=0;
  }
  upValue(){
    this.estacionamento.valor+=20;
    this.result = this.ent;
  }

  okPay(value){
    this.estService.okPayService(value);
  }

  goBack(){
    this.router.navigate(['/tab1']);
  }

}
