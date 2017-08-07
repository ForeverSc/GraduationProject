<template>
<div>
    <div class="vsearch-container">
        <div class="vsearch-line">1</div>
    </div>
</div>
</template>
<script>
export default {
    name: 'date-picker',
    props: ['value']
}
</script>
<style>
.vsearch-container {
    width: 100%;
    background: #ccc;
}

.vsearch-line {
    height: 48px;
    line-height: 48px;
    border: 1px dashed #aac;
}
</style>