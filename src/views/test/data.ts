import { BasicColumn, FormSchema } from '/@/components/Table';

export const companyColumns: BasicColumn[] = [
  {
    title: '公司',
    dataIndex: 'company',
  },
  {
    title: '地址',
    dataIndex: 'address',
  },
  {
    title: '邮箱',
    dataIndex: 'email',
  },
  {
    title: '域名',
    dataIndex: 'domains',
  },
  {
    title: '股东',
    dataIndex: 'shareholder',
  },
];

export function getEmailColumns(): BasicColumn[] {
  return [
    {
      title: '域名',
      dataIndex: 'domain',
    },
    {
      title: '数量',
      dataIndex: 'count',
    },
    {
      title: '结果',
      dataIndex: 'result',
    },
  ];
}

export const searchFormSchema: FormSchema[] = [
  {
    field: 'domain',
    label: '域名',
    component: 'Input',
    colProps: { span: 6 },
  },
];
