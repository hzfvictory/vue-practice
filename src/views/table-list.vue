<template>
    <table-list ref="table" :multiple="true" :otherTableParams="otherTableParams" :tableColumn="column"
    />
</template>
<script>
  import TableList from "../components/TableList"

  export default {
    data() {
      return {
        otherTableParams: { // table的参数
          props: {
            border: true,
            stripe: true,
            size: 'small',
            'default-sort': {prop: 'createTime', order: 'ascending'}
          }
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
            render: (text, record) => {
              // console.log(record);
              return <h4>{text}</h4>
            },
          },
          { // 最后的操作列，可根据list里面展示要操作的按钮，和回调
            type: 'button',
            width: '118',
            label: "设置",
            list: [
              {title: '查看', disabled: false, styles: {color: '#777'}, cb: this.seeHandle},
              {title: '编辑', cb: this.editHandle}
            ],
            // handleButtons: () => (<div>111</div>)  // 自定义的内容
          }
        ]
      }
    },
    components: {TableList},
    methods: {
      queryList() { // 子组件默认的请求名称
        this.$nextTick(async () => {  // 因为当前算是父组件，当执行到父组件的created周期才会执行它的子组件，所以这个时候子组件的data的一些方法获取不到，或者可以在mounted周期里面执行异步请求
          const {paginationOptions: {pageSize, currentPage}, handlePageData} = this.$refs.table; // 获取子组件mixins里面的参数
          const {data: {items, page: {totalRecord}}} = await this.$fetch(`http://123.57.68.113:8064/role?pageSize=${pageSize}&pageNum=${currentPage}`, {
            headers: {
              Authentication: '1f429c65169fefc181899718e8183726938a8f3b6e4c3a8e86b49a9fec73e9604f9a909dc284c3ae97f0f7982e9bfdc6c7c9d455aea8a40bf53867de0575a07f4f9388adfce07284fb3113db202d75851a0a2cf8fe34718724f0b213fa01e2583d72c5e25c517fac326fdba3373cf9890fc98c0698711a436ee2793a19a8db909c0ad39c017ebb53'
            },
          });
          handlePageData(items, totalRecord); // mixin里面统一处理
        });
      },
      editHandle(...options) {
        console.log(options, '编辑');
      },
      seeHandle(...options) {
        console.log(options, '查看');
      }
    },
    created() {
      this.queryList();
    },
    mounted() {
    }
  }
</script>

<style type="text/scss" lang="scss" scoped>

</style>
