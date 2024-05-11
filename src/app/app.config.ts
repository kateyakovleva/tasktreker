import {ApplicationConfig} from '@angular/core';
import {provideRouter, Routes} from '@angular/router';
import {TaskListComponent} from "./taskList/taskList.component";
import {CreateTaskComponent} from "./createTask/createTask.component";
import {ViewTaskComponent} from "./viewTask/viewTask.component";

const appRoutes: Routes = [
  {path: "", component: TaskListComponent},
  {path: "create_task", component: CreateTaskComponent},
  {path: "view_task/:id", component: ViewTaskComponent}
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes)]
};
