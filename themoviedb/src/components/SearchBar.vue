<template>
    <input type="text" id="search" name="Search" :placeholder="placeholder">
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    placeholder: String,
  },
  data: () => ({
    searchString: '',
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
input {
  color: #00d76c;
  height: 100%;
  width: 100%;
  max-height: 50px;
  border-radius: 40px;
  font-size: 14px;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  padding: 2px 15px;

  border: none;
  background: #fff url("../assets/search.svg") no-repeat scroll 95%;
}
</style>
