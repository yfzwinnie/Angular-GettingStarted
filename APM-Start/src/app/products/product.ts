export interface IProduct { //defining the interface to be used in the product-list component.
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    price: number;
    description: string;
    starRating: number;
    imageUrl: string;
}

// if we need product methods, we will create a class like below
// export class Product implements IProduct {
//     constructor(public productId: number,
//                 public productName: string,
//                 public productCode: string,
//                 public releaseDate: string,
//                 public price: number,
//                 public description: string,
//                 public starRating: number,
//                 public imageUrl: string) {

//     }

//     calculateDiscount(percent: number): number {
//         return this.price - (this.price * percent / 100);
//     }
// }