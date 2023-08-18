<template>
  <Card>
    <AddModal />
    <BasicTable @register="registerTable">
      <template #action="{ record, column }">
        <TableAction :actions="createActions(record, column)" />
      </template>
    </BasicTable>
  </Card>
</template>
<script lang="ts" setup>
  import { Card } from 'ant-design-vue';
  import {
    ActionItem,
    BasicTable,
    EditRecordRow,
    TableAction,
    useTable,
  } from '/@/components/Table';
  import AddModal from './AddTask.vue';
  import { deleteTask, findTaskList } from '/@/api/task/task';
  import { DeleteTask } from '/@/api/task/model/taskModel';
  import { useRouter } from 'vue-router';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { getTaskColumns, searchTaskFormSchema } from '/@/views/task/data';

  const router = useRouter();
  const { createMessage } = useMessage();
  // table
  const [registerTable, { reload }] = useTable({
    api: findTaskList,
    columns: getTaskColumns(),
    formConfig: {
      labelAlign: 'left',
      labelWidth: 70,
      baseColProps: { span: 8, offset: 0 },
      schemas: searchTaskFormSchema,
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

  function createActions(record: EditRecordRow): ActionItem[] {
    return [
      {
        label: '查看',
        onClick: handleDetail.bind(null, record),
      },
      {
        label: '删除',
        popConfirm: {
          title: '是否确认删除',
          confirm: handleDelete.bind(null, record),
        },
      },
    ];
  }

  function handleDelete(record: Recordable) {
    console.log('点击了删除', record.uuid);
    const data: DeleteTask = {
      uuids: [record.uuid],
    };
    deleteTask(data);
    createMessage.success('删除成功');
    reload();
  }

  function handleDetail(record: Recordable) {
    console.log('点击了查看', record);
    router.push({
      path: '/result/index',
      query: {
        taskUUID: record.uuid,
      },
    });
  }
</script>
<style lang="less" scoped>
  .searchForm {
    margin-top: 20px;
    margin-bottom: 20px;

    input {
      width: 200px;
    }

    button {
      margin-right: 20px;
    }
  }
</style>
