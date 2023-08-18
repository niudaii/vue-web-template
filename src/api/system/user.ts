import { ErrorMessageMode } from '/#/axios';
import { defHttp } from '/@/utils/http/axios';
import { CreateUser, DeleteUser, SearchUser, UserPageResult } from '/@/api/system/model/userModel';

enum Api {
  Create = '/v1/system/user/create',
  Delete = '/v1/system/user/delete',
  FindList = '/v1/system/users',
}

export function createUser(params: CreateUser, mode: ErrorMessageMode = 'modal') {
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

export function deleteUser(params: DeleteUser, mode: ErrorMessageMode = 'modal') {
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

export function findUserList(params: SearchUser) {
  return defHttp.post<UserPageResult>({
    url: Api.FindList,
    params,
  });
}
