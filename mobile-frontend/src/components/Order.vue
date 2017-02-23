<template>
  <div class="order">
    <div>{{ title }}</div>
    <div>{{ content }}</div>
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

    }

  }
</script>

<style scoped>

</style>
