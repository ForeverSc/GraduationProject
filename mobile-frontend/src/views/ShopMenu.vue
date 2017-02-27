<template>
  <div>
    <mt-header fixed :title="shopName">
        <mt-button slot="left" icon="back" @click="goBack">返回</mt-button>
    </mt-header>
    <mt-navbar style="margin-top: 40px;" v-model="selected">
      <mt-tab-item id="1">商品</mt-tab-item>
      <!--<mt-tab-item id="2">评价</mt-tab-item>-->
      <mt-tab-item id="3">商家</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <dish-cell v-for="(dish, index) in shopMenu"
                   :dish="dish"
                   :index="index">
        </dish-cell>
        <cart :total="total" @clear-click="clearClick"></cart>
      </mt-tab-container-item>
      <!--<mt-tab-container-item id="2">-->
        <!--<mt-cell v-for="n in 4" :title="'测试 ' + n"/>-->
      <!--</mt-tab-container-item>-->
      <mt-tab-container-item id="3">
        <mt-cell title="店铺名" :value="shopInfo.shopName"></mt-cell>
        <mt-cell title="店铺电话" :value="shopInfo.shopTel"></mt-cell>
        <mt-cell title="店铺地址" :label="shopInfo.shopAddr"></mt-cell>
        <mt-cell title="店铺介绍" :label="shopInfo.shopDetail"></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import DishCell from '../components/DishCell'
  import Cart from '../components/Cart'

  export default {
    name: 'ShopMenu',
    components: {
      DishCell,
      Cart
    },
    data(){
      return {
        shopName: '',
        selected: "1"
      }
    },
    computed: mapGetters([
      'shopMenu',
      'total',
      'shopInfo'
    ]),
    methods: {
      clearClick(){
        this.$store.dispatch('clearMenu', {
            username: this.$store.state.login.username,
            shopName: this.shopName
        })
      },
      goBack(){
          this.$router.go(-1)
      }
    },
    mounted(){
      this.shopName = this.$route.query.shopName
      this.$store.dispatch('getShopMenu', { shopName: this.shopName })
      this.$store.dispatch('getShopInfo', { shopName: this.shopName })
    }
  }
</script>
