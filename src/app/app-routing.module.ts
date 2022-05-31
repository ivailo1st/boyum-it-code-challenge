import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import { ToDoItemsComponent } from './to-do-items/to-do-items.component';

const routes: Routes = [
  { path: "item/:itemId", component: ToDoItemComponent},
  { path: "", component: ToDoItemsComponent, data: {} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
