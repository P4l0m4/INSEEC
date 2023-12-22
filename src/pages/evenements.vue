<script setup lang="ts">
import { stringToSlug } from "~/utils/slugify";
const story = await useAsyncStoryblok("events", { version: "published" });
</script>
<template>
  <section class="events">
    <div
      class="events__banner"
      :style="`background-image: url('${story.content.banner.filename}')`"
    >
      <h1 class="events__banner__title subtitles">
        Un campus vivant avec nos événements
      </h1>
    </div>
    <Container>
      <p class="events__description">
        Le campus de l'INSEEC Chambéry
        <strong
          >s’investit pleinement dans l'épanouissement de tous ses
          étudiants</strong
        >
        en organisant chaque année de
        <strong
          >nombreux d'événements visant à dynamiser la vie du campus.</strong
        >
        Ce qui rend ces événements exceptionnels, c'est l'engagement massif des
        étudiants dans ces projets.
        <strong
          >En tant que bénévoles ou porteur de projets, les étudiants sont
          habituellement impliqués dans l'organisation d'au moins un événement
          au cours de l'année !</strong
        >
      </p></Container
    >

    <Container>
      <div class="events__showcase">
        <h2 class="events__showcase__title titles">
          LES ÉVÉNEMENTS DE L'INSEEC CHAMBÉRY
        </h2>
        <div class="events__showcase__list">
          <NuxtLink
            v-for="event in story.content.list"
            :key="event._uid"
            :to="`#${stringToSlug(event.previewTitle)}`"
            class="events__showcase__list__link"
            :style="`background-image: url('${event.image.filename}')`"
            >{{ event.previewTitle }}</NuxtLink
          >
        </div>
      </div></Container
    >

    <Container
      :id="stringToSlug(event.previewTitle)"
      v-for="event in story.content.list"
      :key="event._uid"
    >
      <div class="events__presentation">
        <h2 class="events__presentation__title titles">
          {{ event.title }}
        </h2>
        <p
          class="events__presentation__description subtitles"
          v-if="event.subtitle"
          v-html="renderRichText(event.subtitle)"
        ></p>

        <div class="events__presentation__wrapper">
          <div class="events__presentation__wrapper__txt">
            <p
              class="events__presentation__wrapper__txt__description"
              v-for="paragraph in event.paragraphs"
              :key="paragraph._uid"
              v-html="renderRichText(paragraph.text)"
            ></p>
          </div>

          <img
            class="events__presentation__wrapper__img"
            :src="event.image.filename"
            :alt="event.image.alt"
          />
        </div>
        <img
          v-if="event.image2.filename"
          class="events__presentation__img"
          :src="event.image2.filename"
          :alt="event.image2.alt"
        />

        <iframe
          v-if="event.video.filename"
          class="events__presentation__img"
          :src="event.video.filename"
          :title="event.video.title"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe></div
    ></Container>
  </section>
</template>
<style lang="scss" scoped>
.events {
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

  &__showcase {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    &__list {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1rem;
      justify-content: center;

      @media (min-width: $big-tablet-screen) {
        gap: 2rem;
      }

      &__link {
        display: flex;
        padding: 2rem;
        height: 300px;
        width: 100%;
        border-radius: $radius;
        color: $primary-color;
        justify-content: center;
        align-items: center;
        font-size: $subtitles;
        font-weight: $skinny-thick;
        text-align: center;
        background-image: url("@/assets/images/placeholder.svg");
        background-size: cover;
        background-position: center;
        text-shadow: $shadow-text;
        text-wrap: balance;
        filter: grayscale(20%);
        transition:
          background-position 0.4s ease,
          filter 0.4s ease;

        &:hover {
          background-position: center right;
          filter: grayscale(0%);
        }

        &:first-of-type,
        &:nth-of-type(5),
        &:nth-of-type(9),
        &:nth-of-type(13) {
          @media (min-width: $laptop-screen) {
            height: 300px;
            grid-column: 1 / 4;
          }
        }

        @media (min-width: $big-tablet-screen) {
          height: 400px;
        }
      }
    }
  }

  &__presentation {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    @media (min-width: $big-tablet-screen) {
      gap: 3rem;
    }

    &__wrapper {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-direction: column-reverse;
      width: 100%;

      @media (min-width: $big-tablet-screen) {
        flex-direction: row;
        gap: 3rem;
      }

      &__txt {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;

        @media (min-width: $big-tablet-screen) {
          gap: 2rem;
        }

        &__ul {
          display: flex;
          flex-direction: column;
          gap: 1rem;

          &__li {
            list-style: none;

            &:first-of-type {
              margin-top: 1rem;
            }
          }
        }
      }

      &__img {
        width: 100%;
        max-width: 600px;
        object-fit: cover;
        border-radius: $radius;
        box-shadow: $shadow;
      }
    }

    &__img {
      width: 100%;
      object-fit: cover;
      border-radius: $radius;
      box-shadow: $shadow;
      height: 400px;
    }
  }
}
</style>
