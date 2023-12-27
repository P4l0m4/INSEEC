<script setup lang="ts">
const story = await useAsyncStoryblok("partners", { version: "published" });

useHead(() => {
  return {
    title: "Partenaires | INSEEC Campus Chambéry Savoie",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Déouvrez les partenaires de l’INSEEC Campus Chambéry Savoie.",
      },
    ],
  };
});
</script>
<template>
  <section class="partners">
    <div
      class="partners__banner"
      :style="`background-image: url('${story.content.banner.filename}')`"
    >
      <h1 class="partners__banner__title subtitles">
        A nos côtés depuis plusieurs années
      </h1>
    </div>
    <Container>
      <div class="partners__logos">
        <img src="@/assets/images/placeholder.svg" alt="placeholder" />
        <img src="@/assets/images/placeholder.svg" alt="placeholder" />
        <img src="@/assets/images/placeholder.svg" alt="placeholder" />
        <img src="@/assets/images/placeholder.svg" alt="placeholder" />
        <img src="@/assets/images/placeholder.svg" alt="placeholder" />
        <img src="@/assets/images/placeholder.svg" alt="placeholder" /></div
    ></Container>
  </section>
</template>
<style lang="scss" scoped>
.partners {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;

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

  &__logos {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
    justify-content: center;

    @media (min-width: $big-tablet-screen) {
      gap: 2rem;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>
