<template>
    <div id="app">
        <el-container style="height: 100vh">
            <el-aside width="170px" style="background-color: #191a23">
                <el-menu
                        :default-active="activeMenu"
                        class="el-menu-vertical-demo"
                        background-color="#191a23"
                        text-color="#fff"
                        router
                        active-text-color="#ffd04b">

                    <el-menu-item/>

                    <el-menu-item index="/wel">
                        <i class="el-icon-document"/>
                        <span slot="title">欢迎页</span>
                    </el-menu-item>

                    <el-menu-item index="/home">
                        <i class="el-icon-menu"/>
                        <span slot="title">首页</span>
                    </el-menu-item>
                    <el-menu-item index="/test">
                        <i class="el-icon-goods"/>
                        <span slot="title">table-temp</span>
                    </el-menu-item>
                    <el-menu-item index="/table-list">
                        <i class="el-icon-user"/>
                        <span slot="title">table-jsx</span>
                    </el-menu-item>


                </el-menu>

            </el-aside>
            <el-container>
                <el-header>
                    <el-dropdown>
                        <i class="el-icon-setting" style="margin-right: 15px;color:#fff;cursor: pointer"/>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>查看</el-dropdown-item>
                            <el-dropdown-item>新增</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span>王老虎</span>
                </el-header>

                <!--                <div @click="changeStore">-->
                <!--                    {{includes}}-->
                <!--                </div>-->
                <!--                <div @click="changeStore2">-->
                <!--                    {{includes}}-->
                <!--                </div>-->

                <!-- <el-main>-->
                <!--有一些需要缓存，有一些不需要缓存-->

                <!--                {{activeMenu}}-->

                <transition enter-active-class="animated zoomInLeft" leave-active-class="animated zoomOutRight">
                    <keep-alive>
                        <router-view v-if="$route.meta.keepAlive">
                        </router-view>
                    </keep-alive>
                </transition>
                <transition enter-active-class="animated zoomInLeft" leave-active-class="animated zoomOutRight">
                    <router-view v-if="!$route.meta.keepAlive">
                    </router-view>
                </transition>

                <!--                {{includes}}-->
                <!--                <keep-alive :include="includes" exclude="" :max="10">-->
                <!--                    <router-view/>-->
                <!--                </keep-alive>-->

            </el-container>
        </el-container>
    </div>
</template>

<script>
  import {mapState, mapGetters} from 'vuex'

  export default {
    name: 'app',
    created() {
    },

    computed: {
      activeMenu() {
        return this.$route.path
      },
      ...mapGetters(['getRouter']),
      ...mapState({
        num: state => state.router.list,
        includes: state => state.router.includes,
      }),

    },
    methods: {
      changeStore() {
        this.$store.dispatch('changeList', '222');
      },
      changeStore2() {
        this.$store.dispatch('changeList', 'tableLists');
      }
    }
  }
</script>

<style type="text/scss">

    .el-header {
        text-align: right;
        font-size: 12px;
        background-color: #191a23;
        color: #fff;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }

    .el-menu {
        border: 0 !important;
    }
</style>