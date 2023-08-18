import { defHttp } from '/@/utils/http/axios';

import { PageInfo } from '/@/api/model/baseModel';
import { CompanyPageResult, EmailPageResult } from '/@/api/test/model/resultModel';

enum Api {
  GetCompanyList = '/v1/company/list',
  GetEmailList = '/v1/email/list',
}

export function findCompanyList(params: PageInfo) {
  return defHttp.post<CompanyPageResult>({
    url: Api.GetCompanyList,
    params,
  });
}

export function findEmailList(params: PageInfo) {
  return defHttp.post<EmailPageResult>({
    url: Api.GetEmailList,
    params,
  });
}
