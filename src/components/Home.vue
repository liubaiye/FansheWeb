<template>
  <div class="body-contair">
    <el-carousel height="650px" arrow="hover" class="swripe">
      <el-carousel-item v-for="(item,index) in carouselItem" :key="index" >
        <img :src='setImg(item.path)' style="width:100%;" />
      </el-carousel-item>
    </el-carousel>
    <div class="index-center-title text-center">
      <img src="../../static/new/index2.png" />
    </div>
    <el-row :gutter="30">
      <el-col :span="8" class="business-item" v-for="(item,index) in mainBusiness" :key="index">
        <el-col :span="24">
          <img :src='setImg(item.path)' />
        </el-col>
        <el-col :span="24">                       
          <h2 style="color:#00324e;">{{item.title}}<span class="more" @click="goMore(item.more)">More</span></h2>
          <template v-if="index==0">     
            <ul class="index-news">
              <li class="ellipsis-1">
                 这家酒店要进军时尚界！梵境艺术酒店—轻奢居空间
              </li>
              <li class="ellipsis-1">
                 凡舍承诺投资者承诺“既能有情怀，又能赚大钱”
              </li>
              <li class="ellipsis-1">
                 一家极高投资性价比的酒店：中端投资
              </li>
            </ul>
          </template>
          <template v-else-if="index==1">    
            <p> 
            <b>直营型加盟模式：</b><br/>
            省去管理烦恼、分享凡舍高效的运营体系。<br/>
            <b>托管型加盟模式：</b><br/>
            只需投入资金，享受稳定的收益回报，及订制化的VIP特权服务。
            </p>
          </template>
           <template v-else>     
            <p>{{item.descrip}}</p>
          </template>
        </el-col>
      </el-col>
    </el-row>
    <el-row class="logo-group">
      <el-col :span="12">
          <h3>凡舍资管集团旗下品牌</h3>
      </el-col>
      <el-col :span="12">
          <h2 class="text-right">加盟热线：4008-618-108</h2>
      </el-col>
      <el-col :span="24" class="box">
           <el-col :span="5" class="text-center" :offset="2">
             <img src="../../static/new/001_21.png"/>
      </el-col>
       <el-col :span="5" class="text-center">
        <img src="../../static/new/002_22.png"/>
      </el-col>
       <el-col :span="5" class="text-center">
        <img src="../../static/new/003_22.png"/>
      </el-col>
       <el-col :span="5" class="text-center">
        <img src="../../static/new/004_24.png"/>
      </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data: function () {
      return {
        mainBusiness: [{
          path: '1_07.jpg',
          title: '凡舍资讯',
          descrip: '以“梵界”品牌，包含存量不动产招商租赁、存量不动产基金、存量不动产交易等业务',
          more:'NewList'
        }, {
          path: '2_07.jpg',
          title: '合作加盟',
          descrip: '包含两个“梵”系列品牌：“梵境”品牌民宿式酒店、“梵舍”品牌服务式公寓。',
          more:'Operation'
        }, {
          path: '3_07.jpg',
          title: '产品服务',
          descrip: '让每个住客在这里留下和分享他们的故事；让来自不同城市的陌生人，在凡舍因未知而相知、相识，因陌生而不再陌生。',
          more:'Servers'
        }],
        carouselItem: [{
          path: 'b1.jpg'
        }, {
          path: 'b2.jpg'
        }, {
          path: 'b3.jpg'
        }, {
          path: 'b4.jpg'
        }, {
          path: 'b5.jpg'
        }]
      }
    },
    methods: {
      goMore(val){
        this.$router.push({path:`/${val}`})
      },
      setImg: function (val) {
        return '../../static/images/' + val
      }
    },
    computed: {

    },
    mounted: function () {

    },
  }

</script>
