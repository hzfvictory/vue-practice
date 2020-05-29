<template>
    <!--    一定不能用v-show，这里跟我的项目有关-->
    <div v-if="isRouterAlive">
        <div>{{ddd}}</div>
        <input v-model="ddd" type="text" />
        <table-list ref="table" :multiple="true" :otherTableParams="otherTableParams" :tableColumn="column"/>
    </div>
</template>
<script>
  import TableList from "../components/TableList"

  export default {
    name: 'tableLists',
    data() {
      return {
        otherTableParams: { // table的参数
          props: {
            border: true,
            stripe: true,
            size: 'small',
            'default-sort': {prop: 'createTime', order: 'ascending'}
          },
          on: {}
        },
        otherPaginationParams: {},// 分页的参数
        column: [  // table的列
          {
            prop: "roleId",
            label: "序号",
            width: 100,
          },
          {
            prop: 'roleName',
            label: "角色名称",
            'width': "110"
          },
          {
            prop: "createTime",
            label: "创建时间",
            sortable: true
          },
          {
            prop: 'roleName',
            label: "角色名称",
            //formatter  完全可以用render代替
            // render: (text, record) => {
            // console.log(record);
            // return <el-progress percentage="50"/>
            // },
          },
          { // 最后的操作列，可根据list里面展示要操作的按钮，和回调
            type: 'button',
            width: '118',
            label: "设置",
            list: [
              {title: '查看', disabled: false, styles: {color: 'red'}, cb: this.seeHandle},
              {title: '编辑', cb: this.editHandle},
            ],
            // handleButtons: () => (<div>111</div>)  // 自定义的内容
          }
        ],
        hasFirst: true,
        isRouterAlive: true,
        ddd: ''

      }
    },
    components: {TableList},
    methods: {
      async queryList() { // 子组件默认的请求名称
        // 因为当前算是父组件，当执行到父组件的created周期才会执行它的子组件，所以这个时候子组件的data的一些方法获取不到，或者可以在mounted周期里面执行异步请求
        const {paginationOptions: {pageSize, currentPage}, handlePageData} = this.$refs.table; // 获取子组件mixins里面的参数
        const {data: {items, page: {totalRecord}}} = await this.$fetch(`http://123.57.68.113:8064/role?pageSize=${pageSize}&pageNum=${currentPage}`, {
          headers: {
            Authentication: "1f429c65169fefc181899718e8183726938a8f3b6e4c3a8e86b49a9fec73e9604f9a909dc284c3ae97f0f7982e9bfdc6a5ab8d1c63a543b59603b63fa8fea4424f9388adfce07284fb3113db202d75851a0a2cf8fe3471878da73c862a108a89aa7cbcda911ccb76f02178c82463573393443bf0d144ff00019f60b0064f402fbb774dce40644227"
          },
        });
        handlePageData(items, totalRecord); // mixin里面统一处理

      },
      editHandle(...options) {
        console.log(options, '编辑');
        this.$destroy()
      },
      seeHandle(...options) {
        let newpage = this.$router.resolve({
          name: 'messageInfo',
          path: 'home',
          query: {
            objectType: 1,
            infoId: 111
          }
        })
        // window.open(newpage.href, '_blank');
        console.log(options, '查看');
        this.$router.push('/table-detail')
      }
    },
    created() {
      console.log('我第一次进来');
      this.$nextTick(this.queryList);
    },
    mounted() {
      this.hasFirst = false
    },
    activated() {
      if (this.$route.meta.isRefresh) {
        const data = this.$options.data()
        delete data.column

        Object.assign(this.$data, data)
        this.isRouterAlive = false
        this.$nextTick(function () {
          window.scroll(0, 0)
          this.isRouterAlive = true
        })
        setTimeout(() => {
          this.queryList()
        })
      }
    },
    beforeRouteLeave(to, from, next) {
      from.meta.isRefresh = to.name !== 'table-detail';
      next()
    }
  }
</script>

<style type="text/scss" lang="scss" scoped>

</style>
