// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import {HttpClientModule} from '@angular/common/http';
// Components
import { AppComponent } from './app.component';
import { NavigationComponent } from './header/nav/navigation.component';
import { BannerComponent } from './header/banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { FlightsOptionComponent } from './main/flights-option/flights-option.component';
import {FormsModule} from '@angular/forms';
import { SeatGuruComponent } from './main/seat-guru/seat-guru.component';




@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BannerComponent,
    FooterComponent,
    MainComponent,
    FlightsOptionComponent,
    SeatGuruComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
