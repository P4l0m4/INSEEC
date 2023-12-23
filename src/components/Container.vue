<template>
  <div class="container">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
.container {
  width: 100%;
  padding: 1rem;
  scroll-margin-top: 5rem;
  margin: auto;

  @media (min-width: $big-tablet-screen) {
    width: 80%;
    padding: 2rem;
  }
  @media (min-width: $super-big-screen) {
    width: 70%;
  }
}
</style>
