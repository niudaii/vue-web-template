import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const result: AppRouteModule = {
  path: '/result',
  name: 'Result',
  component: LAYOUT,
  redirect: '/result/index',
  meta: {
    hideChildrenInMenu: true,
    title: '结果管理',
    orderNo: 100001,
  },
  children: [
    {
      path: 'index',
      name: 'ResultPage',
      component: () => import('/@/views/result/index.vue'),
      meta: {
        title: '结果管理',
        hideMenu: true,
      },
    },
  ],
};

export default result;
