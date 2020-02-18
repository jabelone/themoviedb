<template>
  <div class="subheader">{{text}}</div>
</template>

<script>
export default {
  name: 'SubHeader',
  props: {
    text: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .subheader {
    text-align: left;
    font-weight: bold;
    font-size: 14pt;
    padding-top: 30px;
    padding-bottom: 10px;
  }
</style>
