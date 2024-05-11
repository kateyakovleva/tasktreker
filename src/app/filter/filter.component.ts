import {Component, EventEmitter, Input, Output} from "@angular/core";
import {NgFor} from "@angular/common";
import {NgSelectModule} from "@ng-select/ng-select";
import {EStatus} from "../types/task";
import {performers, statuses} from "../data/data";
import {FormsModule} from "@angular/forms";

@Component({
  selector: "app-filter",
  standalone: true,
  imports: [NgFor, NgSelectModule, FormsModule],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss', '../app.component.scss']
})
export class FilterComponent {
  @Input() filter: { [key: string]: any } = {};
  @Output() getFilter = new EventEmitter();

  protected readonly statuses = statuses;
  protected readonly performers = performers.map(performer => ({value: performer.id, label: performer.name}));

  change(key: string, value: any) {
    this.filter[key] = value.value;
  }

  getDefaultSelect(value: EStatus | string | undefined, items: any[]) {
    for (let i = 0; i < items.length; i++) {
      if (items[i].value === value) return items[i]
    }
  }
}
