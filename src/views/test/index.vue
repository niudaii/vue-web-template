<template>
  <Card>
    <Tabs default-active-key="Web" type="card" @change="changeTab">
      <TabPane v-for="(v, k) in tabPanes" :key="k" :tab="v" />
    </Tabs>
    <div class="tab-content">
      <keep-alive>
        <component :is="curTabComponent[activeName]" />
      </keep-alive>
    </div>
  </Card>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { Card, TabPane, Tabs } from 'ant-design-vue';
  import Company from './Company.vue';
  import Email from './Email.vue';

  const tabPanes = {
    company: '公司',
    email: '邮箱',
  };

  const curTabComponent = {
    company: Company,
    email: Email,
  };

  const activeName = ref('company');

  function changeTab(tab: string) {
    activeName.value = tab;
  }
</script>
