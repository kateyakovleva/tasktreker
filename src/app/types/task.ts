export interface ITask {
  id?: string;
  title: string;
  name: string;
  deadline: string;
  priority: EPriority;
  status: EStatus;
  performerId: string;
}

export enum EPriority {
  HIGH = 'high',
  LOW = 'low',
  MEDIUM = 'medium',
}

export interface IPerformer {
  id: string;
  name: string;
}

export enum EStatus {
  NEW = 'new',
  IN_WORK = 'in_work',
  COMPLETED = 'completed',
}
