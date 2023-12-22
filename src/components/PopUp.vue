<script setup lang="ts">
import { ref, onMounted } from "vue";

let showPopUp = ref(true);

onMounted(() => {
  setTimeout(() => {
    showPopUp.value = false;
  }, 10000);
});
</script>
<template>
  <section class="pop-up" v-if="showPopUp" @click="showPopUp = false">
    <div class="pop-up__wrapper" @click.stop>
      <img
        class="pop-up__wrapper__icon"
        src="@/assets/icons/close.svg"
        alt="close icon"
        @click="showPopUp = false"
      />
      <img
        class="pop-up__wrapper__logo"
        src="@/assets/images/logo-inseec.svg"
        alt="logo"
      />

      <div class="pop-up__wrapper__img"></div>
      <NuxtLink
        class="pop-up__wrapper__link button-primary"
        to="/evenements"
        @click="showPopUp = false"
        >En savoir plus</NuxtLink
      >
    </div>
  </section>
</template>
<style lang="scss" scoped>
@keyframes popUp {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

.pop-up {
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(4px);
  inset: 0;
  padding: 2rem;
  animation: popUp 0.4s;

  @media (min-width: $big-tablet-screen) {
    backdrop-filter: blur(0);
    align-items: flex-end;
    justify-content: flex-end;
    pointer-events: none;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background-color: $primary-color;
    border-radius: $radius;
    width: 100%;
    max-width: 460px;
    height: 100%;
    position: relative;
    box-shadow: $shadow;
    pointer-events: all;
    @media (min-width: $big-tablet-screen) {
      height: 450px;
      width: 345px;
    }

    &__icon {
      width: 26px;
      height: 26px;
      right: 1rem;
      top: 1rem;
      position: absolute;
      transition: transform 0.2s;

      &:hover {
        transform: scale(1.1);
        cursor: pointer;
      }

      @media (min-width: $big-tablet-screen) {
        left: 1rem;
        right: inherit;
      }
    }

    &__logo {
      width: 180px;
      object-fit: contain;
    }

    &__img {
      width: 100%;
      height: 100%;
      background-image: url("@/assets/images/placeholder.svg");
      background-size: cover;
      background-position: center;
      border-radius: $radius;
    }

    &__link {
      width: 100%;
    }
  }
}
</style>
