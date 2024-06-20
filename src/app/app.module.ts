import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MobileProductComponent } from './mobile-product/mobile-product.component';
import { MobileComponent } from './mobile-product/mobile/mobile.component';
import { FilterComponent } from './mobile-product/filter/filter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ProductListComponent, MobileProductComponent, MobileComponent, FilterComponent],
  imports: [BrowserModule, AppRoutingModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
