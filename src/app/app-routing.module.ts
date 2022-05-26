import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import { ToDoItemsComponent } from './to-do-items/to-do-items.component';

const routes: Routes = [
  { path: "", redirectTo: "/items", pathMatch: "full" },
  { path: "item/:itemId", component: ToDoItemComponent},
  { path: "items", component: ToDoItemsComponent, data: {} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
