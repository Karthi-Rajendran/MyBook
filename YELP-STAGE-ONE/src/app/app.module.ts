import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllPetstoresComponent } from './all-petstores/all-petstores.component';
import { PetstoresComponent } from './all-petstores/petstores/petstores.component';
import { PetstoreEditComponent } from './all-petstores/petstore-edit/petstore-edit.component';
import { PetstoreCreateComponent } from './all-petstores/petstore-create/petstore-create.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AllPetstoresComponent,
    PetstoresComponent,
    PetstoreEditComponent,
    PetstoreCreateComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
