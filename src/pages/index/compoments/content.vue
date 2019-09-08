<template>
<div>
    <div class="icon-large">
      <div class="icons">
            <img src="../../../../static/images/hotel.png" alt="">
            <span>酒店</span>
      </div>
      <div class="icons">
            <img src="../../../../static/images/flight.png" alt="">
            <span>机票</span>
      </div>
      <div class="icons">
            <img src="../../../../static/images/package.png" alt="">
            <span>度假</span>
      </div>
      <div class="icons">
            <img src="../../../../static/images/train.png" alt="">
            <span>火车票</span>
      </div>
      <router-link to="/Home" class="icons" tag="div"> 
            <img  src="../../../../static/images/piao.png" alt="">
            <span>景点门票</span>
      </router-link>     
  </div>
  <div class="icon-middle">
      <div class="icons">
            <img src="../../../../static/images/group.png" alt="">
            <span>特惠酒店</span>
      </div>
      <div class="icons">
            <img src="../../../../static/images/bargainflight.png" alt="">
            <span>低价机票</span>
      </div>
      <div class="icons">
            <img src="../../../../static/images/inn.png" alt="">
            <span>客栈</span>
      </div>
      <div class="icons">
            <img src="../../../../static/images/haiwai.png" alt="">
            <span>海外酒店</span>
      </div>
      <div class="icons">
            <img src="../../../../static/images/kezhan.png" alt="">
            <span>名宿</span>
      </div>
  </div>
  <div class="icon-small">
      <div class="icons">
            <img src="../../../../static/images/group.png" alt="">
            <span>特惠酒店</span>
      </div>
      <div class="icons">
            <img src="../../../../static/images/bargainflight.png" alt="">
            <span>低价机票</span>
      </div>
      <div class="icons">
            <img src="../../../../static/images/inn.png" alt="">
            <span>客栈</span>
      </div>
      <div class="icons">
            <img src="../../../../static/images/haiwai.png" alt="">
            <span>海外酒店</span>
      </div>
      <div class="icons">
            <img src="../../../../static/images/kezhan.png" alt="">
            <span>名宿</span>
      </div>
      <div class="icons">
            <img src="../../../../static/images/group.png" alt="">
            <span>特惠酒店</span>
      </div>
      <div class="icons">
            <img src="../../../../static/images/bargainflight.png" alt="">
            <span>低价机票</span>
      </div>
      <div class="icons">
            <img src="../../../../static/images/inn.png" alt="">
            <span>客栈</span>
      </div>
      <div class="icons">
            <img src="../../../../static/images/haiwai.png" alt="">
            <span>海外酒店</span>
      </div>
      <div class="icons">
            <img src="../../../../static/images/kezhan.png" alt="">
            <span>名宿</span>
      </div>
  </div>
</div>
  
</template>

<script>
export default {
    name:''
}
</script>

<style>
    .icon-large{
        display:flex;
        justify-content: space-between;
    }
    .icon-large>.icons>img{
        position: relative;
        height: 1rem;
        width: 1rem;
        display: block;
        margin: 0 auto;
    }
    .icon-large>.icons{
        padding: .2rem;
    }
    .icon-large>.icons>span{
        display: block;
        font-size: .25rem;
        margin-top: .1rem;
        text-align: center;
    } 
    .icon-middle{
        display:flex;
        justify-content: space-between;
    }
    .icon-middle>.icons{
        display: inline-block;
        padding: .24rem;
    }
    .icon-middle>.icons>img{
        position: relative;
        height: .8rem;
        width: .8rem;
        display: block;
        margin: 0 auto;
    }
    .icon-middle>.icons>span{
        display: block;
        font-size: .25rem;
        margin-top: .1rem;
        text-align: center;
    }
    .icon-small{
        display:flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .icon-small>.icons{
        display: inline-block;
        padding: .28rem;
    }
    .icon-small>.icons>img{
        position: relative;
        height: .5rem;
        width: .5rem;
        display: block;
        margin: 0 auto;
    }
    .icon-small>.icons>span{
        display: block;
        font-size: .25rem;
        margin-top: .1rem;
        text-align: center;
    }
</style>