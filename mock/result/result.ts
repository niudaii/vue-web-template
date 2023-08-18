import { resultPageSuccess } from '../_util';
import { MockMethod } from 'vite-plugin-mock';

const fakeCompanyList = [
  { company: 'aaa', address: '浙江杭州', email: 'aa@qq.com' },
  { company: 'bbb', address: '浙江杭州', email: 'bb@qq.com' },
  { company: 'ccc', address: '浙江杭州', email: 'cc@qq.com' },
  { company: 'ddd', address: '浙江杭州', email: 'dd@qq.com' },
  { company: 'eee', address: '浙江杭州', email: 'ee@qq.com' },
  { company: 'aaa', address: '浙江杭州', email: 'aa@qq.com' },
  { company: 'bbb', address: '浙江杭州', email: 'bb@qq.com' },
  { company: 'ccc', address: '浙江杭州', email: 'cc@qq.com' },
  { company: 'ddd', address: '浙江杭州', email: 'dd@qq.com' },
  { company: 'eee', address: '浙江杭州', email: 'ee@qq.com' },
  { company: 'aaa', address: '浙江杭州', email: 'aa@qq.com' },
  { company: 'bbb', address: '浙江杭州', email: 'bb@qq.com' },
  { company: 'ccc', address: '浙江杭州', email: 'cc@qq.com' },
  { company: 'ddd', address: '浙江杭州', email: 'dd@qq.com' },
  { company: 'eee', address: '浙江杭州', email: 'ee@qq.com' },
];

const fakeEmailList = [
  { domain: 'aa.com', count: 1, result: ['1@aa.com'] },
  { domain: 'bb.com', count: 2, result: ['1@bb.com', '2@bb.com'] },
  { domain: 'cc.com', count: 1, result: ['1@cc.com'] },
  { domain: 'aa.com', count: 1, result: ['1@aa.com'] },
  { domain: 'bb.com', count: 2, result: ['1@bb.com', '2@bb.com'] },
  { domain: 'cc.com', count: 1, result: ['1@cc.com'] },
  { domain: 'aa.com', count: 1, result: ['1@aa.com'] },
  { domain: 'bb.com', count: 2, result: ['1@bb.com', '2@bb.com'] },
  { domain: 'cc.com', count: 1, result: ['1@cc.com'] },
  { domain: 'aa.com', count: 1, result: ['1@aa.com'] },
  { domain: 'bb.com', count: 2, result: ['1@bb.com', '2@bb.com'] },
  { domain: 'cc.com', count: 1, result: ['1@cc.com'] },
  { domain: 'aa.com', count: 1, result: ['1@aa.com'] },
  { domain: 'bb.com', count: 2, result: ['1@bb.com', '2@bb.com'] },
  { domain: 'cc.com', count: 1, result: ['1@cc.com'] },
];

export default [
  {
    url: '/basic-api/company/list',
    timeout: 1000,
    method: 'post',
    response: ({ body }) => {
      console.log(body);
      const { page, pageSize } = body;
      return resultPageSuccess(page, pageSize, fakeCompanyList);
    },
  },
  {
    url: '/basic-api/email/list',
    timeout: 1000,
    method: 'post',
    response: ({ body }) => {
      console.log(body);
      const { page, pageSize } = body;
      return resultPageSuccess(page, pageSize, fakeEmailList);
    },
  },
] as MockMethod[];
