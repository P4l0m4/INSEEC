<template>
  <div class="container">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  scroll-margin-top: 5rem;
  margin: auto;
  animation: fading 0.4s;
  gap: 4rem;

  @media (min-width: $big-tablet-screen) {
    width: 84%;
    padding: 2rem;
  }
  @media (min-width: $super-big-screen) {
    width: 100%;
    max-width: 2064px;
  }
}
</style>
