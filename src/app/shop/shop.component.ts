import { Component, OnInit } from '@angular/core';
import { CartItem } from '../cart/cart.model';
import { ProductItem } from '../product/product.model';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {

  cartItems: CartItem[] = [];

  productId: number = 0;

  productData: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
  var me =  this;
   //TODO: This can be extend to use the shared service without directly accessing the raw object
   this.productService.getProducts().forEach(function(product, i) {
      me.productData.push(new ProductItem(product.id, product.productName, parseInt(product.price), product.productImage, product.isPublished, false));
  });
  }

  onCartItemDeleted(productData:{productId: number}) {
    const index = this.cartItems.findIndex( elem => elem.id == productData.productId )
    this.cartItems.splice(index,1);
    const productIndex = this.productData.findIndex( elem => elem.id == productData.productId );
    this.productData[productIndex].isAddedToCart = false;
    this.productId = productIndex;
  }

  onCartItemChanged(productData:{productId: number}) {
  }

  onCartUpdated(productData: {
                productId: number,
                productName: string} ) {
    const index = this.cartItems.findIndex( elem => elem.id == productData.productId )
    if (index===-1) {
        this.cartItems.push({
            id: productData.productId,
            name: productData.productName
        });
    } else {
      this.cartItems[index].id = productData.productId;
      this.cartItems[index].name = productData.productName;
    }

    const productIndex = this.productData.findIndex(elem => elem.id == productData.productId);
    this.productData[productIndex].isAddedToCart = true;
    this.productId = productIndex;
  }
}
