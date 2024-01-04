<script setup lang="ts">
import { stringToSlug } from "@/utils/slugify.js";
const story = await useAsyncStoryblok("news", { version: "published" });
</script>
<template>
  <Container>
    <div class="news">
      <h2 class="news__title titles">Plus de news</h2>
      <div class="news__articles">
        <NuxtLink
          class="news__articles__article"
          :to="'/actualites/' + stringToSlug(article.title)"
          v-for="article in story.content.newsList"
          :key="article._uid"
          :style="`backgroundImage: url(${article.images[0].filename})`"
        >
          <h3 class="news__articles__article__title">
            {{ article.title }}
          </h3>
        </NuxtLink>
      </div>
      <NuxtLink class="news__link button-secondary" to="/actualites"
        >Toutes les actualités</NuxtLink
      >
    </div></Container
  >
</template>

<style lang="scss" scoped>
.news {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  position: relative;

  @media (min-width: $big-tablet-screen) {
    gap: 2rem;
  }

  &__title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__link {
    width: 100%;
    @media (min-width: $big-tablet-screen) {
      width: 300px;
    }
  }

  &__articles {
    border-radius: $radius;
    display: flex;
    width: 100%;
    gap: 1rem;
    overflow-x: scroll;
    height: 340px;

    @media (min-width: $big-tablet-screen) {
      gap: 2rem;
    }

    &__article {
      display: flex;
      // justify-content: center;
      // align-items: center;
      width: 300px;
      min-width: 300px;
      height: 100%;
      padding: 1rem;
      background-color: $primary-color;
      flex-direction: column;
      text-align: center;
      justify-content: flex-end;
      // border-radius: $radius;
      border-radius: $radius 50% $radius $radius;
      background-size: cover;
      background-position: center;
      gap: 1rem;
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
        text-shadow: $shadow-text;
        font-weight: $thick;
        font-size: $subtitles;
        width: 100%;
        text-align: left;
        padding: 0 1rem;
        // text-shadow: $shadow-text;
      }
    }
  }
}
</style>
