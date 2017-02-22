<template>
    <div class="cart">
      <div class="total">总共 {{ total }} 元</div>
       <div class="clear" @click="handleClear">结算</div>
    </div>
</template>
<script>
  export default {
      name: 'cart',
      props: {
          total: Number
      },
      methods: {
          handleClear(){
            this.$emit('clear-click', this.total)
          }
      }
  }
</script>
<style>
  .cart{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left:0;
    bottom: 0;
    width: 100%;
    height: 60px;
    background: #dfdfdf;
  }
  .total{
    margin-left: 20px;
  }
  .clear{
    margin-right: 20px;
  }

</style>
