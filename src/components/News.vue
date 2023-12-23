<script setup lang="ts">
import { stringToSlug } from "@/utils/slugify.js";
const story = await useAsyncStoryblok("news", { version: "published" });
</script>
<template>
  <Container>
    <div class="news">
      <h2 class="news__title titles">
        Plus de news
        <NuxtLink class="news__title__link button-primary" to="/actualites"
          >Voir toutes les actualités</NuxtLink
        >
      </h2>
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
    // display: grid;
    // grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    display: flex;
    width: 100%;
    gap: 1rem;
    overflow-x: scroll;
    @media (min-width: $big-tablet-screen) {
      gap: 2rem;
    }

    &__article {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      min-width: 300px;
      height: 200px;
      padding: 1rem;
      text-align: center;
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
      }
    }
  }
}
</style>
