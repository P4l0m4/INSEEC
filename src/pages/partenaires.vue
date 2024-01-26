<script setup lang="ts">
const story = await useAsyncStoryblok("partners", { version: "published" });

useHead(() => {
  return {
    title: "Partenaires et Associations | INSEEC Campus Chambéry Savoie",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Découvrez les partenaires de l'INSEEC Campus Chambéry Savoie.",
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
    name: "Partenaires et Associations",
    url: window.location.href,
  },
];
</script>
<template>
  <section class="partners">
    <picture class="partners__banner">
      <source
        media="(min-width: 1100px)"
        :srcset="story.content.banner.filename"
      />
      <source
        media="(min-width: 600px)"
        :srcset="story.content.mediumBanner.filename"
      />

      <img
        class="partners__banner__img"
        :src="story.content.smallBanner.filename"
        :alt="story.content.smallBanner.alt"
      />
      <h1 class="partners__banner__title titles">
        A nos côtés depuis plusieurs années
      </h1>
      <div class="partners__banner__buttons">
        <NuxtLink
          class="partners__banner__buttons__button button-primary"
          to="#partners"
          >Découvrir nos partenaires</NuxtLink
        >
        <NuxtLink
          class="events__banner__buttons__button button-secondary"
          target="_blank"
          to="https://www.inseec.com/procedures-admissions/"
          >M'inscrire à l'INSEEC Chambéry</NuxtLink
        >
      </div>
    </picture>
    <Container id="partners">
      <div class="partners__companies">
        <h2 class="partners__companies__title titles">
          Entreprises partenaires
        </h2>
        <div class="partners__companies__list">
          <div
            class="partners__companies__list__company"
            v-for="company in story.content.companies"
            :key="company._uid"
            :style="`background-image: linear-gradient(
      190deg,
      rgba(255, 255, 255, 0) 40%,
      #2a3b6b
    ), url('${company.image.filename}')`"
          >
            <div class="partners__companies__list__company__txt">
              <span class="partners__companies__list__company__txt__name">{{
                company.name
              }}</span>

              <p class="partners__companies__list__company__txt__description">
                {{ company.description }}
              </p>
            </div>
          </div>
        </div>
      </div></Container
    >
    <Container id="associations">
      <div class="partners__clubs">
        <h2 class="partners__clubs__title titles">Associations</h2>
        <div class="partners__clubs__list">
          <div
            class="partners__clubs__list__club"
            v-for="association in story.content.associations"
            :key="association._uid"
            :style="`background-image: linear-gradient(
      190deg,
      rgba(255, 255, 255, 0) 40%,
      #2a3b6b
    ), url('${association.image.filename}')`"
          >
            <div class="partners__clubs__list__club__txt">
              <span class="partners__clubs__list__club__txt__name">{{
                association.name
              }}</span>

              <p class="partners__clubs__list__club__txt__description">
                {{ association.description }}
              </p>
            </div>
          </div>
        </div>
      </div></Container
    >
  </section>
  <News />
  <JsonldBreadcrumb :links="breadcrumbs" />
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

  &__companies {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;

    @media (min-width: $big-tablet-screen) {
      gap: 4rem;
    }

    &__title {
      width: 100%;
    }

    &__list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1rem;
      width: 100%;

      @media (min-width: $big-tablet-screen) {
        gap: 2rem;
      }

      &__company {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background-image: url("@/assets/images/placeholder.svg");
        background-color: $text-color;
        background-size: cover;
        background-position: center;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        border-radius: $radius;
        height: 300px;
        overflow: hidden;
        cursor: pointer;
        filter: grayscale(20%);
        transition: filter 0.4s ease;

        &:hover {
          filter: grayscale(0%);
        }

        &:hover > &__txt {
          margin-bottom: 0;
        }

        &__txt {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1rem;
          color: $primary-color;
          backdrop-filter: blur(4px);
          margin-bottom: -4rem;
          transition: margin-bottom 0.4s ease;

          &__name {
            text-shadow: $shadow-text;
          }

          &__description {
            font-size: $small-text;
            height: 48px;
            overflow: hidden;
            text-shadow: $shadow-text;
          }
        }
      }
    }
  }

  &__clubs {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;

    @media (min-width: $big-tablet-screen) {
      gap: 4rem;
    }

    &__title {
      width: 100%;
    }

    &__list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1rem;
      width: 100%;

      @media (min-width: $big-tablet-screen) {
        gap: 2rem;
      }

      &__club {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background-image: url("@/assets/images/placeholder-person.webp");
        background-color: $text-color;
        background-size: cover;
        background-position: center;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        border-radius: $radius;
        height: 300px;
        overflow: hidden;
        cursor: pointer;
        filter: grayscale(20%);
        transition: filter 0.4s ease;

        &:hover {
          filter: grayscale(0%);
        }

        &:hover > &__txt {
          margin-bottom: 0;
        }

        &__txt {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1rem;
          color: $primary-color;
          backdrop-filter: blur(4px);
          margin-bottom: -10rem;
          transition: margin-bottom 0.4s ease;

          &__name {
            text-shadow: $shadow-text;
          }

          &__description {
            font-size: $small-text;
            height: 9rem;
            overflow: hidden;
            text-shadow: $shadow-text;
          }
        }
      }
    }
  }
}
</style>
