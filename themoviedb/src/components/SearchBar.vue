<!-- This is the main search input field on the home page. -->

<template>
  <input type="text" id="search" name="Search" :placeholder="placeholder" @input="inputChanged">
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
  methods: {
    /**
     * This emits an event to let the parent component know it has been updated (via v-model)
     * @param event
     */
    inputChanged(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>

<!-- This CSS is scoped to just this component -->
<style scoped lang="scss">
  input {
    color: #01D277;
    height: 100%;
    width: 100%;
    max-height: 50px;
    border-radius: 40px;
    font-size: 16px;
    font-weight: 700;
    font-family: Roboto, sans-serif;
    padding: 2px 15px;

    border: none;
    background: #fff url("../assets/search.svg") no-repeat scroll 95%;
  }

  input::placeholder {
    color: #01D277;
  }

  input::-webkit-input-placeholder {
    color: #01D277;
  }

  input::-moz-placeholder {
    color: #01D277;
  }

  input::placeholder {
    color: #01D277;
  }

  input:focus {
    outline-width: 0;
  }
</style>
