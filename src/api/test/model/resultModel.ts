import { PageResult } from '/@/api/model/baseModel';

export interface Company {
  company: string;
  address: string;
  email: string;
  domains: string;
  shareholder: string;
}

export interface Email {
  domain: string;
  count: number;
  result: string[];
}

export type CompanyPageResult = PageResult<Company>;

export type EmailPageResult = PageResult<Email>;
