<script setup>
import { stringToSlug } from "@/utils/slugify.js";
const story = await useAsyncStoryblok("news", { version: "published" });
const route = useRoute();
const articleSlug = route.params.slug;
const article = story.value.content.newsList.find(
  (a) => stringToSlug(a.title) === articleSlug
);
</script>
<template>
  <Container>
    <div class="article">
      <h1 class="article__title titles">
        {{ article.title }}
      </h1>
      <h2 class="article__tldr subtitles">{{ article.TLDR }}</h2>

      <div class="article__content">
        <div class="article__content__txt">
          <p
            v-html="renderRichText(paragraph.text)"
            v-for="paragraph in article.paragraphs"
            :key="paragraph._uid"
          ></p>
        </div>
        <div class="article__content__images">
          <div
            class="article__content__images__frame"
            v-for="image in article.images"
          >
            <img
              class="article__content__images__frame__img"
              :src="image.filename"
              :alt="image.alt"
            />
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>
<style lang="scss" scoped>
.article {
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: $big-tablet-screen) {
    gap: 4rem;
  }

  &__title {
    width: 100%;
  }

  &__tldr {
    width: 100%;
    margin-top: -1rem;
  }

  &__content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (min-width: $big-tablet-screen) {
      flex-direction: row;
    }

    &__txt {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      @media (min-width: $big-tablet-screen) {
        gap: 2rem;
      }
    }
    &__images {
      width: 100%;
      max-width: 650px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

      &__frame {
        width: 100%;
        max-width: 375px;
        height: 375px;
        padding: 1rem 1rem 3rem 1rem;
        background-color: $primary-color;
        border-radius: $radius;
        box-shadow: $shadow;
        &:nth-of-type(1n) {
          transform: rotate(0deg);
        }
        &:nth-of-type(2n) {
          transform: rotate(6deg);
        }
        &:nth-of-type(3n) {
          transform: rotate(-6deg);
        }
        &:nth-of-type(4n) {
          transform: rotate(0deg);
        }

        &__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: $radius;
        }
      }
    }
  }
}
</style>
