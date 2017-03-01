<template>
  <div class="cell" @click="handleClick">
    <div class="cell-img">
      <img :src="imgURL" :alt="imgName">
    </div>
    <div class="cell-info">
      <div class="cell-title">{{ title }}</div>
      <div class="cell-content">{{ content }}</div>
    </div>
    <div class="cell-state">{{ state }}</div>
  </div>
</template>
<script>
  export default {
    name: 'cell',
    props: {
      title: String,
      content: String,
      state: String,
      imgURL: String,
      imgName: String
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
    width: 60px;
    height: 60px;
    margin-right: 10px;
  }
  .cell-img img{
    width: 60px;
    height: 60px;
  }

  .cell-info{
    width: 220px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  .cell-title{
    font-size: 18px;
  }
  .cell-content{
    font-size:10px;
    color: #ccc;
    margin-top: 15px;
  }

  .cell-state{
    display: flex;
    align-items: center;
  }



</style>
