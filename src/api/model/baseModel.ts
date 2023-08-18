export interface PageInfo {
  page: number;
  pageSize: number;
}

export interface PageResult<T> {
  list: T[];
  total: number;
}

export interface BasicModel {
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface BasicAccessModel {
  uuid: string;
  userId: number;
}
