<template>
  <div>
      <div class="IndexHeader">
          <div class="left">
            <img src="../../../../static/images/搜索.png" alt="">
            搜索景点门票
          </div>
          <div class="right">
              <img src="../../../../static/images/login.png" alt="">
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'IndexHeader',
}
</script>

<style>
   .IndexHeader {
       width: 100%;
       height: 0.7rem;
       margin: .3rem;
   }
   .left{
       display: inline-block;
       width: 6rem;
       height: 0.7rem;
       line-height: .7rem;
       background-color: #eee;
       text-align: left;
       color: #a5a5ae;
       border-radius: 4px;
   }
   .left>img{
       height: .36rem;
       width: .36rem;
       margin:0 .2rem;
   }
   .right{
       float: right;
       margin-right: .5rem;
   }
   .right>img{
       height: .6rem;
       width: .6rem;
       line-height: .6rem
   }
</style>