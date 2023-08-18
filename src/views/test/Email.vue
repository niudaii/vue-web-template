<template>
  <BasicTable @register="registerTable">
    <template #action="{ column, record }">
      <TableAction :actions="createActions(column, record)" />
    </template>
  </BasicTable>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import {
    ActionItem,
    BasicColumn,
    BasicTable,
    EditRecordRow,
    TableAction,
    useTable,
  } from '/@/components/Table';
  import { getEmailColumns, searchFormSchema } from './data';

  import { findEmailList } from '/@/api/test/result';

  export default defineComponent({
    components: { BasicTable, TableAction },
    setup() {
      const [registerTable] = useTable({
        api: findEmailList,
        columns: getEmailColumns(),
        formConfig: {
          labelWidth: 40,
          schemas: searchFormSchema,
        },
        striped: false,
        bordered: true,
        useSearchForm: true,
        actionColumn: {
          title: '操作',
          dataIndex: 'action',
          fixed: 'right',
          slots: { customRender: 'action' },
        },
      });

      function createActions(record: EditRecordRow, column: BasicColumn): ActionItem[] {
        return [
          {
            label: '查看',
            onClick: handleDetail.bind(null, record, column),
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
        console.log('点击了删除', record);
      }

      function handleDetail(record: Recordable, column: BasicColumn) {
        console.log('点击了查看', record, column);
      }

      return {
        registerTable,
        createActions,
        handleDelete,
      };
    },
  });
</script>
