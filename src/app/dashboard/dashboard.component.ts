import { Component, OnInit } from '@angular/core';
import { Currency } from '../currency';
import { CurrencyService } from '../currency.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})




export class DashboardComponent implements OnInit {
  currencies: Currency[] = [];
  private currenciesecb:  any = [];
  apiStatus: string;

  constructor(private currencyService: CurrencyService, private _http: Http,  private http: HttpClient) { }

  ngOnInit() {
    this.getCurrencies();

     //CHECK RAILS ECB API STATUS:
      this._http.get('/api/status').subscribe(data => {
      this.apiStatus = data.json().data;
    });

  }

  getCurrencies(): void {
    this.currencyService.getCurrencies()
      .subscribe(currencies => this.currencies = currencies.slice(1, 5));
  }


  ecb() {
        this.currencyService.ecb().subscribe((res : any[])=>{
        console.log(res);
        this.currenciesecb = res;
        });
    }

    refresh() {
          this.currencyService.refresh().subscribe((res : any[])=>{
          console.log(res);
          this.currenciesecb = res;
          });
      }

}
