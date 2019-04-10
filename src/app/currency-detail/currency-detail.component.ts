import { Component, OnInit, Input } from '@angular/core';
import { Currency } from '../currency';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CurrencyService }  from '../currency.service';

@Component({
  selector: 'app-currency-detail',
  templateUrl: './currency-detail.component.html',
  styleUrls: ['./currency-detail.component.css']
})



export class CurrencyDetailComponent implements OnInit {

//DO YOUR THING HERE, BEFORE THE CONSTRUCTOR
@Input() currency: Currency;

goBack(): void {
  this.location.back();
}

getCurrency(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.currencyService.getCurrency(id)
    .subscribe(currency => this.currency = currency);
}

constructor(
  private route: ActivatedRoute,
  private currencyService: CurrencyService,
  private location: Location
) {}

ngOnInit(): void {
this.getCurrency();
}

}
