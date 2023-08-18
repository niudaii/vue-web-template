<template>
  <Card>
    <BasicTable @register="registerTable" />
  </Card>
</template>
<script lang="ts" setup>
  import { Card } from 'ant-design-vue';
  import { findResultList } from '/@/api/result/result';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getResultColumns, searchResultFormSchema } from '/@/views/result/data';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  // table
  const [registerTable] = useTable({
    api: findResultList,
    columns: getResultColumns(),
    formConfig: {
      labelAlign: 'left',
      labelWidth: 70,
      baseColProps: { span: 8 },
      schemas: searchResultFormSchema,
    },
    pagination: true,
    beforeFetch: (data) => {
      if (data.taskUUID == undefined) {
        data.taskUUID = router.currentRoute.value.query.taskUUID;
      }
    },
    afterFetch: () => {},
    striped: false,
    bordered: true,
    useSearchForm: true,
    loading: true,
  });
</script>
<style lang="less" scoped></style>
