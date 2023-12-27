<script setup lang="ts">
const story = await useAsyncStoryblok("programs", { version: "published" });

useHead(() => {
  return {
    title: "Programmes | INSEEC Campus Chambéry Savoie",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Découvrez les programmes de l’INSEEC Chambéry Savoie. Un environnement d'exception au coeur de la Savoie.",
      },
    ],
  };
});
</script>
<template>
  <section class="programs">
    <div
      class="programs__banner"
      :style="`background-image: url('${story.content.banner.filename}')`"
    >
      <h1 class="programs__banner__title subtitles">
        Tous les programmes de l’INSEEC Campus Chambéry Savoie
      </h1>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.programs {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  min-height: 100vh;

  @media (min-width: $big-tablet-screen) {
    gap: 6rem;
  }

  &__banner {
    height: 60svh;
    width: 100%;
    background-image: url("@/assets/images/placeholder.svg");
    background-size: cover;
    background-position: center;
    position: relative;
    margin-bottom: 6rem;

    @media (min-width: $big-tablet-screen) {
      margin-bottom: 2rem;
    }

    &__title {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      transform: translateY(50%);
      margin: auto;
      color: $primary-color;
      background-color: $secondary-color;
      padding: 2rem;
      width: fit-content;

      @media (min-width: $big-tablet-screen) {
        padding: 2rem 4rem;
      }
    }
  }
}
</style>
