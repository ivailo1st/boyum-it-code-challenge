import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-to-do-item',
  template: `
      <div class="container">
        <div class="todoItemHeader">
          <div class="todoItemName">
            {{  item.Name || 'No name provided' }}
          </div>
          <div class="todoItemDescription">
            {{  item.Description || 'No description provided'  }}
          </div>
        </div>
        <div class="todoItemBody">
          <div class="todoItemSection">
            <div class="todoItemSectionName">ID:</div>            
            {{  item.Id }}
          </div>
          <div class="todoItemSection">
            <div class="todoItemSectionName">Expenses:</div>            
            {{  item.Expenses }}
          </div>
          <div class="todoItemSection">
            <div class="todoItemSectionName">Date:</div>
            <div [ngClass]="item.Created && item.Created === 'Invalid Date' ? 'dateInvalid' : ''">              
                {{ item.Created && item.Created !== 'Invalid Date' ? item.Created : 'Invalid date' }}
            </div>
          </div>
          <div class="todoItemSection">
            <div class="todoItemSectionName">Status:</div>
            <div [ngClass]="item.Done ? 'finishedItem' : 'notFinishedItem'">              
              {{  item.Done ? 'Done' : 'Not Done' }}
            </div>
          </div>
          <div class="todoItemSection">
            <div class="todoItemSectionName">Created:</div>            
            {{ daysAgo && daysAgo >= 0 ? daysAgo : 0 }} days ago
          </div>
        </div>
        <button class="backButton" (click)="openItems()"> Go Back </button>
      </div>
  `,
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {

  item: any = null;
  daysAgo = 0;
  currentDate = new Date();
  itemId: any;

  constructor(
    private activedRouter: ActivatedRoute,
    private router: Router,
    private appService: AppService,

  ) { }

  openItems() {
    this.router.navigateByUrl("");
  }

  ngOnInit(): void {
    this.itemId = this.activedRouter.snapshot.paramMap.get("itemId");
    this.appService.getItem(parseInt(this.itemId, 10)).subscribe(item => {
      this.item = item[0];
      this.item.Expenses = this.item.Expenses.toLocaleString();
      this.item.Created = new Date(this.item.Created).toLocaleDateString();
      this.daysAgo = Math.ceil(Math.abs(this.currentDate.getTime() - new Date(this.item.Created).getTime()) / (1000 * 3600 * 24));
    });
  }

}
