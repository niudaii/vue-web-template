<template>
  <Button @click="visible = true" type="primary">XXX</Button>
  <Modal>
    <Form />
  </Modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Button, Form, Modal } from 'ant-design-vue';

  export default defineComponent({
    components: {
      Button,
      Form,
      Modal,
    },
    setup() {
      const visible = ref(false);
      return {
        visible,
      };
    },
  });
</script>
<style lang="less" scoped></style>
