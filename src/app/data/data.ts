import {EPriority, EStatus, IPerformer} from "../types/task";

export const priorities = [
  {value: EPriority.HIGH, label: 'Высокий'},
  {value: EPriority.LOW, label: 'Низкий'},
  {value: EPriority.MEDIUM, label: 'Средний'},
]

export const statuses = [
  {value: EStatus.NEW, label: 'Новая задача'},
  {value: EStatus.IN_WORK, label: 'В работе'},
  {value: EStatus.COMPLETED, label: 'Завершенная задача'},
]

export const performers: IPerformer[] = [
  {id: '1', name: 'Смирнов'},
  {id: '2', name: 'Сидоров'},
  {id: '3', name: 'Иванов'},
]
