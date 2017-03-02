<template>
  <div class="cell">
    <div class="cell-img">
      <img :src="baseURL + '/' + dish.dishLogo.url"
           :alt="dish.dishLogo.name">
    </div>
    <div class="cell-info">
      <div class="cell-title">{{ dish.dishName }}</div>
      <div class="cell-content">{{ dish.dishDetail }}</div>
      <div class="cell-price">￥{{ dish.dishPrice }}</div>
    </div>
    <div class="cell-operate">
      <div class="sub" @click="subNum">-</div>
      <div class="num">{{ shopMenu[index].dishNum }}</div>
      <div class="add" @click="addNum">+</div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import { baseURL } from '../util/axios'

  export default {
    name: 'dish-cell',
    props: {
      dish: Object,
      index: Number
    },
    data(){
      return {
          baseURL
      }
    },
    computed: {
      ...mapGetters([
        'shopMenu'
      ]),
      dishNum(){
          return this.shopMenu[this.index].dishNum
      }
    },
    methods: {
      subNum(){
        this.$store.dispatch('subDishNum', this.index)
      },
      addNum(){
        this.$store.dispatch('addDishNum', this.index)
      }
    }
  }
</script>

<style scoped>
  .cell {
    display: flex;
    width: 100%;
    height: 70px;
    padding: 10px;
    border-bottom: 1px solid #dfdfdf;
  }

  .cell-img {
    width: 60px;
    height: 60px;
    margin: 10px;
  }

  .cell-img  img{
    width: 60px;
    height: 60px;
  }

  .cell-info {
    display: flex;
    flex-direction: column;
    width: 280px;
  }

  .cell-title {
    font-size: 18px;
  }

  .cell-content {
    font-size: 10px;
    color: #ccc;
    margin-top: 5px;
  }

  .cell-price {
    font-size: 14px;
    color: #aa1014;
    margin-top: 5px;
  }

  .cell-operate {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80px;
    margin-right: 10px;
  }


</style>
