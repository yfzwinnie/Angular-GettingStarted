import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;

    _listFilter: string;
    
    get listFilter(): string { //gets the value when we need it
        return this._listFilter;
    }
    set listFilter(value:string) { //sets the value whenever user change it
        this._listFilter = value;
        this.filteredProducts=this.listFilter ? this.performFilter  (this.listFilter) : this.products; //this takes care of empty, null, or undefined listfilters. if there is a listFilter value, use performFilter method defined below. If there isn't, display all the products.
    }

    filteredProducts: IProduct[];
    products: IProduct[] = []; 
    
    constructor(private _productService: ProductService) {
    
    }
    
    onRatingclicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase(); //convert to lower case
        return this.products.filter((product: IProduct) => 
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    } //use filter method to return a new array of products

    toggleImage(): void { //our method won't have a return type so we specify it as void
        this.showImage = !this.showImage;
    }

    ngOnInit(): void { //OnInit lifecycle hook provides a place to perform any component initalization and it's a great place to retrieve data for its template
        this._productService.getProducts()
            .subscribe(products => {
                this.products = products,
                this.filteredProducts = this.products; //default to show all products
            },
                error => this.errorMessage = <any>error);
    }
}