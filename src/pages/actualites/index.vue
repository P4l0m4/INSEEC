<script setup>
const story = await useAsyncStoryblok("news", { version: "published" });
import { stringToSlug } from "@/utils/slugify.js";
</script>
<template>
  <Container>
    <div class="news">
      <h2 class="news__title titles">Toutes les news de l'INSEEC Chambéry</h2>
      <div class="news__articles">
        <NuxtLink
          class="news__articles__article"
          :to="'/actualites/' + stringToSlug(article.title)"
          v-for="article in story.content.newsList"
          :key="article._uid"
          :style="`background-image: url('${article.images[0].filename}')`"
        >
          <h3 class="news__articles__article__title">
            {{ article.title }}
          </h3>
        </NuxtLink>
      </div>
    </div></Container
  >
</template>
<style lang="scss" scoped>
.news {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: $big-tablet-screen) {
    gap: 2rem;
  }

  &__title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    &__link {
      width: 100%;
      max-width: 400px;
      margin-top: 1rem;

      @media (min-width: $big-tablet-screen) {
        margin-top: 0;
        max-width: 360px;
      }
    }
  }

  &__articles {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-content: center;
    width: 100%;
    gap: 1rem;
    @media (min-width: $big-tablet-screen) {
      gap: 2rem;
    }

    &__article {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      width: 100%;
      height: 400px;
      padding: 1rem;
      border-radius: $radius;
      background-size: cover;
      background-position: center;
      background-image: url("@/assets/images/placeholder.svg");
      box-shadow: $shadow;
      filter: grayscale(20%);
      transition:
        background-position 0.4s ease,
        filter 0.4s ease;

      &:hover {
        background-position: center right;
        filter: grayscale(0%);
      }

      &__title {
        color: $primary-color;
        font-weight: $skinny-thick;
        text-shadow: $shadow-text;
        width: 100%;
      }
    }
  }
}
</style>
