import { PageResult } from '/@/api/model/baseModel';

export interface ResultModel {
  id: number;
  createdAt: string;
  updatedAt: string;
  taskUUID: string;
  uuid: string;
  inputs: string[];
  result: number;
}

export interface SearchResult {
  page: number;
  pageSize: number;
  taskUUID: string;
}

export type ResultPageResult = PageResult<ResultModel>;
