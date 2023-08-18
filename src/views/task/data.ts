import { BasicColumn, FormSchema } from '/@/components/Table';

const taskTypeOtions = [
  {
    label: 'addition',
    value: 'addition',
  },
  {
    label: 'multiplication',
    value: 'multiplication',
  },
];

export const searchTaskFormSchema: FormSchema[] = [
  {
    field: 'taskName',
    label: '任务名称',
    component: 'Input',
  },
  {
    field: 'taskType',
    label: '任务类型',
    component: 'Select',
    componentProps: {
      options: taskTypeOtions,
    },
  },
];

export const addTaskFormSchema: FormSchema[] = [
  {
    label: '任务名',
    field: 'taskName',
    component: 'Input',
  },
  {
    label: '任务类型',
    field: 'taskType',
    component: 'Select',
    componentProps: {
      options: taskTypeOtions,
    },
    rules: [{ required: true }],
  },
  {
    label: '输入',
    field: 'inputs',
    component: 'Input',
  },
];

export function getTaskColumns(): BasicColumn[] {
  return [
    {
      title: '任务名',
      dataIndex: 'taskName',
    },
    {
      title: '任务类型',
      dataIndex: 'taskType',
    },
    {
      title: '输入',
      dataIndex: 'inputs',
    },
    {
      title: '任务进度',
      dataIndex: 'process',
    },
    {
      title: '完成时间',
      dataIndex: 'endTime',
      width: 200,
    },
    {
      title: '操作',
      dataIndex: 'action',
      fixed: 'right',
      width: 120,
      slots: { customRender: 'action' },
    },
  ];
}
