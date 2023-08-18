import { defHttp } from '/@/utils/http/axios';

import { ErrorMessageMode } from '/#/axios';
import { CreateTask, DeleteTask, SearchTask, TaskPageResult } from '/@/api/task/model/taskModel';

enum Api {
  Create = '/v1/task/create',
  Delete = '/v1/task/delete',
  FindList = '/v1/tasks',
}

export function createTask(params: CreateTask, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<any>(
    {
      url: Api.Create,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

export function deleteTask(params: DeleteTask, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<any>(
    {
      url: Api.Delete,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

export function findTaskList(params: SearchTask) {
  return defHttp.post<TaskPageResult>({
    url: Api.FindList,
    params,
  });
}
