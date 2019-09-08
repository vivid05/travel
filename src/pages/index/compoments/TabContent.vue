<template>
<div>
    <div class="tabinfo">
    <ul class="title">
      <li v-for="(item,index) of tabinfo" 
      @click="active(index)" :key="index" :class="{active:flag==index}">
      {{ item }}
      </li>
    </ul>
    <span class="more">更多></span>
  </div>
  <div class="flex-box">
      <div v-for="item of List1" :key="item.id" class="conten-item">
          <div class="item-img">
              <img :src="item.url" alt="">
          </div>
          <p class="title">北京-贝加尔湖 5天跟团游</p>
          <p class="dec">一价全含贝加尔湖5天+奥利洪岛+利斯特小镇+4星+特色酒店+俄式餐饮+纯玩</p>
          <p class="price">¥5350<span class="start">起</span></p>
      </div>
  </div>
</div>
</template>

<script>
export default {
    name:'',
    data:function(){
        return {
            List1:[],flag:0,tabinfo:['今日特惠','特惠门票','特惠一日游']
        }
    },
    methods:{
        active(index){      
        this.flag=index;
        this.List1=this.List1==this.list.tralvalList1?this.list.tralvalList2:this.list.tralvalList1;
      }
    },
    props:['list'],
    watch:{
        list:function(newVal,oldVal){
        this.List1 = this.list.tralvalList2;
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
    .flex-box{
        width: 100%;       
        display: flex;
        justify-content:space-around;
        align-items:center;
        flex-wrap: wrap;
    }
    .conten-item{
        width: 49%;
    }
    .item-img{
        /* width: 97%;
        height: auto; */
        width: 100%;
        height: 0;
        padding-bottom: 56.25%;
        border-radius: .1rem;
        margin-top: .3rem;
        overflow: hidden;
    }
    .item-img>img{
        width: 100%;
        /* height: 110.09px; */
    }
    .conten-item>p{
       margin-left: .07rem; 
       color: #000;
       font-size: .3rem;
       white-space: nowrap;
       overflow: hidden;
       text-overflow: ellipsis;
       margin-top: .18rem;
    }
    .conten-item>.dec{
        color: #555;
        font-size: .29rem;
    }
    .conten-item>.price{
        color: #ff7400;
        font-size: .38rem;
    }
    .start{
        color: #ff7400;
        font-size: .3rem;
        margin-left: .1rem;
    }
</style>