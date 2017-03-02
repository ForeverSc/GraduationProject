<template>
  <div>
    <cell class="shop-cell"
          v-for="shop in shopList"
          :title="shop.shopName"
          :content="shop.shopDetail"
          :imgURL="shop.shopLogo && ( baseURL + '/' + shop.shopLogo.url)"
          :imgName="shop.shopLogo && shop.shopLogo.name"
          @cell-click="enterShop">
    </cell>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import Cell from '../components/Cell'
  import { baseURL } from '../util/axios'

  export default{
      name: 'ShopList',
      data(){
        return {
          baseURL
        }
      },
      computed: mapGetters([
          'shopList'
      ]),
      components: {
        Cell
      },
      methods: {
        enterShop(shopName){
          this.$router.push({ path: '/shopMenu', query: { shopName }})
        }
      },
      mounted(){
          this.$store.dispatch('getShopList')
      }
  }
</script>
<style>
  .shop-cell:last-child{
    margin-bottom: 60px;
  }
</style>
