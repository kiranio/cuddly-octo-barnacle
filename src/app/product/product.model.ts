export class ProductItem {
  public id: number;
  public productName: string;
  public price: number;
  public productImage: string;
  public isPublished: string;
  public isAddedToCart: boolean = false;
  public storage: number;

  constructor(id: number, productName: string, price: number, productImage: string, isPublished: string, isAddedToCart: boolean  ) {
    this.id = id;
    this.productName = productName;
    this.price = price;
    this.productImage = productImage;
    this.isPublished = isPublished;
    this.isAddedToCart = isAddedToCart;
  }
}
