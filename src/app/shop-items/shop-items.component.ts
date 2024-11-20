import { Component } from "@angular/core";
import { Item } from "../core/model";

@Component({
    selector: "app-shop-items",
    templateUrl: "./shop-items.component.html",
    styleUrls: ["./shop-items.component.scss"]
})
export class ShopItemsComponent {
    mockData: Item[] = [
        {
            id: 1,
            title: "Uno Kartenspiel",
            description: "A great product",
            price: 19.99,
            condition: "new",
            dateAdded: "01/01/2024",
            tags: []
        },
        {
            id: 2,
            title: "Purse",
            description: "Another fantastic product",
            price: 29.99,
            condition: "new",
            dateAdded: "01/05/2024",
            tags: []
        },
        {
            id: 3,
            title: "Portable calculator",
            description: "A used product",
            price: 4.99,
            condition: "used",
            dateAdded: "01/11/2024",
            tags: []
        },
        {
            id: 4,
            title: "Coffeepot",
            description: "Product, very nice",
            price: 17.77,
            condition: "new",
            dateAdded: "01/01/2024",
            tags: []
        },
        {
            id: 5,
            title: "Watch",
            description: "Another fantastic product",
            price: 29.99,
            condition: "new",
            dateAdded: "01/01/2024",
            tags: []
        },
        {
            id: 6,
            title: "Powerbank",
            description: "Charges your phone in no time",
            price: 17.77,
            condition: "new",
            dateAdded: "07/07/2024",
            tags: []
        }
    ];
}
