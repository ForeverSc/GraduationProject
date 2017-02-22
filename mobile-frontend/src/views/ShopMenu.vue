<template>
  <div>
    <mt-header fixed :title="shopName">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <mt-navbar style="margin-top: 40px;" v-model="selected">
      <mt-tab-item id="1">商品</mt-tab-item>
      <mt-tab-item id="2">评价</mt-tab-item>
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
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :title="'测试 ' + n"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :title="'选项 ' + n"/>
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
      'total'
    ]),
    methods: {
      clearClick(){
        this.$store.dispatch('clearMenu')
      }
    },
    mounted(){
      this.shopName = this.$route.query.shopName
      this.$store.dispatch('getShopMenu', {shopName: this.shopName})
    }
  }
</script>
