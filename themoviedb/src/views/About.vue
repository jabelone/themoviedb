<template>
  <div class="about">
    <h1>About</h1>
    <p>
      This project was completed as part of a technical on boarding challenge for a company. It was
      built on the default vue-cli project creation tool and does not rely on any external styling
      or component libraries.
    </p>
    <p>
      Copyright &copy; {{year}} <a target="_blank" href="https://github.com/jabelone">Jaimyn
      Mayer</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'About',
  data: () => ({
    year: new Date().getFullYear(),
  }),
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .about {
    max-width: 500px;
    margin: auto;
  }
</style>
