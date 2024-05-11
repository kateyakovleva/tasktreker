import {Component} from "@angular/core";
import {NgFor} from "@angular/common";
import {EPriority, EStatus, ITask} from "../types/task";
import {performers, priorities, statuses} from "../data/data";
import {RouterLink} from "@angular/router";
import {getTasks} from "../services/task";
import {FilterComponent} from "../filter/filter.component";


@Component({
  selector: "app-taskList",
  standalone: true,
  imports: [NgFor, RouterLink, FilterComponent],
  templateUrl: './taskList.component.html',
  styleUrls: ['./taskList.component.scss', '../app.component.scss']
})
export class TaskListComponent {
  tasks: ITask[] = getTasks();
  filter: { [key: string]: any } = {
    status: '',
    performerId: '',
    deadline: ''
  }

  getTasks() {
    return this.tasks.filter(task => {
      if (this.filter.status && this.filter.status !== task.status) {
        return false;
      }
      if (this.filter.performerId && this.filter.performerId !== task.performerId) {
        return false;
      }
      if (this.filter.deadline && this.filter.deadline !== task.deadline) {
        return false;
      }

      return true;
    })
  }

  performer(performerId: string) {
    return performers.find(performer => performer.id === performerId)?.name
  }

  status(status: EStatus) {
    return statuses.find(_status => _status.value === status)?.label
  }

  priority(priority: EPriority) {
    return priorities.find(_priority => _priority.value === priority)?.label
  }
}
