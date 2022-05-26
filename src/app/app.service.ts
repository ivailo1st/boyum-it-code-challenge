import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { map, take } from "rxjs/operators";

@Injectable({
    providedIn: 'root',
})

export class AppService implements OnInit {

    data: any[] = [];

    constructor(
        private httpClient: HttpClient,
    ) { }

    ngOnInit(): void {
        this.httpClient.get("https://boyumcodechallenge.azurewebsites.net/api/todolist")
            .pipe(take(1))
            .subscribe((data: any) => {
                this.data = data;
            });
    }

    getItems() {
        return this.httpClient.get("https://boyumcodechallenge.azurewebsites.net/api/todolist")
    }

    getItem(itemId: number) {
        return this.httpClient.get("https://boyumcodechallenge.azurewebsites.net/api/todolist")
            .pipe(
                take(1),
                map((items: any) => items.filter((item: any) => item.Id === itemId))
            );
    }

}
