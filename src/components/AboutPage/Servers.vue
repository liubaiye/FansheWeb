<template>
  <div class="body-contair about">
    <div class="title">

    </div>
    <div style="padding:40px 0 0 0" class="gsjs">
      <div class="main-box">
        <div class="text-center secend-ab-right fl" style="height:500px;width:805px;">
          <img src="../../../static/images/s1_03.jpg" style="width:100%;" />
        </div>
        <div class="text-center secend-ab fr before" style="height:500px;width:375px;">
          <div style="padding:0 23px;" class="middle">
            <div class="secend-title">远程智能化系统</div>
            <p>凡舍是您的商旅助理，</p>
            <p>从预订、提醒、接送、租车、票务、旅游，无论IPAD、手机还是电脑，</p>
            <p>只需要轻轻Touch，</p>
            <p>便能开启轻松自在的凡舍之旅。</p>
          </div>
        </div>
      </div>
      <div class="main-box">
        <div class="text-center secend-ab fl before" style="height:500px;width:375px;">
          <div style="padding:0 23px;" class="middle">
            <div class="secend-title">记忆式会员管理</div>
            <p>实行会员资料联网管理，</p>
            <p>记录会员的入住情况、习惯和喜好，</p>
            <p>实时更新与会员进行各种活动，</p>
            <p>想您所想，提供一个旅居的家。</p>
            <p>不同的城市，感受着同样的亲切和熟悉。</p>
          </div>
        </div>
        <div class="text-center secend-ab-right fr" style="height:500px;width:805px;">
          <img src="../../../static/new/s2_10.jpg" style="width:100%;" />
        </div>
      </div>
      <div class="main-box">
        <div class="text-center secend-ab-right fl" style="height:500px;width:805px;">
          <img src="../../../static/new/s3_13.jpg" style="width:100%;height:100%;" />
        </div>
        <div class="text-center secend-ab fr before" style="height:500px;width:375px;">
          <div style="padding:0 23px;" class="middle">
            <div class="secend-title">记忆式会员管理</div>
            <p>实行会员资料联网管理，</p>
            <p>记录会员的入住情况、习惯和喜好，</p>
            <p>实时更新与会员进行各种活动，</p>
            <p>想您所想，提供一个旅居的家。</p>
            <p>不同的城市，感受着同样的亲切和熟悉。</p>
          </div>
        </div>
      </div>
      <div class="main-box">

        <div class="text-center secend-ab fl before" style="height:500px;width:375px;">
          <div style="padding:0 23px;" class="middle">
            <div class="secend-title">无人酒店，刷脸入住</div>
            <p>在凡舍，办理入住的时间仅为2分钟；</p>
            <p>在凡舍，您完全可以无需等待繁琐的退房手续；</p>
            <p>您的会员卡是您专属的房卡</p>
            <p>直接可以用此开启客房的房门</p>

          </div>
        </div>
        <div class="text-center secend-ab-right fr" style="height:500px;width:805px;">
          <img src="../../../static/new/s4_17.jpg" style="width:100%;height:100%;" />
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
        self.setIndex('ycznhxt')
      }
      // this.router.push({ name: 'user', params: { userId: 123 }})
      // debugger

    },
  }

</script>
