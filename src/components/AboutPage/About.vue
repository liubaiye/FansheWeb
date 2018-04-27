<template>
  <div class="body-contair about">
    <template v-if="activeIndex=='gsjs'">
      <div class="title">

      </div>
      <div class="banner-gsjs text-center">
        <img src="../../../static/images/center.jpg">
      </div>
      <div style="padding:50px 0 0 0" class="gsjs">
        <div class="main-box">
          <div class="text-center secend-ab-right fl" style="height:350px;width:786px;">
            <img src="../../../static/images/gy01_19.jpg" style="width:100%;height:100%;" />
          </div>
          <div class="text-center secend-ab fr before" style="height:350px;width:400px;">
            <div style="padding:0 15px;" class="middle">
              <div class="secend-title">公司介绍</div>

              <p>凡舍资管集团总部位于上海，</p>
              <p>下设商业招商、空间运营、设计改造三大事业部。</p>
              <p>下设华中、华东、西南、华南和华北五个区域公司，</p>
              <p>分别负责每个区域的市场开拓及售后服务，</p>
              <p>并由区域公司管理各个区域所辖的城市分公司。</p>
            </div>
          </div>
        </div>
        <!-- <div class="box">
            <img rc="../../../static/images/gy01_19.jpg"/>
        </div> -->
        <el-row :gutter="20">
          <el-col :span="8" style="width">
            <img src="../../../static/images/ab01_35.jpg" />
          </el-col>
          <el-col :span="8" class="text-center secend-ab" style="width: 33.33333%;height:660px; background-color:transparent">
            <div class="mian-ab" style=" background-color: #fff;">
              <div class="secend-title">定位目标</div>
              <p>个性化住宿的空间运营商</p>
              <p>存量不动产管理领域的综合服务商</p>
              <p>开创高品质、富有轻奢感的新“居”文化</p>
            </div>
            <div style="background-color:#e5e5e5;" class="mian-ab">
              <div class="secend-title">企业战略</div>
              <p>从消费者需求出发，</p>
              <p>打造商业招商、空间运营、设计改造三大业务版块，</p>
              <p>构建凡舍资管集团独一无二的轻奢新“居”文化相关的体验式消费，</p>
              <p>形成业务生态圈。</p>
            </div>
          </el-col>
          <el-col :span="8">
            <img src="../../../static/images/ab02_37.jpg" />
          </el-col>
        </el-row>
        <div class="main-box">
          <div class="text-center secend-ab fl before" style="width:393px;height:335px;">
            <div style="padding:0 23px;" class="middle">
              <div class="secend-title">核心优势</div>
              <p>抓住存量房产最富增值空间的部分：</p>
              <p>运营升级、系统升级，</p>
              <p>并以四大版块的业务闭环延展服务，</p>
              <p> 赋予附加价值。</p>
            </div>
          </div>
          <div class="text-center secend-ab-right fr" style="width:790px;height:335px;">
            <img src="../../../static/images/ab03_51.jpg" style="width:100%;height:100%" />
          </div>
        </div>
        <!-- <div class="main-box">
          <div class="text-center secend-ab-right fl" style="height:460px;width:805px;">
            <img src="../../../static/images/s4_29.jpg" style="width:100%;height:100%;" />
          </div>
          <div class="text-center secend-ab fr before" style="height:460px;width:375px;">
            <div style="padding:0 23px;" class="middle">
              <div class="secend-title">空间运营模式</div>
              <p>专注于个性化住宿领域的存量物业升级</p>
              <p>强调时尚个性化的设计</p>
              <p>以及互联网和物联网的智能化科技管理</p>
              <p>与其它消费升级业态达成战略合作</p>
              <p>形成FANSPACE空间的“内容生态圈”。</p>
            </div>
          </div>
        </div> -->

      </div>
    </template>
    <template v-if="activeIndex=='fzlc'">

      <div style="padding:40px 0 0 0" class="gsjs">

        <div class="title" style="font-size:24px;">
          凡舍资管集团发展历史
        </div>

        <div class="detail-ls text-center">
          凡舍集团是中国城市地产民宿品类和民宿式酒店品类的开创者，是以住宿业态运营为核心的存量不动产管理运营商
          <br/> 这里需要一段概述不是简单的一行字，起码要三行文字吧，可是文字我找谁写呢？吧啦吧啦
          <br/> 是以住宿业态运营为核心的存量不动产管理运营商这里需要一段概述不是简单的一行字，起码要三行文字吧

        </div>
        <div class="time-line">
          <div class="roll-twice before top big">
            <b class="roll-in"></b>
          </div>
          <div class="smaller s01">
            <div class="card lefts">
              <h3>2015年06月</h3>
              <p>四位创始人出资1000万成立凡舍资产管理集团</p>
              <p>开创中国城市民宿品类</p>
              <p>第一套城市民宿于上海诞生</p>
            </div>
          </div>
          <div class="smaller s02">
            <div class="card rights">
              <h3>2016年04月</h3>
              <p>被中国饭店协会评为“2016年上海最受欢迎民宿品牌”</p>
              <img src="../../../static/images/time02.jpg"/>
              
            </div>
          </div>
          <div class="smaller s03">
            <div class="card lefts">
              <h3>2016年06月</h3>
              <p>以众筹方式打造20套精品城市民宿，30分钟内被认购一空</p>
              <img src="../../../static/images/time03_24.jpg"/>
            </div>
          </div>
           <div class="smaller s04">
            <div class="card rights">
              <h3>2016年09月</h3>
              <p>与上海交大联合创立梵舍民宿培训学院，业内一举爆红</p>
              <img src="../../../static/images/time04_27.jpg"/>
            </div>
          </div>
           <div class="smaller s05">
            <div class="card lefts">
              <h3>2016年12月</h3>
              <p>运营城市民宿50套，入住率实现85%，单店利润率达到50%</p>
            </div>
          </div>
           <div class="smaller s06">
            <div class="card rights">
              <h3>2017年02月</h3>
              <p>由凡舍打造的城市民宿被评为“最受欢迎城市样板间”</p>
            </div>
          </div>
          <div class="smaller s07">
            <div class="card lefts">
              <h3>2017年04月</h3>
              <p>梵舍服务式公寓品牌正式投入运营</p>
            </div>
          </div>
          <div class="smaller s08">
            <div class="card rights">
              <h3>2017年05月</h3>
              <p>东部、中部区域公司相继成立</p>
            </div>
          </div>
          <div class="smaller s09">
            <div class="card lefts">
              <h3>2017年06月</h3>
              <p>梵境民宿式酒店品牌正式投入运营</p>
              <img src="../../../static/images/time05_30.jpg"/>
            </div>
          </div>
          <div class="roll-twice before bottom big">
            <b class="roll-in"></b>
            <abbr> <img src="../../../static/images/0.jpg"/></abbr>
            <div class="contairs">
              <h3>未来</h3>
              <p>更多精彩，敬请期待……</p>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else-if="activeIndex=='zzjg'">
      <div class="title">

      </div>
      <div style="width:942px;margin:0 auto;font-size:0; text-align: center">
        <img src="../../../static/images/zzjg_03.jpg" />
        <img src="../../../static/images/zzjg1_10.jpg" style="margin-top:80px;" />
      </div>
    </template>
    <template v-else-if="activeIndex=='cstd'">
      <div class="title">

      </div>
      <div style="width:940px;font-size:0; text-align: center;margin:0 auto;">
        <el-row :gutter="20" style=" background-color: #fff;">
          <el-col :span="8" v-for="(item,index) in manageTeam" :key="index" class="manage-team">
            <img :src="`../../../static/images/${item.photo}`" style="width:100%;" />
            <div class="name-box">
              <h3>{{item.name}}</h3>
              <p>{{item.text}}</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </template>
    <template v-else-if="activeIndex=='yjsm'">
      <div class="title">

      </div>

      <div>
        <img src="../../../static/images/yjsm.jpg" style="width:100%;" />
      </div>
      <div class="yj-box">
        <div class="before lefts fl">
          <p>我们的愿景是</p>
          <p>成为国内商业存量不动产交易、招商、改造和运营的领跑者。以下都是假的字体需要多写一些内容撑的丰满一些，文字内容都是复制奥美广告公司的内容建设优势品牌并使之传承百世。我们帮助国内外的客户销售他们的产品，在日益碎片化和愈加喧闹的数字化世界中，让其品牌有所作为。
          </p>
          <p>通过big idea， 我们能够定位品牌的市场目标。而对于创意和实效“双峰”的坚持，确保了每一场营销战的创造力和有效性。此外，我们还拥有整合营销的专利工具——FUSION，它能够帮助客户的品牌在复杂多变的市场中有效穿行。
          </p>
        </div>
        <div class="fr text-center rights">
          <img src="../../../static/images/r1_08.jpg" />
        </div>
      </div>
      <div class="yj-last">

        <div class="fl text-center rights" style="width:340px;">
          <img src="../../../static/images/ls_14.jpg" />
        </div>
        <div class="before lefts fl">
          <div class="inline-block middle">
            <p>我们的文化</p>
            <p>凡舍，不止于宿。以下都是假的字体需要多写一些内容撑的丰满一些，文字内容都是复制奥美广告公司的内容，我们的使命是让客户的事业风生水起，为此将凝聚全部业务单元的力量，不断创造有推动力的项目和营销案例。当行业发生变革时，我们也随之转换思维，利用创意、创新和深度调研来促进客户的收益，
              让营销活动助力于品牌发展。
            </p>
            <p>我们将此视为第一要务。奥美相信：只有员工时刻保持高涨的士气，并精益求精，才能保证给予客户优质的服务
            </p>
          </div>
        </div>
      </div>
    </template>
    <new-list v-else-if="activeIndex=='fszx'"></new-list>
  </div>

