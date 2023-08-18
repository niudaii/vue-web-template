import { ErrorMessageMode } from '/#/axios';
import { defHttp } from '/@/utils/http/axios';
import { ExitWorker, WorkerPageResult } from '/@/api/system/model/workerModel';

enum Api {
  Exit = '/v1/system/worker/exit',
  FindList = '/v1/system/workers',
}

export function exitWorker(params: ExitWorker, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<any>(
    {
      url: Api.Exit,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

export function findWorkerList() {
  return defHttp.post<WorkerPageResult>({
    url: Api.FindList,
  });
}
