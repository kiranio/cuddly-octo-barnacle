import { Component, OnInit, OnChanges, EventEmitter, Input, Output,  SimpleChanges, SimpleChange } from '@angular/core';
import { ProductItem } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnChanges, OnInit {

  productItem: ProductItem[] = [];

  @Input() productIdParent;

  @Input() productData;

   //TODO: Need to combine write the logic for multiple filter on the same data set.
  filterAddedProducts = { isAddedToCart : false};

  filterPublishedProducts = { isPublished: 'true'};

  @Output() cartUpdated = new EventEmitter<{
    productId: number,
    productName: string
  }>();

  constructor() {
  }

  ngOnInit() {
    this.updateProducts();
  }

  ngOnChanges(changes: SimpleChanges){
    this.updateProducts();
  }

  updateProducts(){
     var me = this;
         //TODO: This can be extend to use the shared service without directly accessing the raw object
             console.log('#################1111');
      me.productItem=[];
         this.productData.forEach(function(product, i) {
            me.productItem.push(new ProductItem(product.id, product.productName, parseInt(product.price), product.productImage, product.isPublished, product.isAddedToCart));
        });
  }

  onCartUpdated(event) {
    const id = event.target.getAttribute('id');
    const index = this.productItem.findIndex(elem => elem.id == id);

    this.productData[index].isAddedToCart = true;

    this.cartUpdated.emit({
        productId: this.productItem[index].id,
        productName: this.productItem[index].productName
      });

    this.updateProducts();

}


}
