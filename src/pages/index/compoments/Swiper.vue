<template>
  <div class="swiper-container">
      <swiper :options="swiperOption">
      <swiper-slide v-for="(item,index) of list" :key="index">
        <img class="swiper-img" :src="item" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
    data:function(){
        return {
            list:['../../../../static/images/swiper1.jpg',
                  '../../../../static/images/swiper2.jpg',
                  '../../../../static/images/swiper3.jpg'],
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true,
                speed:300,
                autoplay :3000
            }
        }
    },
}
</script>

<style>
    .swiper-container{       
        width: auto;
        height: auto;
        margin: .3rem .1rem;
        border-radius: 5px;
        overflow: hidden;
    }
    .swiper-pagination-bullet-active{
        background:#ff7400;
        opacity: 1;
    }
    .swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{
        width: 0.2rem;
        height: 0.2rem;
        border-radius: 50%;
    }
    .swiper-img{
        width: 100%;
        height: auto;
    }
</style>