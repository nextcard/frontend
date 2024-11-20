import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { ShopItemsComponent } from "./shop-items/shop-items.component";
import { provideHttpClient } from "@angular/common/http";

@NgModule({
    declarations: [AppComponent, ShopItemsComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [provideAnimationsAsync(), provideHttpClient()],
    bootstrap: [AppComponent]
})
export class AppModule {}
