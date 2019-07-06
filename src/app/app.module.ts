import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {InstallmentsComponent} from './installments/installments.component';
import {RouterModule} from '@angular/router';
import {InstallmentsModule} from './installments/installments.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'welcome', component: AppComponent},
      {path: 'installments', component: InstallmentsComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    InstallmentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
