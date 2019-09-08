<template>
  <div class="tabinfo">
    <ul class="title">
      <li v-for="(item,index) of tabinfo" 
      @click="active(index)" :key="index" :class="{active:flag==index}">
      {{ item }}
      </li>
    </ul>
    <span class="more">更多></span>
  </div>
</template>

<script>
export default {
    name:'',
    data:function(){
      return {flag:0,tabinfo:['今日特惠','特惠门票','特惠一日游']}
    },
    methods:{
      active(index){      
        this.flag=index;
      }
    }
}
</script>

<style>
  .tabinfo{
    height: .48rem;
    padding-left: .1rem;
  }
  .title>li{
    float: left;
    margin-right: .1rem;
    padding: .05rem;
    font-size: .27rem;
    color: #666;
    height: .48rem;
    line-height: .48rem;
    border: 1px solid #d7d7d7;
    border-radius: 3px;
  }
  .title>.active{
    color: #fff;
    background-color: #17c0c8;
    border: 1px solid #17c0c8;
  }
  .more{
    float: right;
    margin-right: .19rem;
    font-size: .28rem;
    height: .48rem;
    margin-top: .05rem;
    line-height: .48rem;
  }
</style>