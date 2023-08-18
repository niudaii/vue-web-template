import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const task: AppRouteModule = {
  path: '/task',
  name: 'Task',
  component: LAYOUT,
  redirect: '/task/index',
  meta: {
    hideChildrenInMenu: true,
    title: '任务管理',
    orderNo: 100000,
  },
  children: [
    {
      path: 'index',
      name: 'TaskPage',
      component: () => import('/@/views/task/index.vue'),
      meta: {
        title: '任务管理',
        ion: 'layers-outline',
        hideMenu: true,
      },
    },
  ],
};

export default task;
