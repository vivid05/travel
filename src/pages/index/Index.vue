<template>
<div>
  <index-header></index-header>
  <Content></Content>
  <!-- <tab-info></tab-info> -->
  <tab-content :list="list"></tab-content>
  <swiper></swiper>
</div>
</template>

<script>
import IndexHeader from './compoments/IndexHeader'
import Content from './compoments/Content'
// import TabInfo from './compoments/TabInfo'
import TabContent from './compoments/TabContent'
import Swiper from './compoments/Swiper'
import axios from 'axios'
export default {
    name:'index',
    data:function(){
      return {list:[]}
    },
    components:{IndexHeader,Content,TabContent,Swiper},
    methods:{
      getList(){
        axios.get('api/home.json')
        .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res){
        this.list=(res.data);
        //console.log(this.list)
      }
    },
    mounted(){
      this.getList()
    }
}
</script>

<style>

</style>