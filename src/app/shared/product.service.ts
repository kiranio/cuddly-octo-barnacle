import { Injectable } from '@angular/core';
import ProductData from '../data/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  private productData = ProductData;

   getProducts(){
      return this.productData;
    }

    updateProduct(productId){
       const index = this.productData.findIndex( elem => elem.id == productId )
          if (index===-1) {
          } else {
            //this.productData[index].id = productId;
            console.log('***************');
          }
    }
}
