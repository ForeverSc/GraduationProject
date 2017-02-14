<template>
  <div>
    <mt-header fixed title="固定在顶部"></mt-header>
    <mt-tab-container v-model="active">
      <mt-tab-container-item id="tab-container1">
        <mt-cell v-for="n in 10" title="tab-container 1"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container2">
        <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container3">
        <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar v-model="active">
      <mt-tab-item id="tab-container1">
        外卖
      </mt-tab-item>
      <mt-tab-item id="tab-container2">
        订单
      </mt-tab-item>
      <mt-tab-item id="tab-container3">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
  export default {
      name: 'Home',
      data(){
          return {
            active: 'tab-container1'
          }
      }
  }
</script>
