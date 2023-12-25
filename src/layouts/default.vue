<script setup></script>

<template>
  <HeaderComponent />
  <main>
    <slot />
  </main>
  <PopUp />
  <FooterComponent />
</template>
<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 88px;

  @media (min-width: $big-tablet-screen) {
    gap: 4rem;
    padding-top: 96px;
  }
}
</style>
