import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { CurrencyDetailComponent } from './currency-detail/currency-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import { HttpClientModule }    from '@angular/common/http';
import { HttpModule } from '@angular/http';  //TEGEN DE NULL-INJECTOR MESSAGE

@NgModule({
  declarations: [
    AppComponent,
    CurrenciesComponent,
    CurrencyDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [

    // no need to place any providers due to the `providedIn` flag...==>service.ts, @injectable decoration
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
