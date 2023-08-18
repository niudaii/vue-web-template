import { BasicColumn, FormSchema } from '/@/components/Table';
import { dateUtil } from '/@/utils/dateUtil';

export const searchResultFormSchema: FormSchema[] = [
  {
    field: 'taskUUID',
    label: '任务 UUID',
    component: 'Input',
  },
];

export function getResultColumns(): BasicColumn[] {
  return [
    {
      title: '任务 UUID',
      dataIndex: 'taskUUID',
      width: 400,
    },
    {
      title: '输入',
      dataIndex: 'inputs',
      customRender: ({ record }) => {
        return record.inputs.join(',');
      },
    },
    {
      title: '结果',
      dataIndex: 'result',
    },
    {
      title: '更新时间',
      dataIndex: 'updatedAt',
      customRender: ({ text }) => {
        return dateUtil(text).format('YYYY-MM-DD HH:mm:ss');
      },
    },
  ];
}
