<template>
  <Card>
    <BasicTable @register="registerTable">
      <template #action="{ record }">
        <TableAction :actions="createActions(record)" />
      </template>
    </BasicTable>
  </Card>
</template>
<script lang="ts" setup>
  import {
    ActionItem,
    BasicTable,
    EditRecordRow,
    TableAction,
    useTable,
  } from '/@/components/Table';
  import { Card } from 'ant-design-vue';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { ExitWorker } from '/@/api/system/model/workerModel';
  import { exitWorker, findWorkerList } from '/@/api/system/worker';
  import { getWorkerColumns } from '/@/views/system/worker/data';

  const { createMessage } = useMessage();
  // table
  const [registerTable, { reload }] = useTable({
    api: findWorkerList,
    columns: getWorkerColumns(),
    pagination: true,
    beforeFetch: () => {},
    afterFetch: () => {},
    striped: false,
    bordered: true,
    useSearchForm: false,
    loading: true,
  });

  function createActions(record: EditRecordRow): ActionItem[] {
    return [
      {
        label: '退出',
        popConfirm: {
          title: '是否确认退出',
          confirm: handleExit.bind(null, record),
        },
      },
    ];
  }

  function handleExit(record: Recordable) {
    console.log('点击了退出', record.uuid);
    const data: ExitWorker = {
      uuid: record.uuid,
    };
    exitWorker(data);
    createMessage.success('退出成功');
    reload();
  }
</script>
<style lang="less" scoped></style>
