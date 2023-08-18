<template>
  <BasicTable
    :columns="companyColumns"
    :dataSource="data"
    :loading="loading"
    :pagination="paginationProp"
  />
</template>
<script lang="ts">
  import { defineComponent, onMounted, reactive, ref, toRefs } from 'vue';
  import { BasicTable } from '/@/components/Table';
  import { findCompanyList } from '/@/api/test/result';
  import { PageInfo } from '/@/api/model/baseModel';

  import { companyColumns } from './data';
  import { Company, CompanyPageResult } from '/@/api/test/model/resultModel';

  export default defineComponent({
    components: { BasicTable },
    setup() {
      // table
      const state = reactive({
        loading: false,
      });
      const { loading } = toRefs(state);
      const data = ref<Company[]>([]);
      // 分页
      const page = ref(1);
      const pageSize = ref(10);
      const total = ref(0);
      const paginationProp = ref({
        showSizeChanger: false,
        showQuickJumper: true,
        pageSize,
        current: page,
        total,
        showTotal: (total) => `总 ${total} 条`,
        onChange: pageChange,
        onShowSizeChange: pageSizeChange,
      });

      function pageChange(p, pz) {
        page.value = p;
        pageSize.value = pz;
        getList();
      }

      function pageSizeChange(_current, size) {
        pageSize.value = size;
        getList();
      }

      // 操作函数
      const getList = async () => {
        console.log('获取公司列表');
        try {
          state.loading = true;
          const newData: PageInfo = {
            page: page.value,
            pageSize: pageSize.value,
          };
          const result: CompanyPageResult = await findCompanyList(newData);
          data.value = result.list;
          total.value = result.total;
        } catch (error) {
          console.log(error);
        } finally {
          state.loading = false;
        }
      };

      onMounted(() => {
        // getList();
      });

      return {
        companyColumns,
        data,
        loading,
        paginationProp,
        getList,
      };
    },
  });
</script>
