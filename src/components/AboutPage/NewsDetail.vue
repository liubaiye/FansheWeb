<template>
  <div class="body-contair about">
    <div class="source">
      您当前的位置：
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>
          <span @click.self.stop="routerGo" style="font-family: 'pingfangmediu'">{{setTitle}}</span>
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{artcilTit.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-card>
      <div class="newscontent">
        <h1 class="news_title">{{artcilTit.name}}</h1>
        <div class="news_about">
          <p>作者：凡舍集团</p>
          <p>
            {{artcilTit.time}}
            <span> 来源：凡舍</span>
          </p>

        </div>
        <div class="box-card">
          <div class="el-card__body">{{artcilTit.dis}}</div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'new-detail',
    props: {
      activeIndex: {
        type: String
      }
    },
    data() {
      return {

      }
    },
    methods: {
      routerGo() {
        this.$router.go(-1);
      },

      setIndex(val) {
        this.$emit('setIndex', val)
      }
    },
    computed: {
      setTitle() {
        if (this.activeIndex == 'xwdt') {
          return '新闻动态'
        } else {
          return '品牌荣誉'
        }
      },
      artcilTit() {
       
          return {
            name: this.$cookies.get('data_title'),
            time: this.$cookies.get('data_time'),
            dis: this.$cookies.get('data_dis')
          }
        }

    },
    beforeCreate() {

    },
    mounted() {
      let self = this
      let newPath = this.$route.path
      if (self.activeIndex == '1') {
        self.$router.push({
          path: newPath
        })
      }

    },
  }

</script>
<style scoped>
  .news_title {
    font-family: "pingfangmediu";
    line-height: 44px;
    margin: 28px 0 34px;
    color: #333333;
    font-size: 32px;
    font-weight: normal;
    text-align: center;
  }

  .news_about {
    position: relative;
    margin-bottom: 36px;
    height: 48px;
    text-align: center;
    border-top: 1px solid #dfdfdf;
  }

  .news_about p {
    line-height: 24px;
    color: #8e8e8e;
    font-size: 14px;
  }

  .newscontent {}

  .source {
    padding: 24px;
    font-family: "pingfangmediu";
    font-size: 14px;
  }

  .el-breadcrumb {
    font-family: "pingfangmediu";
    display: inline-block;
  }

</style>
