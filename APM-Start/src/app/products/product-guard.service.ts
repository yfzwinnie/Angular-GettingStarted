import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate {

  constructor(private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let id = +route.url[1].path; //on the path, the product id is the second element, product is the first elment, so we're using index 1 here
    if (isNaN(id) || id < 1) {
      alert("Invalid product Id");
      this._router.navigate(['/products']); 
      return false; //if product id is invalid or less than 1, display and alert, direct them to products page, return false to abort current operation
    };
    return true;
  }

}
