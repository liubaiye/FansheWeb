<template>
  <div class="body-contair about">
  <div class="title">
   
    </div>
    <el-row>
      <el-col :span="24">
        <img src="../../../static/images/h1_03.jpg" style="width:100%;" />
      </el-col>
    </el-row>
    <div class="opera text-center" style="margin-top:30px;">
      <div class="opera-tit">
        <img src="../../../static/new/02.jpg"/>
      </div>
      <div class="opera-liu">
        <img src="../../../static/new/03.jpg"/>
      </div>
    </div>
    <div class="opera text-center">
      <div class="opera-tit">
        <img src="../../../static/new/04.jpg"/>
      </div>
      <div class="opera-liu">
        <img src="../../../static/new/05.jpg"/>
      </div>
    </div>
    <div class="opera text-center">
      <div class="opera-tit">
        <img src="../../../static/new/06.jpg"/>
      </div>
      <div class="opera-liu">
        <img src="../../../static/new/07.jpg"/>
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
        self.setIndex('kmms')
      }
      // this.router.push({ name: 'user', params: { userId: 123 }})
      // debugger

    },
  }

</script>
<style scoped>
  .rotate-90 {
    transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    /* IE 9 */
    -moz-transform: rotate(270deg);
    /* Firefox */
    -webkit-transform: rotate(270deg);
    /* Safari 和 Chrome */
    -o-transform: rotate(270deg);
    /* Opera */
  }

</style>
