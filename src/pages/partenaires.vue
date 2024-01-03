<script setup lang="ts">
const story = await useAsyncStoryblok("partners", { version: "published" });

useHead(() => {
  return {
    title: "Partenaires et Associations | INSEEC Campus Chambéry Savoie",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Déouvrez les partenaires de l'INSEEC Campus Chambéry Savoie.",
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
    <div
      class="partners__banner"
      :style="`background-image: url('${story.content.banner.filename}')`"
    >
      <h1 class="partners__banner__title subtitles">
        A nos côtés depuis plusieurs années
      </h1>
    </div>
    <Container>
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
      rgba(255, 255, 255, 0) 20%,
      #202020
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
      rgba(255, 255, 255, 0) 20%,
      #202020
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
}
</style>
