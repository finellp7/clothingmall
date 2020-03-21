<template>
<div id="profile">
  <nav-bar class="profile-nav">
    <div slot="center">个人中心</div>
  </nav-bar>
  <div><user-info></user-info></div>
  <div class="account">
    <div class="account-item">
      <div class="number">
        <span class="balance">0.00</span>
      </div>
      <div class="account-info">我的余额</div>
    </div>
    <div class="account-item">
      <div class="number">
        <span class="balance">0</span>个
      </div>
      <div class="account-info">我的优惠</div>
    </div>
    <div class="account-item">
        <div class="number">
          <span class="balance">0</span>分
        </div>
      <div class="account-info">我的积分</div>
    </div>
  </div>
  <div><list-view/></div>
</div>
</template>

<script>

import NavBar from 'components/common/navbar/NavBar'
import UserInfo from './childComps/UserInfo'
import ListView from './childComps/ListView'

export default {
  name: 'Profile',
  components: {
        NavBar,
        UserInfo,
        ListView
  }
}
</script>
<style scoped>
#profile{
    background-color: #f2f2f2;
    height: 100vh;
    position: relative;
}
.profile-nav{
    background-color:var(--color-tint);
    color:#fff;
}
.account{
  display: flex;
}
.account-item{
  width: 100%;
  background-color: #fff;
  text-align: center;
  margin-right: 1px;
  color: #666;
  font-size: 13px;
  padding: 18px; 
}
.account-item:nth-child(3){
    margin-right: 0;

}
.account-item .balance{
  font-size: 24px;
  font-weight: 700;
  color: #ff5f3e;
}
.account-info{
  margin-top:6px;
}
</style>