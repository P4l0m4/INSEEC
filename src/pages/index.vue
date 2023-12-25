<script setup lang="ts">
const story = await useAsyncStoryblok("home", { version: "published" });

useHead(() => {
  return {
    title: "Accueil | INSEEC Campus Chambéry Savoie",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "L’INSEEC Campus Chambéry Savoie regroupe de nombreux étudiants Bachelor (BAC+1 à BAC+3) et MSc (BAC+4 à BAC+5). De multiples formations peuvent également être suivies en rythme classique mais également en alternance",
      },
    ],
  };
});
</script>
<template>
  <section class="index">
    <div
      class="index__banner"
      :style="`background-image: url('${story.content.banner.filename}')`"
    >
      <div class="index__banner__txt">
        <h1 class="index__banner__txt__title subtitles">
          L’INSEEC Campus Chambéry Savoie
        </h1>
        <p class="index__banner__txt__description">
          Niché au cœur d'Aix Riviera, le campus de Chambéry bénéficie d'un
          emplacement privilégié, entre les eaux sereines du lac et les
          majestueuses montagnes, offrant ainsi un cadre remarquable à nos
          étudiants.
        </p>
        <NuxtLink
          class="index__banner__txt__link"
          target="_blank"
          to="https://www.inseec.com/procedures-admissions/"
          >M'inscrire à l'INSEEC Chambéry</NuxtLink
        >
      </div>
      <div class="index__banner__socials">
        <a
          class="index__banner__socials__link"
          href="https://www.facebook.com/INSEEC.Chambery/"
          aria-label="facebook inseec chambéry"
          target="_blank"
          ><img
            class="index__banner__socials__link__icon scale-on-hover"
            src="@/assets/icons/facebook.svg"
            alt="icone facebook inseec chambéry"
        /></a>
        <a
          class="index__banner__socials__link"
          href="https://www.instagram.com/inseec_campus_chambery/"
          aria-label="instagram inseec chambéry"
          target="_blank"
          ><img
            class="index__banner__socials__link__icon scale-on-hover"
            src="@/assets/icons/instagram.svg"
            alt="icone instagram inseec chambéry"
        /></a>
        <a
          class="index__banner__socials__link"
          href="https://www.linkedin.com/school/inseeccampuschamberysavoie/?originalSubdomain=fr"
          aria-label="linkedin inseec chambéry"
          target="_blank"
          ><img
            class="index__banner__socials__link__icon scale-on-hover"
            src="@/assets/icons/linkedin.svg"
            alt="icone linkedin inseec chambéry"
        /></a>
      </div>
    </div>

    <!-- <EventsCalendar /> -->

    <Container>
      <div class="index__presentation">
        <div class="index__presentation__txt">
          <h2 class="index__presentation__txt__title titles">
            L’INSEEC Campus Chambéry Savoie
          </h2>
          <p class="index__presentation__txt__description">
            L’INSEEC Campus Chambéry Savoie adopte une ambiance à l'américaine,
            offrant
            <strong
              >de nombreuses installations destinées à l’ensemble des
              étudiants.</strong
            >
            Il abonde en espaces de travail favorisant le co-working convivial.
            Une "salle du futur" a également vu le jour il y a quelques années,
            révolutionnant l'approche pédagogique avec un écran interactif
            novateur.
          </p>
          <p class="index__presentation__txt__description">
            Ce campus dispose également de salle dédiée aux cours de
            <strong>développement informatique</strong>, ainsi que de
            <strong
              >salles de classe modernes, plaisantes et spacieuses.</strong
            >
            Un
            <strong
              >grand amphithéâtre permet également de réunir un grand nombre
              d’étudiants pour divers événements. </strong
            >Les étudiants bénéficient d'une cafétéria-restaurant et d'une
            variété d'espaces de restauration. À l'extérieur, un éventail
            d'espaces verts, un parking privé et un terrain de volley sont à
            leur disposition.
          </p>
          <p class="index__presentation__txt__description">
            En somme, le campus de Chambéry se distingue par des
            <strong
              >installations répondant à tous les besoins de nos
              étudiants.</strong
            >
          </p>
        </div>

        <img
          class="index__presentation__img"
          src="@/assets/images/placeholder.svg"
          alt="campus inseec chambéry"
        />
      </div>
    </Container>
    <Container>
      <div class="index__categories">
        <h2 class="index__categories__title titles">
          L’INSEEC Campus Chambéry Savoie, c’est aussi des...
        </h2>
        <div class="index__categories__boxes">
          <NuxtLink class="index__categories__boxes__link" to="/evenements"
            >ÉVÉNEMENTS</NuxtLink
          >
          <NuxtLink
            class="index__categories__boxes__link"
            to="/responsables-poles"
            >INTERVENANTS</NuxtLink
          >
          <NuxtLink class="index__categories__boxes__link" to="/partenaires"
            >PARTENAIRES</NuxtLink
          >
        </div>
      </div></Container
    >
    <Container>
      <iframe
        class="index__video"
        src="https://www.youtube.com/embed/1N-n2IGfsps?si=WHCjPNyIiYvzkOoU"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe
    ></Container>

    <Container>
      <div class="index__stats">
        <div class="index__stats__txt">
          <h2 class="index__stats__txt__title titles">
            L’INSEEC Campus Chambéry Savoie, en chiffres...
          </h2>
          <p class="index__stats__txt__description">
            L’INSEEC Campus Chambéry Savoie regroupe de nombreux étudiants
            <strong>Bachelor</strong> (BAC+1 à BAC+3) et
            <strong>MSc</strong> (BAC+4 à BAC+5) au sein du campus.
          </p>
          <p class="index__stats__txt__description">
            De multiples formations peuvent également être suivies que ce soit
            en
            <strong>rythme classique</strong> mais également en
            <strong>alternance</strong> (à partir de BAC+3).
          </p>
          <p class="index__stats__txt__description">
            En quelques chiffres l’INSEEC Campus Chambéry Savoie ça donne ça :
          </p>
        </div>
        <img
          class="index__presentation__img"
          src="@/assets/images/placeholder.svg"
          alt="campus inseec chambéry"
        /></div
    ></Container>

    <News />
  </section>