</template>

<script>
  import NewList from './NewList'
  export default {
    name: 'about',
    components: {
      NewList
    },
    props: {
      activeIndex: {
        type: String
      }
    },
    data: function () {
      return {
        manageTeam: [{
          photo: 't001_03.jpg',
          name: '范晓剑丨James',
          text: '凡舍集团创始人&CEO，中国城市民宿品类开创者，分散式酒店管理体系首创者。同济大学建筑学硕士，上海交通大学EMBA，国家一级注册建筑师，建筑领域十余年从业经验，拥有广泛的地产行业人脉资源。'
        }, {
          photo: 't002_05.jpg',
          name: '刘轶鹏丨Sean',
          text: '集团联合创始人之一，负责凡舍集团物业评估及开发、项目管理及投资业务。哈尔滨工业大学建筑学硕士，曾担任国内一线地产公司资深项目经理，资深房产研究专家，擅长挖掘和提升存量物业的潜在价值。'
        }, {
          photo: 't003_07.jpg',
          name: '石 一丨Einstein',
          text: '集团联合创始人之一，负责凡舍集团技术研发及智能科技业务。同济大学电子工程学硕士，曾担任Honeywell智能楼宇事业部研发总监、Schneider系统集成研发项目经理，智能楼宇及智慧城市领域专家。'
        }, {
          photo: 't1_29.jpg',
          name: '王 冲丨Rick',
          text: '集团联合创始人之一，负责凡舍集团服务运营及培训业务，并担任梵舍培训学院院长。同济大学理学硕士，曾任500强美资制造型企业华东区培训总监，资深课程开发专家、国内顶级培训师，擅长课程开发及实施。'
        }, {
          photo: 'team_27.jpg',

          text: '五位创始人出资1000万成立凡舍资产管理集团。开创中国城市民宿品类。第一套城市民宿于上海诞生，从此便开启了他们的精彩故事……'
        }, {
          photo: 'tema_27.jpg',
          name: '张凤春丨Ralap',
          text: '烟台大学建筑学学士，曾任职于多家知名设计公司，资深商业及住宅地产设计师，原为上海乐舒主题SPA养生品牌创始人。擅长商业设计，品牌打造及运营。'
        }]
      }
    },
    methods: {
      setImg(val) {
        return '../../static/images/' + val
      },
      setIndex(val) {
        this.$emit('setIndex', val)
      }
    },
    computed: {

    },
    mounted() {
      let self = this
      let newPath = this.$route.path
      //  debugger
      if (self.activeIndex == '1') {

        self.$router.push({
          path: newPath
        })
        self.setIndex('gsjs')
      }
      // this.router.push({ name: 'user', params: { userId: 123 }})
      // debugger

    },
  }

</script>
<style scoped>
  .detail-ls {
    text-align: center;
    font-size: 20px;
    font-family: 'pingfangmediu';
    color: #595757;

    line-height: 42px;
  }

  .yj-last {
    width: 100%;
    height: 350px;
    background-color: #dcdcdc;
    margin-top: 25px;
  }

  .yj-last .lefts {
    width: 755px;
    height: 100%;

  }

  .manage-team {
    height: 700px;
    overflow: hidden;
    margin-top: 20px;

  }

  .banner-gsjs {
    width: 100%;
    height: 400px;
    background-color: #020205;
  }

  .name-box {
    height: calc(100% - 400px);
  }

  .yj-last .lefts p {
    font-family: "pingfangmediu";
    line-height: 32px;
    font-size: 16px;

  }

  .yj-box {
    overflow: hidden;
  }

  .yj-box .lefts {
    width: 795px;
  }

  .yj-box .lefts p {
    font-family: "pingfangmediu";
    line-height: 32px;
    font-size: 16px;
    padding: 15px 0;
  }

  .rights {
    width: 400px;
  }

</style>
