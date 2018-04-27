<template>
  <div class="body-contair about">
    <div class="title">
   
    </div>
    <div class="news-list">
      <ul>
        <li v-for="(item,index) in newSdata" :key="index">
          <div class="left-bar">
            <img :src="`../../../static/images/${item.photo}`" width="200" height="170" />
          </div>
          <div class="right-contair">
            <h3 @click="openDetail({
              father:activeIndex,
              qurey:item
            })">
              {{item.newsName}}
              <span class="more" >More</span>
            </h3>
            <p>
              <time>
                {{item.reportTime}}
              </time>
            </p>
            <p>
              <abbr class="ellipsis-2">
                   {{item.disction}}
              </abbr>
            </p>
            <p>
              <a href="#" @click="openDetail({
              father:activeIndex,
              qurey:item
            })">阅读全文</a>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div class="text-center">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="200"
      layout="prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'new-list',
    props: {
      activeIndex: {
        type: String
      }
    },
    data() {
      return {
         currentPage3: 15,
         newSdata:[
           {
             photo:'10_03.jpg',
             newsName:'进军时尚界！上海静安梵境酒店联手MUSEUN整合美学跨界',
             reportTime:'2017-11-30',
             disction:'8大美业品牌联手，打造美学跨界精品酒店在当晚的新品时尚秀上，上演了一场解放女性差旅负担的魔法秀，让“女人当男人用”的职场女性重新找回被“宠爱”的感觉，同时还为现场嘉宾提供特有的美学服务，让嘉宾在逛着时尚秀的同时顺便也美容了一番。整合合美学跨界资源，以及在跨界里玩得新鲜和创新的……',
             moreMeta:{
               id:''
             }
           },{
             photo:'n2_03.jpg',
             newsName:'突破酒店天花板 颠覆性打造Chanel式中档精品酒店品牌',
             reportTime:'2017-01-05',
             disction:'在核心理念一致性的情况下，凡舍对投资者宠爱有加。“既能有调性，又能赚大钱”。随着消费需求不断多元化，细分市场已经成为创业者的掘金圣地。其中，有部分人就瞄准了女性这个多变的物种，比如现在比较火的美柚、大姨妈以及闺蜜等都以自己的方式宠爱着她们。上面说的基本上是APP或是……',
             moreMeta:{
               id:''
             }
           },{
             photo:'n3_07.jpg',
             newsName:'2016年上海最受欢迎的民宿品牌',
             reportTime:'2016-04-18',
             disction:'精准而独特的品牌定位，别具话题性的营销推广以及颇具说服力，梵舍民宿在半年内迅速在酒店市场中，狠狠地刷出了自己的存在感。2016年4月18日，在国内酒店业门户网站——迈点网举办的2015年中国旅游住宿业创新品牌评比中，梵舍民宿凭借市场定位获得39.76%的支持，在数十个酒店品牌当中脱颖而出，跻身……',
             moreMeta:{
               id:''
             }
           },{
             photo:'n4_10.jpg',
             newsName:'梵舍民宿CEO范晓剑专访：凡舍，不止于宿',
             reportTime:'2015-12-27',
             disction:'做品牌的时候会陷入误区：定位了这个品牌，就意味着最终消费者群体只有这样的消费群体。近日，在上海揭开“梵境民宿式酒店”系列活动的大幕，多个品牌CEO已经积极回应。铂涛集团联席董事长兼首席品牌建构师郑南雁……',
             moreMeta:{
               id:''
             }
           }
         ]
      }
    },
    methods: {
      handleCurrentChange(val){

      },
      handleSizeChange(val){

      },
      openDetail(val){
          this.$cookies.set('data_title', val.qurey.newsName, 60 * 6) //将获取的文章信息存起来
          this.$cookies.set('data_time', val.qurey.reportTime, 60 * 6) //将获取的文章信息存起来
          this.$cookies.set('data_dis', val.qurey.disction, 60 * 6) //将获取的文章信息存起来
         this.$router.push({path:'/NewsDetail',query:{
           data:val
         }})
      },
      setImg(val) {

      },
      setIndex(val) {
        this.$emit('setIndex', val)
      }
    },
    computed:{
      setTitle(){
        if(this.activeIndex=='xwdt'){
          return '新闻动态'
        }else{
          return '品牌荣誉'
        }
      }
    },
    mounted() {
      let self = this
      let newPath = this.$route.path
      if (self.activeIndex == '1') {
        self.$router.push({
          path: newPath
        })
        self.setIndex('xwdt')
      }
    },
  }

</script>
<style scoped>
  .news-list {}

  .left-bar {
    float: left;
    margin-right: 90px;
  }

  .right-contair {
    float: right;
    width: calc(100% - 460px);
    border-bottom:1px solid #aaaaaa;

  }

  .news-list li {
    display: flex;
    width: 100%;
    margin-bottom: 70px;
  }

  .right-contair p {
    padding: 5px 0;
  }

  

  .right-contair p abbr {
    line-height: 35px;
  }

  .right-contair p a {
    color: #00324e;
       font-family: "pingfangmediu";
  }

  .right-contair p abbr,
  .right-contair p time
  {

    color: #595757;
    font-family: "pingfangmediu";
  }
span.more{
  font-size: 16px;
}
  .news-list li h3 {
    font-size: 24px;
    font-family: "pingfangmediu";
    color: #00324e;
    font-weight: normal;
    /* line-height: 48px; */
  }

</style>
