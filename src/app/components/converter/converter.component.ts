import { Component } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent {
  quantity:number = 0;
  have:string = 'USD';
  want:string = 'EUR';
  total:number = 0;
  currencies:string[] = ['USD', 'EUR', 'LIBRA'];

  constructor() { }

  convert(){
    switch(this.have){
      case 'USD':
        if(this.want === 'USD'){
          this.total = this.quantity;
        }else if(this.want === 'EUR'){
          this.total = this.quantity * 0.95;
        }else if(this.want === 'LIBRA'){
          this.total = this.quantity * 0.80;
        }
        break;
      case 'EUR':
        if(this.want === 'EUR'){
          this.total = this.quantity;
        }else if(this.want === 'USD'){
          this.total = this.quantity * 1.20;
        }else if(this.want === 'LIBRA'){
          this.total = this.quantity * 0.84;
        }
        break;
      case 'LIBRA':
        if(this.want === 'LIBRA'){
          this.total = this.quantity;
        }else if(this.want === 'EUR'){
          this.total = this.quantity * 1.19;
        }else if(this.want === 'LIBRA'){
          this.total = this.quantity * 1.25;
        }
        break;
    }
  }
}
