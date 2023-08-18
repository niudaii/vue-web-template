import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { RoleEnum } from '/@/enums/roleEnum';

const system: AppRouteModule = {
  path: '/system',
  name: 'System',
  component: LAYOUT,
  redirect: '/system/user',
  meta: {
    hideChildrenInMenu: false,
    title: '系统管理',
    orderNo: 100002,
    roles: [RoleEnum.Admin],
  },
  children: [
    {
      path: 'user',
      name: 'UserPage',
      component: () => import('/@/views/system/user/index.vue'),
      meta: {
        title: '用户管理',
        hideMenu: false,
      },
    },
    {
      path: 'worker',
      name: 'WorkerPage',
      component: () => import('/@/views/system/worker/index.vue'),
      meta: {
        title: '节点管理',
        hideMenu: false,
      },
    },
  ],
};

export default system;
