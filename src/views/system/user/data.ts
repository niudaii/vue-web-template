import { FormSchema } from '/@/components/Form';
import { BasicColumn } from '/@/components/Table';
import { dateUtil } from '/@/utils/dateUtil';

const authorityOption = [
  {
    label: '管理员',
    value: 1,
  },
  {
    label: '普通用户',
    value: 2,
  },
];

export const addUserFormSchema: FormSchema[] = [
  {
    label: '用户名',
    field: 'username',
    component: 'Input',
  },
  {
    label: '密码',
    field: 'password',
    component: 'Input',
  },
  {
    label: '权限',
    field: 'authorityId',
    component: 'Select',
    componentProps: {
      options: authorityOption,
    },
  },
];

export const searchUserFormSchema: FormSchema[] = [
  {
    label: '用户名',
    field: 'username',
    component: 'Input',
  },
];

export function getUserColumns(): BasicColumn[] {
  return [
    {
      title: '用户名',
      dataIndex: 'username',
    },
    {
      title: '用户权限',
      dataIndex: 'authority.authorityName',
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      customRender: ({ text }) => {
        return dateUtil(text).format('YYYY-MM-DD HH:mm:ss');
      },
    },
    {
      title: '操作',
      dataIndex: 'action',
      fixed: 'right',
      width: 70,
      slots: { customRender: 'action' },
    },
  ];
}
