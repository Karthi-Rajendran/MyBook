import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';

import { KennelsComponent } from './kennels/kennels.component';
import { KennelsListComponent } from './kennels/kennels-list/kennels-list.component';
import { KennelDetailComponent } from './kennels/kennel-detail/kennel-detail.component';
import { KennelBreedsComponent } from './kennels/kennels-list/kennel-breeds/kennel-breeds.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    KennelsComponent,
    KennelsListComponent,
    KennelDetailComponent,
    KennelBreedsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
