<template>
  <div class="rollup-ts-template">rollup-ts-template</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { Example } from 'rollup-ts-template';
export default defineComponent({
  name: 'App',
  setup() {
    onMounted(() => {
      console.log('mounted', Example);
    });
    return {};
  },
});
</script>
<style lang="less" scoped></style>
