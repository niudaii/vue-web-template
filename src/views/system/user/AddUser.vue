<template>
  <Button @click="visible = true" type="primary">添加用户</Button>
  <Modal
    title="添加用户"
    :visible="visible"
    :footer="null"
    :width="650"
    :destroyOnClose="true"
    @cancel="visible = false"
    style="top: 20px"
  >
    <BasicForm @register="registerForm" @submit="handleSubmit" style="margin-top: 20px" />
  </Modal>
</template>
<script lang="ts">
  import { defineComponent, ref, toRaw } from 'vue';
  import { Button, Modal } from 'ant-design-vue';
  import { useMessage } from '/@/hooks/web/useMessage';
  import BasicForm from '/@/components/Form/src/BasicForm.vue';
  import { useForm } from '/@/components/Form';
  import { addUserFormSchema } from '/@/views/system/user/data';
  import { createUser } from '/@/api/system/user';

  export default defineComponent({
    components: {
      BasicForm,
      Button,
      Modal,
    },
    setup() {
      const { createMessage } = useMessage();
      const visible = ref(false);
      const [registerForm] = useForm({
        schemas: addUserFormSchema,
        labelCol: { span: 4, offset: 0 },
        wrapperCol: { span: 16, offset: 0 },
        actionColOptions: { span: 20 },
        submitButtonOptions: {
          text: '确定',
        },
      });
      const handleSubmit = (values: any) => {
        console.log('添加用户');
        const data = toRaw(values);
        createUser(data);
        createMessage.success('添加成功');
        visible.value = false;
      };
      return {
        visible,
        registerForm,
        handleSubmit,
      };
    },
  });
</script>
<style lang="less" scoped></style>
