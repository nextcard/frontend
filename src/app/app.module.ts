import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { ShopItemsComponent } from "./shop-items/shop-items.component";

@NgModule({
    declarations: [AppComponent, ShopItemsComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [provideAnimationsAsync()],
    bootstrap: [AppComponent]
})
export class AppModule {}
