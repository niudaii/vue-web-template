import { defHttp } from '/@/utils/http/axios';
import { ResultPageResult, SearchResult } from '/@/api/result/model/resultModel';

enum Api {
  FindList = '/v1/results',
}

export function findResultList(params: SearchResult) {
  return defHttp.post<ResultPageResult>({
    url: Api.FindList,
    params,
  });
}
