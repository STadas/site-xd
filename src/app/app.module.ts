import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XdComponent } from './components/xd/xd.component';
import { DankImgComponent } from './components/dank-img/dank-img.component';

@NgModule({
  declarations: [
    AppComponent,
    XdComponent,
    DankImgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
