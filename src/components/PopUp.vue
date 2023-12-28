import { Link } from '#build/components';
<script setup lang="ts">
import { ref, onMounted } from "vue";
const story = await useAsyncStoryblok("popup", { version: "published" });

let showPopUp = ref(false);
let popUpID = ref(story.value.content.image.id);

//read value of all cookies
const cookies = document.cookie
  .split(";")
  .map((cookie) => cookie.split("="))
  .reduce(
    (accumulator, [key, value]) => ({
      ...accumulator,
      [key.trim()]: decodeURIComponent(value),
    }),
    {}
  );

function displayPopUp() {
  setTimeout(() => {
    showPopUp.value = true;
  }, 4000);
  setTimeout(() => {
    showPopUp.value = false;
  }, 20000);
}

function closePopUp() {
  showPopUp.value = false;
  document.cookie = "popUpClosed=true;max-age=86400";
}

onMounted(() => {
  if (cookies.popUpClosed === undefined) {
    document.cookie = "popUpClosed=false;max-age=86400";
  }
  if (cookies.popUpID === undefined) {
    document.cookie = `popUpID=${popUpID.value};max-age=604800`;
  }

  if (cookies.popUpClosed === "true" && cookies.popUpID != popUpID.value) {
    displayPopUp();
    document.cookie = `popUpID=${popUpID.value};max-age=604800`;
  } else if (cookies.popUpID === popUpID.value) {
    document.cookie = "popUpClosed=true;max-age=86400";
  } else if (cookies.popUpClosed === "false") {
    displayPopUp();
  }
});
</script>
<template>
  <section
    class="pop-up"
    v-if="showPopUp && story.content.image.filename"
    @click="showPopUp = false"
  >
    <div class="pop-up__wrapper" @click.stop>
      <div class="pop-up__wrapper__close" @click="closePopUp()">
        <img
          class="pop-up__wrapper__close__icon"
          src="@/assets/icons/close.svg"
          alt="close icon"
        />
      </div>

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
        v-if="story.content.linkText && story.content.link.url"
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
    width: 320px;
    height: calc(320px * 1.58);
    position: relative;
    box-shadow: $shadow;
    pointer-events: all;
    @media (min-width: $big-tablet-screen) {
      height: 550px;
      width: 345px;
    }
    &__close {
      padding: 0 0 0.5rem 0.5rem;
      right: 1rem;
      top: 1rem;
      position: absolute;

      &__icon {
        width: 26px;
        height: 26px;
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
