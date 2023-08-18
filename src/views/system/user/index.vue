<template>
  <Card>
    <AddUser />
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
  import AddUser from './AddUser.vue';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { deleteUser, findUserList } from '/@/api/system/user';
  import { getUserColumns, searchUserFormSchema } from '/@/views/system/user/data';
  import { DeleteUser } from '/@/api/system/model/userModel';

  const { createMessage } = useMessage();
  // table
  const [registerTable, { reload }] = useTable({
    api: findUserList,
    columns: getUserColumns(),
    formConfig: {
      labelAlign: 'left',
      labelWidth: 70,
      baseColProps: { span: 8 },
      schemas: searchUserFormSchema,
    },
    pagination: true,
    beforeFetch: () => {},
    afterFetch: () => {},
    striped: false,
    bordered: true,
    useSearchForm: true,
    loading: true,
  });

  function createActions(record: EditRecordRow): ActionItem[] {
    return [
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
    const data: DeleteUser = {
      id: record.id,
    };
    deleteUser(data);
    createMessage.success('删除成功');
    reload();
  }
</script>
<style lang="less" scoped></style>
