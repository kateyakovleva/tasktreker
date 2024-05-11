import {Component} from "@angular/core";
import {NgFor} from "@angular/common";
import {NgSelectModule} from "@ng-select/ng-select";
import {ActivatedRoute, Router} from "@angular/router";
import {getTask, saveTask} from "../services/task";
import {EPriority, EStatus, ITask} from "../types/task";
import {performers, priorities, statuses} from "../data/data";
import {FormsModule} from "@angular/forms";

@Component({
  selector: "app-viewTask",
  standalone: true,
  imports: [NgFor, NgSelectModule, FormsModule],
  templateUrl: './viewTask.component.html',
  styleUrls: ['./viewTask.component.scss', '../createTask/createTask.component.scss', '../app.component.scss']
})
export class ViewTaskComponent {
  task?: ITask;

  constructor(private router: Router, route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.task = getTask(params["id"]);
    });
  }

  priority(priority?: EPriority) {
    return priorities.find(_priority => _priority.value === priority)?.label
  }

  submit(event: SubmitEvent) {
    if (this.task) saveTask({...this.task, ...this.selecteds});
    this.router.navigate(['']).then();
  }

  protected readonly statuses = statuses;
  protected readonly performers = performers.map(performer => ({value: performer.id, label: performer.name}));
  selecteds: { [key: string]: string } = {};

  changeSelect(key: string, value: any) {
    this.selecteds[key] = value.value;
  }

  getDefaultSelect(value: EStatus | string | undefined, items: any[]) {
    for (let i = 0; i < items.length; i++) {
      if (items[i].value === value) return items[i]
    }
  }
}
