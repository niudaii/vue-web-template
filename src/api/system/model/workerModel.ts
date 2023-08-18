import { PageResult } from '/@/api/model/baseModel';

export interface WorkerModel {
  createdAt: string;
  hostname: string;
  ip: string;
  isRunning: boolean;
  taskExecutedNumber: number;
  updatedAt: string;
  uuid: string;
}

export interface ExitWorker {
  uuid: string;
}

export type WorkerPageResult = PageResult<WorkerModel>;
