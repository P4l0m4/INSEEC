import { Link } from '#build/components';
<script setup lang="ts">
import { ref, onMounted } from "vue";
const story = await useAsyncStoryblok("popup", { version: "published" });

let showPopUp = ref(false);

onMounted(() => {
  setTimeout(() => {
    showPopUp.value = true;
  }, 4000);
  // setTimeout(() => {
  //   showPopUp.value = false;
  // }, 14000);
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

      <div
        class="pop-up__wrapper__img"
        :style="`background-image: url(${story.content.image.filename})`"
      ></div>
      <a
        class="pop-up__wrapper__link button-primary"
        :href="story.content.link.url"
        :target="story.content.link.target"
        @click="showPopUp = false"
        >{{ story.content.linkText }}</a
      >
    </div>
  </section>
</template>
<style lang="scss" scoped>
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
    height: 80svh;
    position: relative;
    box-shadow: $shadow;
    pointer-events: all;
    @media (min-width: $big-tablet-screen) {
      height: 550px;
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
      border-radius: $radius;
    }

    &__link {
      width: 100%;
    }
  }
}
</style>
