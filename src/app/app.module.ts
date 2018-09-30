import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { CartitemComponent } from './cart/cartitem/cartitem.component';
import { ShopComponent } from './shop/shop.component';
import { ProductFilterPipe } from './shared/product-filter.pipe';
import { ProductService } from './shared/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductFilterPipe,
    HeaderComponent,
    CartComponent,
    ProductComponent,
    CartitemComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
