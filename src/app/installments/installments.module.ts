import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {InstallmentsComponent} from './installments.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'installments', component: InstallmentsComponent},
    ]),
  ],
  declarations: [
    InstallmentsComponent
  ]
})
export class InstallmentsModule {
}
