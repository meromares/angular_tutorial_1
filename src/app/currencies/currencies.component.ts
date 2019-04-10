import { Component, OnInit } from '@angular/core';
import { Currency } from '../currency';
//import { CURRENCIES } from '../mock-currencies';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})





export class CurrenciesComponent implements OnInit {

  //currency = 'Rand';
  currency_ori: Currency = {
    id: 1,
    name: 'Rand'
  };



//currencies = CURRENCIES; //this was the hardcoded array of currencies, before the service update
currencies: Currency[];

selectedCurrency: Currency;


onSelect(currency: Currency): void {
  this.selectedCurrency = currency;
}


/* ORIGINALLY
getCurrencies(): void {
  this.currencies = this.currencyService.getCurrencies();
}
*/

getCurrencies(): void {
  this.currencyService.getCurrencies()
      .subscribe(currencies => this.currencies = currencies);
}


  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
      this.getCurrencies();
  }

}
