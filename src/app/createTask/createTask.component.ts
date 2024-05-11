import {Component} from "@angular/core";
import {NgFor} from "@angular/common";
import {NgSelectModule} from "@ng-select/ng-select";
import {FormsModule} from "@angular/forms";
import {performers, priorities, statuses} from "../data/data";
// @ts-ignore
import formToObject from 'form_to_object';
import {Router} from "@angular/router";
import {createTask} from "../services/task";

@Component({
  selector: "app-createTask",
  standalone: true,
  imports: [NgFor, NgSelectModule, FormsModule],
  templateUrl: './createTask.component.html',
  styleUrls: ['./createTask.component.scss', '../app.component.scss']
})
export class CreateTaskComponent {
  constructor(private router: Router) {

  }

  submit(event: SubmitEvent) {
    const form = {...formToObject(event.target), ...this.selecteds};
    createTask(form);
    this.router.navigate(['']).then();
  }

  priorities = priorities;
  statuses = statuses;
  performers = performers.map(performer => ({value: performer.id, label: performer.name}));

  selecteds: { [key: string]: string } = {};

  changeSelect(key: string, value: any) {
    this.selecteds[key] = value.value;
  }
}
