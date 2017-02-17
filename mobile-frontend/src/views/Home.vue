<template>
  <div>
    <mt-header fixed :title="title"></mt-header>
    <mt-tab-container v-model="active" :swipeable="true">
      <mt-tab-container-item id="tab-takeout" >

      </mt-tab-container-item>
      <mt-tab-container-item id="tab-orders">

      </mt-tab-container-item>
      <mt-tab-container-item id="tab-user">

      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar v-model="active">
      <mt-tab-item id="tab-takeout">
        外卖
      </mt-tab-item>
      <mt-tab-item id="tab-orders">
        订单
      </mt-tab-item>
      <mt-tab-item id="tab-user">
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
            active: 'tab-takeout'
          }
      },
      computed: {
          title(){
              switch(this.active){
                case 'tab-takeout': return '外卖'; break;
                case 'tab-orders': return '订单'; break;
                case 'tab-user': return '我的';  break;
                default: return ''; break;
              }
          }
      }
  }
</script>
