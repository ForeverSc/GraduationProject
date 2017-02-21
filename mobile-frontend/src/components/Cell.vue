<template>
  <div class="cell" @click="handleClick">
    <div class="cell-img">
      <img src="" alt="">
    </div>
    <div class="cell-info">
      <div class="cell-title">{{ title }}</div>
      <div class="cell-content">{{ content }}</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'cell',
    props: {
      title: String,
      content: String
    },
    methods:{
      handleClick(){
        this.$emit('cell-click', this.title)
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
  .cell-img{
    width: 50px;
    height: 50px;
    margin: 10px;
  }
  .cell-info{
    display: flex;
    flex-direction: column;
  }
  .cell-title{
    font-size: 18px;
  }
  .cell-content{
    font-size:10px;
    color: #ccc;
    margin-top: 10px;
  }



</style>
