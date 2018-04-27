<template>
  <div class="body-contair about">
    <div class="title">

    </div>
    <div style="padding:40px 0 0 0" class="gsjs">
      <div class="main-box">
        <div class="text-center secend-ab fl">
          <div style="padding:0 23px;">
            <div class="secend-title">商业招商事业部</div>
            <p>
              <b>不良资产处置：</b>
            </p>
            <p>主要针对大宗物业的交易转让，</p>
            <p>业务线定位针对B端市场渠道物业和针对PE端不良资产的处置，布局全国一二线城市的核心区域，</p>
            <p>包含商业不动产项目、住宅不动产项目、办公不动产项目</p>
            <p>以及不良资产拍卖项目。</p>
            <p>专注于城市的存量房交易领域，</p>
            <p>协助客户进行相关物业评估、改造咨询、产权交易，</p>
            <p>以及存量物业改造后的业态重置及运营管理。</p>
            <p>
              <b> 招商租赁：</b>
            </p>
            <p>主要针对市中心核心地段知名商业体和商圈提供招商服务，</p>
            <p>并针对商场存在的痛点提供和策划人气活动和IP内容的植入。</p>
            <p>长期以来本事业部拥有和积累了</p>
            <p>大量知名品牌商家和新型有调性的潮牌业态。</p>
          </div>
        </div>
        <div class="text-center secend-ab-right fr">
          <img src="../../../static/images/m1_03.jpg" style="width:100%;" />
        </div>
      </div>
      <div class="main-box">
        <div class="text-center secend-ab-right fl">
          <img src="../../../static/images/m2_07.jpg" style="width:100%;" />
        </div>
        <div class="text-center secend-ab fr before">
          <div style="padding:0 23px;" class="middle">
            <div class="secend-title">空间运营事业部</div>
            <p>对外输出梵舍公寓品牌和梵境酒店品牌的管理运营体系，</p>
            <p>包括品牌输出、咨询服务、培训服务、</p>
            <p>供应链体系、线上管理平台等。</p>
            <p>解决非标准化酒店和服务式公寓投资者的痛点需求，</p>
            <p>为其提供物业选址评估、产品定位及设计、云酒店管理系统、</p>
            <p>智能硬件系统、服务运营培训、</p>
            <p>采购及供应链等OTA平台不能提供的线上线下服务和运营环节。</p>

          </div>
        </div>
      </div>
      <div class="main-box">
        <div class="text-center secend-ab fl before">
          <div style="padding:0 23px;" class="middle">
            <div class="secend-title">设计改造事业部</div>
            <p>专注于城市改造更新项目，提供商业、公寓及酒店的室内空间和文化展示空间的设计咨询服务。</p>
            <p>通过重新规划定位和业态重置，</p>
            <p>充分的发掘出原有建筑的潜在价值，</p>
            <p>实现空间高效化、坪效提升化、内容时尚化。</p>
            <p>整合供应商及上下游厂商资源，</p>
            <p>提供围绕着住宿空间的时尚设计型家居，</p>
            <p>包含全屋家具、智能家居、创意家居、艺术IP衍生品等。</p>
          </div>
        </div>
        <div class="text-center secend-ab-right fr">
          <img src="../../../static/images/m3_10.jpg" style="width:100%;height:100%" />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'main-business-section',
    props: {
      activeIndex: {
        type: String
      }
    },
    data: function () {
      return {

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

    mounted() {
      let self = this
      let newPath = this.$route.path

      if (self.activeIndex == '1') {
        self.$router.push({
          path: newPath
        })
        self.setIndex('bdczs')
      }
      // this.router.push({ name: 'user', params: { userId: 123 }})
      // debugger

    },
  }

</script>
