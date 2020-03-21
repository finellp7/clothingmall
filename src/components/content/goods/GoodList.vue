<template>
  <div class="good">
    <good-list-item v-for="item in goods" :good-item = 'item'></good-list-item>
  </div>
</template>

<script>
import GoodListItem from './GoodListItem'

export default {
  name: 'GoodList',
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodListItem
  },
} 
</script>

<style>
  .good {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>