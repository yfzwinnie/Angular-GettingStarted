import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';

@NgModule({ //decorator that defines the metadata for this module
  declarations: [ //defines the components that belong to this module
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule, //defines the external modules that we want to have available to all the components in this module
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'}, //when the app loads, default to welcome
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    ProductModule
  ],
  bootstrap: [AppComponent] //defines the startup component of the application, which is our AppComponent
})
export class AppModule { } //defines this module using a class
