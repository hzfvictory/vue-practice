<template>
    <h2 @click="add">
        生命周期
    </h2>

    <span>{{count}}</span>
</template>

<script>
  import {
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
    onErrorCaptured,
    onRenderTracked,
    onRenderTriggered,
    ref,
    getCurrentInstance,
  } from "vue";


  export default {
    name: "",
    setup(props, context) {
      const {ctx} = getCurrentInstance();
      const count = ref(0);

      console.log("setup");
      onRenderTracked(() => {
        console.log("onRenderTracked");
      });
      onBeforeMount(() => {
        console.log("onBeforeMount");
      });
      onMounted(() => {
        console.log("onMounted");
      });

      onRenderTriggered((event) => {
        console.log('onRenderTriggered')
      });
      onBeforeUpdate(() => {
        console.log("onBeforeUpdate");
      });
      onUpdated(() => {
        console.log("onUpdated");
      });

      onBeforeUnmount(() => {
        console.log("beforeDestroy");
      });
      onUnmounted(() => {
        console.log("onUnmounted");
      });

      onErrorCaptured(() => {
        console.log("onErrorCaptured");
      });

      const add = () => {
        console.log(context);
        // ctx.$router.push("/next");


        count.value += 1
      };

      return {
        count,
        add
      }
    }
  }
</script>

<style scoped>

</style>