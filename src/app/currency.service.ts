import { Injectable } from '@angular/core';
import { Currency } from './currency';
import { CURRENCIES } from './mock-currencies';
import { Observable, of } from 'rxjs';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MessageService } from './message.service';

import {
  map
} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})


export class CurrencyService {
  private currencies:  any = [];
  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private _http: Http) { }


getCurrencies(): Observable<Currency[]> {
    this.messageService.add('CurrencyService: fetched currencies');
  return of (CURRENCIES);
}

getCurrency(id: number): Observable<Currency> {
  // TODO: send the message _after_ fetching the hero
  this.messageService.add(`CurrencyService: fetched currency id=${id}`);
  return of(CURRENCIES.find(currency => currency.id === id));
}

 ecb() {
    return this.http.get('api/currencies');
  }
  refresh() {
    return this.http.get('api/refresh');
  }



}
