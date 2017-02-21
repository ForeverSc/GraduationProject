<template>
  <div>
    <cell v-for="shop in shopList"
          :title="shop.shopName"
          :content="shop.shopDetail"
          @cell-click="enterShop">
    </cell>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import Cell from '../components/Cell'

  export default{
      name: 'ShopList',
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
