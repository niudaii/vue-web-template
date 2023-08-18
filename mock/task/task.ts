import { resultPageSuccess } from '../_util';
import { MockMethod } from 'vite-plugin-mock';

const fakeTaskList = [
  { uuid: '7b341bd3-e19b-40d8-8945-ac229232e72a', name: '任务一', keyword: 'xx 公司' },
  { uuid: '698a09e3-4756-4881-8756-e20be74ddcfe', name: '任务二', keyword: 'yy 公司' },
  { uuid: '7b341bd3-e19b-40d8-8945-ac229232e72a', name: '任务一', keyword: 'xx 公司' },
  { uuid: '698a09e3-4756-4881-8756-e20be74ddcfe', name: '任务二', keyword: 'yy 公司' },
  { uuid: '7b341bd3-e19b-40d8-8945-ac229232e72a', name: '任务一', keyword: 'xx 公司' },
  { uuid: '698a09e3-4756-4881-8756-e20be74ddcfe', name: '任务二', keyword: 'yy 公司' },
  { uuid: '7b341bd3-e19b-40d8-8945-ac229232e72a', name: '任务一', keyword: 'xx 公司' },
  { uuid: '698a09e3-4756-4881-8756-e20be74ddcfe', name: '任务二', keyword: 'yy 公司' },
  { uuid: '7b341bd3-e19b-40d8-8945-ac229232e72a', name: '任务一', keyword: 'xx 公司' },
  { uuid: '698a09e3-4756-4881-8756-e20be74ddcfe', name: '任务二', keyword: 'yy 公司' },
  { uuid: '7b341bd3-e19b-40d8-8945-ac229232e72a', name: '任务一', keyword: 'xx 公司' },
  { uuid: '698a09e3-4756-4881-8756-e20be74ddcfe', name: '任务二', keyword: 'yy 公司' },
  { uuid: '7b341bd3-e19b-40d8-8945-ac229232e72a', name: '任务一', keyword: 'xx 公司' },
  { uuid: '698a09e3-4756-4881-8756-e20be74ddcfe', name: '任务二', keyword: 'yy 公司' },
];

export default [
  {
    url: '/basic-api/task/list',
    timeout: 1000,
    method: 'post',
    response: ({ body }) => {
      console.log(body);
      const { page, pageSize } = body;
      return resultPageSuccess(page, pageSize, fakeTaskList);
    },
  },
] as MockMethod[];
