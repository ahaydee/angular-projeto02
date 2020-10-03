import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { BitcoinService } from './bitcoin.service';
import { BitcoinComponent } from './bitcoin/bitcoin.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'bitcoin', component: BitcoinComponent},
    ])
  ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, BitcoinComponent ],
  bootstrap:    [ AppComponent ],
  providers: [BitcoinService]
})
export class AppModule { }
