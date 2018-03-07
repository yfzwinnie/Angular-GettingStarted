import { Component } from '@angular/core';
import { ProductService } from './products/product.service';

@Component( {
  selector: 'pm-root', //pm for product management. selector is the name of the component when we use it as a directive in HTML. Template defines the HTML that we want to display.
  template:  `
    <div>
      <nav class='navbar navbar-default'>
        <div class='container-fluid'>
          <a class='navbar-brand'>{{pageTitle}}</a>
          <ul class='nav navbar-nav'>
            <li><a [routerLink]="['/welcome']">Home</a></li>
            <li><a [routerLink]="['/products']">Product List</a></li>
          </ul>
        </div>
      </nav>
      <div class='container'>
        <router-outlet></router-outlet>
      </div>
    </div>
    `,
  providers: [ ProductService ]
})

export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}