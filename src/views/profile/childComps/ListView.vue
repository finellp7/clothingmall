<template>
<div>
  <div id="normal-list">
      <div class="item">
        <span class="icon"><img src="~assets/img/profile/message.svg" alt=""></span>
        <div class="info">我的消息</div>
      </div>
      <div class="item">
        <span class="icon"><img src="~assets/img/profile/pointer.svg" alt=""></span>
        <div class="info">积分商城</div>  
      </div>
      <div class="item">
        <span class="icon"><img src="~assets/img/profile/vip.svg" alt=""></span>
        <div class="info">会员卡</div> 
      </div>
  </div>

  <div id="normal-list">
      <div class="item">
        <span class="icon"><img src="~assets/img/profile/cart.svg" alt=""></span>
      <div class="info">我的购物车</div>
      </div>
      <div class="item">
        <span class="icon"><img src="~assets/img/profile/shopping.svg" alt=""></span>
      <div class="info">下载购物APP</div>
      </div>
  </div>
</div>

  
</template>

<script>
export default{
  name:'ListView'
}
</script>

<style scoped>
#normal-list{
  background: #fff;
  font-size:15px;
  color: #333;
  margin-top:15px;
}
#normal-list .item{
  height: 44px;
  line-height: 44px;
  position: relative;
}
.item .icon{
  margin-top:10px;
  position:absolute;
  left: 16px;
  top: -7px;
}
.icon img{
  width:20px ;
  height:20px ;
}
.item .info{
  margin-left:40px;
  border-bottom: 1px solid hsla(0, 0%, 39.2%, .1);
  padding-left: 5px;
}
</style>