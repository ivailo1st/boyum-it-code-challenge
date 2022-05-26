import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-to-do-item',
  template: `
      <div *ngIf="item" class="todoItem">
        <div>
          {{  item.Id }}
        </div>
        <div>
          {{  item.Name }}
        </div>
        <div>
          {{  item.Expenses }}
        </div>
        <div [ngClass]="item.Created && item.Created === 'Invalid Date' ? 'dateInvalid' : ''">
          {{ item.Created && item.Created !== 'Invalid Date' ? item.Created : 'Invalid date' }}
        </div>
        <div [ngClass]="item.Done ? 'finishedItem' : 'notFinishedItem'">
          {{  item.Done ? 'Done' : 'Not Done' }}
        </div>
      </div>
      <button class="backButton" (click)="openItems()"> Go Back </button>
  `,
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {

  item: any = null;
  itemId: any;

  constructor(
    private activedRouter: ActivatedRoute,
    private router: Router,
    private appService: AppService,
  ) { }

  openItems(){
    this.router.navigateByUrl("/items");
  }

  ngOnInit(): void {
    this.itemId = this.activedRouter.snapshot.paramMap.get("itemId");
    this.appService.getItem(parseInt(this.itemId, 10)).subscribe(item => {
      this.item = item[0];
      this.item.Created = new Date(this.item.Created).toLocaleDateString();
      console.log(this.item);
    });
  }

}
