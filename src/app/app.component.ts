import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="mainContainer">
      <h1 class="header">To-do Application</h1>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent{
}
