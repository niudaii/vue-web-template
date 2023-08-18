import { PageResult } from '/@/api/model/baseModel';

export interface CreateTask {
  taskName: string;
  taskType: string;
  inputs: string;
}

export interface TaskModel {
  id: number;
  createdAt: string;
  updatedAt: string;
  uuid: string;
  userId: number;
  taskName: string;
  taskType: string;
  inputs: string;
  process: string;
  endTime: string;
}

export interface SearchTask {
  page: number;
  pageSize: number;
  taskName: string;
  taskType: string;
}

export interface DeleteTask {
  uuids: string[];
}

export type TaskPageResult = PageResult<TaskModel>;
