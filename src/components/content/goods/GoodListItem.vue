<template>
  <div class="goods-item" @click="itemClick">
  <!--load监听图片是否加载完毕-->
    <img v-lazy="showImage" alt="" @load="imageLoad">
    <div class="goods-info">
      <p>{{goodItem.title}}</p>
      <span class="price">{{goodItem.price}}</span>
      <span class="collect">{{goodItem.cfav}}</span>

    </div>
  </div>
</template>



<script>
  export default{
      name:'GoodListItem',
      props:{
          goodItem:{
              type:Object,
              default(){
                  return {}
              }
          }
      },
      computed:{
        showImage(){
          // return this.goodItem.image||this.goodItem.show.img||this.goodItem.img
          return this.goodItem.img || this.goodItem.image || this.goodItem.show.img
        }
      },
      methods: {
       imageLoad(){
           //console.log(imageLoad)
           //if(this.$route.path.indexOf('/home')){
            this.$bus.$emit('itemImageLoad')
           //}else if(this.$route.path.indexOf('/detail')){
           // this.$bus.$emit('detailImageLoad')
            
          },
        
          //console.log(this.$bus);
        itemClick(){
          //console.log('跳转到详情页')
          this.$router.push('/detail/'+this.goodItem.iid) 
        }

      }
  }
</script>

<style scoped>
  .goods-item {
    padding-bottom: 40px;
    position: relative;

    width: 46%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>