</template>
<style lang="scss" scoped>
.index {
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
    height: calc(100svh - 88px);
    max-height: 1200px;
    width: 100%;
    max-width: 2000px;
    margin-bottom: 6rem;
    padding: 1rem;
    justify-content: space-between;
    align-items: flex-end;
    gap: 1rem;
    position: relative;

    @media (min-width: $big-tablet-screen) {
      margin-bottom: 2rem;
      padding: 2rem;
      gap: 2rem;
      height: calc(100svh - 96px);
    }

    &__txt {
      display: flex;
      flex-direction: column;
      // background-color: $secondary-color;
      padding: 1rem;
      border-radius: $radius;
      color: $primary-color;
      width: 100%;
      gap: 1rem;
      // height: 100%;
      justify-content: flex-end;
      align-items: flex-end;
      backdrop-filter: blur(2px);
      box-shadow: $shadow;
      border: 1px solid rgba(255, 255, 255, 0.1);

      @media (min-width: $big-tablet-screen) {
        max-width: 720px;
        bottom: -4rem;
        right: 4rem;
        left: inherit;
        padding: 2rem;
      }

      &__title {
        width: 100%;
        font-size: 1.25rem;
        font-weight: $thick;
        font-size: $subtitles;
        text-shadow: $shadow-text;
      }

      &__description {
        font-size: $base-text;
        font-weight: $skinny;
        text-shadow: $shadow-text;
        width: 100%;
      }

      &__link {
        font-size: $small-text;
        color: $primary-color;
        text-decoration: underline;
        text-underline-offset: 2px;
        text-shadow: $shadow-text;
      }
    }
    &__socials {
      display: flex;
      gap: 0.5rem;
      flex-direction: column;
      @media (min-width: $big-tablet-screen) {
        flex-direction: row;
      }

      &__link {
        display: flex;
        cursor: pointer;

        &__icon {
          width: 24px;
          height: 24px;
        }
      }
    }
  }

  &__presentation {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-direction: column;

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
    }

    &__img {
      width: 100%;
      object-fit: cover;
      border-radius: $radius;
    }
  }

  &__categories {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    @media (min-width: $big-tablet-screen) {
      gap: 2rem;
    }

    &__boxes {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      width: 100%;

      @media (min-width: $big-tablet-screen) {
        flex-direction: row;
        gap: 2rem;
      }

      &__link {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 200px;
        color: $primary-color;
        text-align: center;
        background-image: url("@/assets/images/placeholder.svg");
        background-size: cover;
        background-position: center;
        font-size: $subtitles;
        font-weight: $skinny-thick;
        box-shadow: $shadow;
        border-radius: $radius;
        text-shadow: $shadow-text;
        filter: grayscale(20%);
        transition:
          background-position 0.4s ease,
          filter 0.4s ease;

        &:hover {
          background-position: center right;
          filter: grayscale(0%);
        }

        &:nth-of-type(1) {
          background-image: url("@/assets/images/raclette-cup.webp");
        }
        &:nth-of-type(2) {
          background-image: url("@/assets/images/intervenants.webp");
        }
        &:nth-of-type(3) {
          background-image: url("@/assets/images/hands.webp");
        }

        @media (min-width: $big-tablet-screen) {
          height: 340px;
        }
      }
    }
  }

  &__video {
    width: 100%;
    height: 400px;

    @media (min-width: $big-tablet-screen) {
      height: 500px;
    }
  }

  &__stats {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-direction: column;

    @media (min-width: $big-tablet-screen) {
      flex-direction: row;
      gap: 2rem;
    }

    &__txt {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;

      @media (min-width: $big-tablet-screen) {
        gap: 2rem;
      }

      &__title {
        text-wrap: balance;
      }
    }

    &__img {
      width: 100%;
      object-fit: cover;
      border-radius: $radius;
      box-shadow: $shadow;
    }
  }
}
</style>
