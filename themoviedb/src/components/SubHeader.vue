<!-- This is a very basic component which is just a sub header -->

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

<!-- This CSS is scoped to just this component -->
<style scoped lang="scss">
  .subheader {
    color: #E3F4FC;
    text-align: left;
    font-weight: bold;
    font-size: 14pt;
    padding-top: 40px;
    padding-bottom: 10px;
  }
</style>
