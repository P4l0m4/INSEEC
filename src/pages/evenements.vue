<script setup lang="ts">
import { stringToSlug } from "~/utils/slugify";
const story = await useAsyncStoryblok("events", { version: "published" });

useHead(() => {
  return {
    title: "Evénements | INSEEC Campus Chambéry Savoie",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Découvrez les événements exclusifs de l’INSEEC Campus Chambéry Savoie.",
      },
    ],
  };
});
</script>
<template>
  <section class="events">
    <picture class="events__banner">
      <source
        media="(min-width: 1000px)"
        :srcset="story.content.banner.filename"
      />

      <img
        class="events__banner__img"
        :src="story.content.smallBanner.filename"
        :alt="story.content.smallBanner.filename.alt"
      />
      <h1 class="events__banner__title titles">
        Un campus vivant avec nos événements
      </h1>
      <div class="events__banner__buttons">
        <NuxtLink
          class="events__banner__buttons__button button-primary"
          to="#events"
          >Découvrir nos événements</NuxtLink
        >
        <NuxtLink
          class="events__banner__buttons__button button-secondary"
          target="_blank"
          to="https://www.inseec.com/procedures-admissions/"
          >M'inscrire à l'INSEEC Chambéry</NuxtLink
        >
      </div>
    </picture>
    <EventsCalendar />
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

    <Container id="events">
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
        <h3
          class="events__presentation__description subtitles"
          v-if="event.subtitle"
          v-html="renderRichText(event.subtitle)"
        ></h3>

        <div class="events__presentation__wrapper">
          <div class="events__presentation__wrapper__txt">
            <p
              class="events__presentation__wrapper__txt__description"
              v-for="paragraph in event.paragraphs"
              :key="paragraph._uid"
              v-html="renderRichText(paragraph.text)"
            ></p>

            <div class="events__presentation__wrapper__txt__frames">
              <div
                class="events__presentation__wrapper__txt__frames__frame"
                v-for="image in event.images"
                :key="image._uid"
              >
                <img
                  v-if="event.images[0].filename"
                  class="events__presentation__wrapper__txt__frames__frame__img"
                  :src="image.filename"
                  :alt="image.alt"
                />
              </div>
            </div>
          </div>

          <div class="events__presentation__wrapper__frame">
            <img
              class="events__presentation__wrapper__frame__img"
              :src="event.image.filename"
              :alt="event.image.alt"
            />
          </div>
        </div>

        <iframe
          v-if="event.video.filename"
          class="events__presentation__video"
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
  overflow: hidden;

  @media (min-width: $big-tablet-screen) {
    gap: 6rem;
  }

  &__banner {
    display: flex;
    background-image: url("@/assets/images/placeholder.svg");
    background-size: cover;
    background-position: center;
    height: calc(100svh - 88px);
    max-height: 1200px;
    width: 100%;
    max-width: 2000px;
    padding: 1rem;
    justify-content: flex-end;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;
    position: relative;

    @media (min-width: $big-tablet-screen) {
      align-items: flex-start;
      padding: 2rem;
      gap: 2rem;
      height: calc(100svh - 80px);
    }

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        190deg,
        rgba(255, 255, 255, 0) 60%,
        $secondary-color
      );
    }

    & source {
      display: none;
    }

    &__img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__title {
      color: $primary-color;
      z-index: 1;
      max-width: 720px;
      text-wrap: balance;
      text-shadow: $shadow-text;
    }

    &__buttons {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;

      & .button-primary {
        background-color: $primary-color;
        color: $secondary-color;
        cursor: pointer;
        z-index: 1;
        width: 100%;

        @media (min-width: $big-tablet-screen) {
          width: fit-content;
        }
      }
      & .button-secondary {
        border-color: $primary-color;
        color: $primary-color;
        cursor: pointer;
        z-index: 1;
        width: 100%;

        @media (min-width: $big-tablet-screen) {
          width: fit-content;
        }
      }
    }
  }

  &__description {
    font-size: $subtitles;
    line-height: $line-height-subtitles;
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

    &__title {
      width: 100%;
    }

    &__description {
      width: 100%;

      &:deep(p) {
        font-size: $subtitles;
        font-weight: $skinny-thick;
        line-height: $line-height-subtitles;
      }
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

        &__frames {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1rem;
          margin-top: 1rem;
          place-items: center;

          &__frame {
            padding: 1rem 1rem 3rem 1rem;
            background-color: $primary-color;
            border-radius: $radius;
            box-shadow: $shadow;
            width: 100%;
            max-width: 300px;
            height: 380px;

            &:nth-of-type(1n) {
              transform: rotate(0deg);
            }
            &:nth-of-type(2n) {
              transform: rotate(-6deg);
            }
            &:nth-of-type(3n) {
              transform: rotate(6deg);
            }
            &:nth-of-type(4n) {
              transform: rotate(0deg);
            }

            &__img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              border-radius: $radius;
              box-shadow: $shadow;
            }
          }
        }
      }

      &__frame {
        padding: 1rem 1rem 3rem 1rem;
        background-color: $primary-color;
        border-radius: $radius;
        box-shadow: $shadow;
        width: 100%;
        height: 560px;
        max-width: 450px;
        transform: rotate(6deg);

        &__img {
          width: 100%;
          height: 100%;
          max-height: 528px;
          object-fit: cover;
          border-radius: $radius;
          box-shadow: $shadow;
        }
      }
    }

    &__video {
      width: 100%;
      height: 400px;
      border-radius: $radius;
    }
  }
}
</style>
