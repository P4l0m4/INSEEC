<script setup>
import { stringToSlug } from "@/utils/slugify.js";
const story = await useAsyncStoryblok("programs", { version: "published" });
const route = useRoute();
const programSlug = route.params.slug;
const program = story.value.content.programsList.find(
  (p) => stringToSlug(`${p.level} ${p.name}`) === programSlug
);
useHead(() => {
  return {
    title: program.title,
    meta: [
      {
        hid: "description",
        name: "description",
        content: program.details,
      },
    ],
  };
});
//JSONLD

const breadcrumbs = [
  {
    name: "Accueil",
    url: window.location.origin,
  },
  {
    name: "Programmes",
    url: window.location.origin + "/programmes",
  },
  {
    name: program.title,
    url: window.location.href,
  },
];
</script>

<template>
  <section class="program">
    <picture class="program__banner">
      <source
        media="(min-width: 1100px)"
        :srcset="story.content.banner.filename"
      />
      <source
        media="(min-width: 600px)"
        :srcset="story.content.mediumBanner.filename"
      />

      <img
        class="program__banner__img"
        :src="story.content.smallBanner.filename"
        :alt="story.content.smallBanner.alt"
      />
      <h1 class="program__banner__title titles">
        {{ program.name }}
      </h1>

      <div class="program__banner__buttons">
        <NuxtLink
          class="program__banner__buttons__button button-primary"
          to="#program-details"
          >Découvrir la formation</NuxtLink
        >
        <NuxtLink
          class="program__banner__buttons__button button-secondary"
          target="_blank"
          to="https://www.inseec.com/procedures-admissions/"
          >M'inscrire à l'INSEEC Chambéry</NuxtLink
        >
      </div>
    </picture>
    <Container id="program-details">
      <div class="program__details">
        <div class="program__details__txt">
          <!-- <h1 class="program__details__txt__title titles">
            {{ program.name }}
          </h1> -->

          <p class="program__details__txt__description">
            {{ program.details }}
          </p>
        </div>

        <div class="program__details__tags">
          <div class="program__details__tags__tag" v-if="program.price">
            <img
              class="program__details__tags__tag__img"
              src="@/assets/icons/podium.svg"
              alt="icone tag inseec"
            />
            {{ program.level }}
          </div>
          <div class="program__details__tags__tag" v-if="program.price">
            <img
              class="program__details__tags__tag__img"
              src="@/assets/icons/euro.svg"
              alt="icone tag inseec"
            />
            {{ program.price }}
          </div>
          <div class="program__details__tags__tag" v-if="program.duration">
            <img
              class="program__details__tags__tag__img"
              src="@/assets/icons/calendar.svg"
              alt="icone tag inseec"
            />
            {{ program.duration }}
          </div>

          <div class="program__details__tags__tag" v-if="program.evaluation">
            <img
              class="program__details__tags__tag__img"
              src="@/assets/icons/grade.svg"
              alt="icone tag inseec"
            />
            {{ program.evaluation }}
          </div>
          <div class="program__details__tags__tag" v-if="program.RNCP">
            <img
              class="program__details__tags__tag__img"
              src="@/assets/icons/star.svg"
              alt="icone tag inseec"
            />Titre RNCP Niveau

            {{ program.RNCP }}
          </div>
          <div class="program__details__tags__tag" v-if="program.pole">
            <img
              class="program__details__tags__tag__img"
              src="@/assets/icons/category.svg"
              alt="icone tag inseec"
            />
            {{ program.pole }}
          </div>
          <div class="program__details__tags__tag" v-if="program.accessibility">
            <img
              class="program__details__tags__tag__img"
              src="@/assets/icons/accessible.svg"
              alt="icone tag inseec"
            />
            {{ program.accessibility }}
          </div>
        </div>
      </div>

      <div class="program__info">
        <div class="program__info__objectives" v-if="program.objectives">
          <h2 class="program__info__objectives__title subtitles">Objectifs</h2>

          <div class="program__info__objectives__tags">
            <div
              class="program__info__objectives__tags__tag"
              v-for="objective in program.objectives"
            >
              <img
                class="program__info__objectives__tags__tag__img"
                src="@/assets/icons/medal.svg"
                alt="icone medal inseec"
              />
              {{ objective.goal }}
            </div>
          </div>
        </div>
        <div class="program__info__prerequisites" v-if="program.prerequisites">
          <h2 class="program__info__prerequisites__title subtitles">
            Prérequis de la formation
          </h2>
          <ul class="program__info__prerequisites__ul">
            <li
              class="program__info__prerequisites__ul__li"
              v-for="prerequisite in program.prerequisites"
            >
              <img
                class="program__info__prerequisites__ul__li__img"
                src="@/assets/icons/check.svg"
                alt="icone checkbox inseec"
              />
              {{ prerequisite.text }}
            </li>
          </ul>
        </div>
      </div>
    </Container>
  </section>
  <JsonldBreadcrumb :links="breadcrumbs" />
</template>
<style scoped lang="scss">
.program {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;

  @media (min-width: $big-tablet-screen) {
    gap: 6rem;
  }

  &__banner {
    display: flex;
    background-image: url("@/assets/images/placeholder.svg");
    background-size: cover;
    background-position: center;
    height: calc(100svh - 84px);
    max-height: 1200px;
    width: 100%;
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
      height: calc(100svh - 76px);
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

  &__details {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (min-width: $big-tablet-screen) {
      flex-direction: row;
      gap: 4rem;
    }

    &__txt {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      max-width: 600px;

      // &__title {
      //   display: flex;
      //   flex-direction: column;
      //   gap: 1rem;
      // }
    }

    &__tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      height: fit-content;
      max-width: 450px;

      &__tag {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        font-size: $base-text;
        font-weight: $skinny;
        color: $secondary-color;
        background-color: $secondary-color-ultra-faded;
        padding: 0.5rem 1rem;
        border-radius: 24px;
        height: fit-content;
        width: fit-content;

        &__img {
          width: 1rem;
          height: 1rem;
        }
      }
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    flex-direction: column;

    @media (min-width: $big-tablet-screen) {
      flex-direction: row;
      gap: 4rem;
    }

    &__objectives {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      max-width: 600px;

      &__tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;

        &__tag {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          font-size: $base-text;
          font-weight: $skinny;
          color: $secondary-color;
          background-color: $primary-color;
          box-shadow: $shadow;
          padding: 0.5rem 1rem;
          border-radius: 24px;
          height: fit-content;
          width: fit-content;

          &__img {
            width: 2.25rem;
            height: 2.25rem;

            @media (min-width: $big-tablet-screen) {
              width: 1rem;
              height: 1rem;
            }
          }
        }
      }
    }

    &__prerequisites {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      width: 100%;

      &__ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        &__li {
          display: flex;
          gap: 0.25rem;
          align-items: center;
          font-size: $base-text;

          &__img {
            width: 1rem;
            height: 1rem;
          }
        }
      }
    }
  }
}
</style>
