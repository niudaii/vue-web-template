import { BasicColumn } from '/@/components/Table';
import { dateUtil } from '/@/utils/dateUtil';

export function getWorkerColumns(): BasicColumn[] {
  return [
    {
      title: 'IP',
      dataIndex: 'ip',
    },
    {
      title: '主机名',
      dataIndex: 'hostname',
    },
    {
      title: '任务执行数',
      dataIndex: 'taskExecutedNumber',
    },
    {
      title: '回连时间',
      dataIndex: 'updatedAt',
      customRender: ({ text }) => {
        return dateUtil(text).format('YYYY-MM-DD HH:mm:ss');
      },
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
