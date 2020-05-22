<template>
    <div>
        <div>
            <h2>Vue2.0</h2>
            <button @click="add">addCount</button>
            <div>
                {{s}}
                <br/>
                count: {{count}}
                doubleCount:{{doubleCount}}
            </div>
        </div>

        <divider p='20'/>

        <div>
            <h2>Vue3.0</h2>


            <div>
                <h3>自定义hooks</h3>
                x:{{x}}
                y:{{y}}
                <div> x:{{pods.test1}}</div>
            </div>

            <div class="">
                <h3>reactive</h3>
                <span> {{state.msg}}</span>
            </div>

        </div>

        <divider p='20'/>

        <div>
            <h2>Vuex</h2>
            <button @click="commitAdd">add</button>

            {{ testCount}}
        </div>

        <divider p='20'/>
    </div>
</template>


<script>
  import {
    ref,
    reactive,
    computed,
    watch,
    getCurrentInstance,
    onBeforeMount,
    onMounted,
    isRef,
    provide,
    markRaw,
    readonly,
  } from 'vue'

  // import {useRoute, useRouter} from "vue-router"

  import {useMousePosition, useTest} from "../hooks/use-mouse"
  import Divider from "../components/Divider"


  export default {
    components: {
      Divider
    },
    setup() {
      const {ctx} = getCurrentInstance();
      provide('p', 20); // 父传子
      const count = ref(0);
      const state = reactive({
        msg: 'hi  这里是vue3的msg',
      });
      const foo = markRaw({
        nested: true
      });

      // 自定义的hooks
      const {x, y} = useMousePosition(); // 可以简写
      const pods = useTest();


      //观察属性
      watch(
        () => count.value,
        (curVal, preVal) => {
          console.log(curVal);
          // console.log(doubleCount);  // 返回的是一个响应式的ref对象

        },
        {
          lazy: true // 是否触发深度监听
        }
      );
      // 计算属性
      const doubleCount = computed(() => {
        return count.value * 2
      });
      // 计算属性 vuex
      const testCount = computed(() => {
        return ctx.$store.state.test.count
      });


      // 生命周期
      onMounted(() => {
        // console.log(x, pods);
        // console.log(isRef(test1));  // 判断是不是一个ref创建出来的对象
        // console.log(foo, '不使用proxy');
        // ctx.$store.dispatch('syncAdd');
      });

      onBeforeMount(() => {
        console.log(`%c created`, `color:#42b983`);
      });

      // methods
      const commitAdd = () => {
        ctx.$store.commit('add');
      };
      const add = () => {
        // count.value += 1;
        console.log(state.msg = state.msg + '1');
      };


      return {
        state,
        count,
        x, y,
        doubleCount,
        testCount,
        commitAdd,
        add,
        pods
      }
      // IDE扩展，该扩展基于在中声明的变量自动生成return语句 setup()
      // Babel插件隐式生成并插入return语句
    },
    data() {
      return {
        s: 111,
        msg: '我是vue2的msg',
      }
    },
    watch: {
      count(newVal, oldVal) {
        // console.log(newVal, oldVal);
      }
    },
    mounted() {
      // 获取路由的信息
      // console.log(this.$route);
      // console.log(this.$router);
      // console.log(getCurrentInstance().ctx.$router.currentRoute.value);
      // console.log(getCurrentInstance());
      // console.log(111, 'onMounted');
    },
    methods: {
      // add() {
      //   // this.count += 1;
      //   this.msg += 1;
      //   // console.log(this.$store);
      // }
    },
  }
</script>

<style scoped type="text/scss" lang="scss">
    .row-flex {
        display: flex;

        h3 {
            margin: 0;
            padding: 0;
            width: 100px;
            flex-shrink: 0;
        }
    }
</style>


<!--

// 记笔记

// watch监测多个
watch(
[
  () => state.msg,
  () => count.value,
],
([a, b], [c, d]) => {
  console.log(a, b, c, d);
  // console.log(doubleCount);  // 返回的是一个响应式的ref对象

},
{
  lazy: true // 是否触发深度监听
}
);
// 非对象慎用解构
proxy针对的是对象，如果reactive里面有不是对象类型的 ， 不能使用解构，数据监测不到了就，可以使用toRefs()转化为ref的对象格式。 {value:'xxx'}

-->