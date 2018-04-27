<template>
  <div id="app">
    <el-container>
      <el-header height="180px" class="head" :class="fixed ? 'fixed':''">
        <div class="head-contair before">
          <el-row class="head-row">
            <el-col :span="4" class="before" style="height:115px;padding-bottom:10px;">
              <img src="../static/images/logo_03.png" class="logo" />
            </el-col>
            <el-col :span="20">
              <el-col :span="24" class="before middle-nav">
                <nav class="nav-list">
                  <el-menu :default-active="activeIndex" router text-color="#4c4948" mode="horizontal" @select="handleSelect" class="before-nav">
                    <el-menu-item index="/" route="/">
                      <span slot="title" class="title-index">首页</span>
                    </el-menu-item>
                    <el-submenu :index="item.index" v-for="(item,index) in navItem" :key="index" >
                      <template slot="title">{{item.title}}</template>
                      <el-menu-item :index="menu.index" v-for="(menu,index) in item.data" :key="index" class="el-menu-demo" :route="{path:item.routes}">
                        <span>{{menu.title}}</span>
                      </el-menu-item>
                    </el-submenu>
                  </el-menu>
                </nav>
              </el-col>
              <!-- <el-col :span="4" class="before middle-nav">
                <img src="../static/images/phone_03.png" class="tel-phone" />
              </el-col> -->
            </el-col>
          </el-row>
          <div class="icon-group">
            <el-popover placement="bottom" popper-class="text-center" trigger="hover">
              <img src="../static/images/wx_13.jpg" />
              <p class="text-center">遇见凡舍微信公众号</p>
              <span slot="reference" class="wechat" style="margin-right:35px;"></span>
            </el-popover>
            <el-popover placement="bottom" trigger="hover" popper-class="text-center">
              <img src="../static/images/wx_13.jpg" />
              <p class="text-center">遇见凡舍新浪微博</p>
              <span slot="reference" class="weibo" style="margin-right:35px;"></span>
            </el-popover>
          </div>
        </div>
      </el-header>
      <el-main>
        <router-view :active-index="activeIndex" @setIndex="setIndex"/>
      </el-main>
      <el-footer>
        <div class="footer-contair text-center">
          Copyright 2017 Fanspace Hotels & Resorts. All rights reserved.
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import $ from 'jquery'
  export default {
    name: 'App',
    data () {
      return {
        activeIndex: '1',
        navItem: [{
          index: '2',
          title: '关于凡舍',
          routes:'/About',
          data: [{
            index: 'gsjs',
            title: '公司介绍'
          }, {
            index: 'cstd',
            title: '创始人介绍'
          }, {
            index: 'fzlc',
            title: '发展历史'
          }, {
            index: 'zzjg',
            title: '组织架构'
          }, {
            index: 'yjsm',
            title: '愿景使命'
          }, {
            index: 'fszx',
            title: '凡舍资讯'
          }]
        }, {
          index: '3',
          title: '业务版块 ',
          routes:'/MainBusinessSection',
          data: [{
            index: 'bdczs',
            title: '商业招商'
          }, {
            index: 'kjyy',
            title: '空间运营'
          }, {
            index: 'gzsj',
            title: '改造设计'
          }]
        }, {
          index: '5',
          title: '合作加盟 ',
           routes:'/Operation',
          data: [{
            index: 'kmms',
            title: '加盟模式'
          }, {
            index: 'jmtj',
            title: '加盟条件'
          }, {
            index: 'jmlc',
            title: '加盟流程'
          }]
        }],
        fixed:false
      }
    },
    methods: {
      setIndex(val){
        this.activeIndex = val
      },
      handleSelect(index) {
        this.activeIndex = index
         let self = this
        
        if(index == 'bdczs'){
          $('body').animate({"scrollTop":100})
        }else if(index == 'kjyy'){
          $('body').animate({"scrollTop":1100})
        }else if(index == 'gzsj'){
          $('body').animate({"scrollTop":1500})
        }else if(index == 'ycznhxt'){
          $('body').animate({"scrollTop":400})
        }else if(index == 'jyshygl'){
          $('body').animate({"scrollTop":1100})
        }else if(index == 'zkhdpt'){
          $('body').animate({"scrollTop":1800})
        }else if(index == 'ksIO'){
          $('body').animate({"scrollTop":2500})
        }else if(index == 'kmms'){
          $('body').animate({"scrollTop":800})
        }else if(index == 'jmtj'){
          $('body').animate({"scrollTop":1800})
        }else if(index == 'jmlc'){
          $('body').animate({"scrollTop":2300})
        }else if(index == 'lxwm'){
            
          $('body').animate({"scrollTop":2500})
        }
      },
      scrollHead(){
        let top = $('body').scrollTop()
        // if(top>180){
        //   this.fixed = true
        // }else{
        //   this.fixed = false
        // }
      }
    },
    mounted(){
      let self = this
       $('body').scroll(function(){
         self.scrollHead()
       })
  

    }
  }

</script>
