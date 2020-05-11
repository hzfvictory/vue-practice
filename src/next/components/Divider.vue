<template>
    <div class="divider" :style="obj">
    </div>
</template>

<script>
  import {
    getCurrentInstance,
    inject
  } from 'vue'

  export default {
    name: "",
    setup() {
      const {ctx} = getCurrentInstance();
      const sty = inject('p');

      return {
        sty,
        obj: {
          padding: `${sty}px`,
          borderBottom: "1px solid #dcdcdc"
        }
      }
    },
    props: ['p'],
  }
</script>

<style scoped>
    .divider:after {
        content: '▲';
        float: right;
    }
</style>