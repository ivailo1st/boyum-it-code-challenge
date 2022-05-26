import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppService } from '../app.service';

@Component({
  selector: 'app-to-do-items',
  template: `
    <div class="listView">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>
                ID
              </th>
              <th colspan="3">
                Name
              </th>
              <th>
                Created date
              </th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let item of items">
                <td>
                  <input type="checkbox" [checked]="item.Done"/>
                </td>
                <td>
                  {{ item.Id }}
                </td>
                <td colspan="3">
                  <div class="itemName" (click)="openDetails(item.Id)">
                    {{ item.Name }}
                  </div>
                </td>
                <td>
                  <div [ngClass]="item.Created && item.Created === 'Invalid Date' ? 'dateInvalid' : ''">
                    {{ item.Created && item.Created !== 'Invalid Date' ? item.Created : 'Invalid date' }}
                  </div>
                </td>
            </tr>
          </tbody>
        </table>
    </div>
  `,
  styleUrls: ['./to-do-items.component.css']
})
export class ToDoItemsComponent implements OnInit, OnDestroy {

  title = 'To do list app';

  items: any[] = [];

  unsubscribe = new Subject;

  constructor(
    private router: Router,
    private appService: AppService,
  ) {

  }

  openDetails(itemId: any) {
    this.router.navigateByUrl(`item/${itemId}`);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  ngOnInit(): void {
    this.appService.getItems()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((data: any) => {
        data.forEach((dataItem: any) => {
          const item = dataItem;
          item.Created = new Date(dataItem.Created).toLocaleDateString();
          this.items.push(item);
        });
      })
  }

}