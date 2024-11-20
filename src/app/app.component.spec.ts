import { TestBed } from "@angular/core/testing";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe("AppComponent", () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterModule.forRoot([])],
            declarations: [AppComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    });

    it("should create the app", () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'frontend'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual("frontend");
    });
});
