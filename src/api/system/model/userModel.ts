import { PageResult } from '/@/api/model/baseModel';

export interface UserModel {
  authority: AuthorityModel;
  authorityId: number;
  createdAt: string;
  id: number;
  password?: string;
  updatedAt: string;
  username: string;
}

export interface AuthorityModel {
  authorityId?: number;
  authorityName: string;
}

export interface CreateUser {
  username: string;
  password: string;
  authorityId: number;
}

export interface DeleteUser {
  id: number;
}

export interface SearchUser {
  page: number;
  pageSize: number;
  username: string;
}

export type UserPageResult = PageResult<UserModel>;
