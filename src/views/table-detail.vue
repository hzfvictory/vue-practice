<template>
    <div>
        <div v-for="(item,index) of 150" :key="index" @click="jumpList">
            {{item}}
        </div>
    </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
        ary: [...new Array(150).keys()]
      }
    },
    methods: {
      jumpList() {
        this.$router.push("/table-list")
      }
    }
  }
</script>

<style scoped>

</style>