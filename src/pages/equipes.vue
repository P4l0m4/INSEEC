<script setup>
const story = await useAsyncStoryblok("poles", { version: "published" });

useHead(() => {
  return {
    title: "Responsables & Intervenants | INSEEC Campus Chambéry Savoie",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Découvrez les responsables de pôles et les intervanants de l'INSEEC Campus Chambéry Savoie.",
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Responsables & Intervenants | INSEEC Campus Chambéry Savoie",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: window.location.href,
      },
      {
        hid: "og:image",
        property: "og:image",
        content: story.value.content.smallBanner.filename,
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Découvrez les responsables de pôles et les intervanants de l'INSEEC Campus Chambéry Savoie.",
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
    name: "Responsables & Intervenants",
    url: window.location.href,
  },
];

story.value.content.list.forEach((poles) => {
  poles.persons.forEach((person) => {
    useJsonld(() => ({
      "@context": "https://schema.org",
      "@type": "Person",
      name: person.name,
      jobTitle: person.role,
      image: person.image.filename,
      worksFor: {
        "@type": "Organization",
        name: "INSEEC Chambéry",
        url: window.location.origin,
      },
    }));
  });
});
</script>
<template>
  <section class="employees">
    <picture class="employees__banner">
      <source
        media="(min-width: 1100px)"
        :srcset="story.content.banner.filename"
      />
      <source
        media="(min-width: 600px)"
        :srcset="story.content.mediumBanner.filename"
      />

      <img
        class="employees__banner__img"
        :src="story.content.smallBanner.filename"
        :alt="story.content.smallBanner.alt"
      />
      <h1 class="employees__banner__title titles">
        Mettre des visages sur vos programmes
      </h1>
      <div class="employees__banner__buttons">
        <NuxtLink
          class="employees__banner__buttons__button button-primary"
          to="#speakers"
          >Découvrir nos intervenants</NuxtLink
        >
        <NuxtLink
          class="employees__banner__buttons__button button-secondary"
          target="_blank"
          to="https://www.inseec.com/procedures-admissions/"
          >M'inscrire à l'INSEEC Chambéry</NuxtLink
        >
      </div>
    </picture>

    <Container
      v-for="pole in story.content.list"
      :key="pole._uid"
      id="speakers"
    >
      <div class="employees__pole">
        <h2 class="employees__pole__title subtitles">
          {{ pole.title }}
        </h2>
        <div class="employees__pole__people">
          <div
            class="employees__pole__people__person"
            v-for="person in pole.persons"
            :key="person._uid"
            :style="`background-image: linear-gradient(
      190deg,
      rgba(255, 255, 255, 0) 40%,
      #2a3b6b
    ), url('${person.image.filename}')`"
          >
            <div class="employees__pole__people__person__txt">
              <span class="employees__pole__people__person__txt__name">{{
                person.name
              }}</span>
              <span class="employees__pole__people__person__txt__role">
                {{ person.role }}
              </span>
              <p class="employees__pole__people__person__txt__description">
                {{ person.description }}
              </p>
            </div>
          </div>
        </div>
      </div></Container
    >

    <Container id="intervenants">
      <div class="employees__intervenants">
        <h2 class="employees__intervenants__title subtitles">
          Intervenants de l'INSEEC Chambéry
        </h2>
        <div class="employees__intervenants__people">
          <div
            class="employees__intervenants__people__person"
            v-for="intervenant in story.content.intervenants"
            :key="intervenant._uid"
            :style="`background-image: linear-gradient(
      190deg,
      rgba(255, 255, 255, 0) 40%,
      #2a3b6b
    ), url('${intervenant.image.filename}')`"
          >
            <div class="employees__intervenants__people__person__txt">
              <span
                class="employees__intervenants__people__person__txt__name"
                >{{ intervenant.name }}</span
              >
              <span class="employees__intervenants__people__person__txt__role">
                {{ intervenant.skills }}
              </span>
              <p
                class="employees__intervenants__people__person__txt__description"
              >
                {{ intervenant.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
    <Container>
      <NuxtLink
        class="employees__connection"
        to="/organigramme"
        target="_blank"
      >
        <h3 class="employees__connection__title subtitles">
          Découvrir l'organigramme de l'INSEEC Chambéry
        </h3>
        <img
          class="employees__connection__icon"
          src="@/assets/icons/arrow-blue.svg"
        />
      </NuxtLink>
    </Container>
  </section>
  <News />
  <JsonldBreadcrumb :links="breadcrumbs" />
</template>
<style lang="scss" scoped>
.employees {
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

  &__pole {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    &__people {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1rem;
      justify-content: center;

      @media (min-width: $big-tablet-screen) {
        gap: 2rem;
      }

      &__person {
        background-image: linear-gradient(
            190deg,
            rgba(255, 255, 255, 0) 20%,
            $text-color
          ),
          url("@/assets/images/placeholder-person.webp");
        background-size: cover;
        background-position: center;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        border-radius: $radius;
        height: 420px;
        overflow: hidden;
        cursor: pointer;
        filter: grayscale(20%);
        transition:
          background-position 0.4s ease,
          filter 0.4s ease;

        &:hover {
          background-position: center right;
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
          margin-bottom: -2.25rem;
          transition: margin-bottom 0.4s ease;

          &__name {
            text-shadow: $shadow-text;
          }

          &__role {
            font-size: $base-text;
            font-weight: $thick;
            margin-top: -0.5rem;
            text-shadow: $shadow-text;
          }
          &__description {
            font-size: $small-text;
            height: 1.25rem;
            overflow: hidden;
            text-shadow: $shadow-text;
          }
        }
      }
    }
  }

  &__intervenants {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    &__people {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1rem;
      justify-content: center;

      @media (min-width: $big-tablet-screen) {
        gap: 2rem;
      }

      &__person {
        background-image: linear-gradient(
            190deg,
            rgba(255, 255, 255, 0) 20%,
            $text-color
          ),
          url("@/assets/images/placeholder-person.webp");
        background-size: cover;
        background-position: center;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        border-radius: $radius;
        height: 420px;
        overflow: hidden;
        cursor: pointer;
        filter: grayscale(20%);
        transition:
          background-position 0.4s ease,
          filter 0.4s ease;

        &:hover {
          background-position: center right;
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
          margin-bottom: -2.25rem;
          transition: margin-bottom 0.4s ease;

          &__name {
            text-shadow: $shadow-text;
          }

          &__role {
            font-size: $base-text;
            font-weight: $thick;
            margin-top: -0.5rem;
            text-shadow: $shadow-text;
          }
          &__description {
            font-size: $small-text;
            height: 1.25rem;
            overflow: hidden;
            text-shadow: $shadow-text;
          }
        }
      }
    }
  }

  &__connection {
    display: flex;
    background-color: $primary-color;
    padding: 1rem;
    gap: 1rem;
    justify-content: center;
    border-radius: $radius;
    align-items: center;

    @media (min-width: $big-tablet-screen) {
      gap: 2rem;
      padding: 2rem;
      justify-content: space-between;
    }

    &:hover > &__icon {
      opacity: 1;
      transform: translate(-2rem) rotate(-90deg);
    }
    &__title {
      width: 100%;
    }
    &__icon {
      width: 30px;
      height: 30px;
      transform: rotate(-90deg);
      opacity: 0.6;
      transition:
        opacity 0.4s,
        transform 0.4s;
    }
  }
}
</style>
