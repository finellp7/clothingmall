<template>
  <grid-view>
    <good-list-item v-for="(item, index) in categoryDetail" :key="index" :goods="item"></good-list-item>
  </grid-view>
</template>

<script>
  import GridView from 'common/gridView/GridView'
  import GoodListItem from 'views/home/childComps/GoodListItem'

  export default {
    name: "TabContentDetail",
    components: {
      GridView,
      GoodListItem
    },
    props: {
      categoryDetail: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>
