<template>
  <section class="index">
    <div class="index__banner">
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
        <NuxtLink class="index__banner__txt__link" to="/campus"
          >En savoir plus</NuxtLink
        >
      </div>
    </div>

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
          <NuxtLink class="index__categories__boxes__link" to="/intervenants"
            >INTERVENANTS</NuxtLink
          >
          <NuxtLink class="index__categories__boxes__link" to="/partenaires"
            >PARTENAIRES</NuxtLink
          >
        </div>
      </div></Container
    >

    <iframe
      class="index__video"
      src="https://www.youtube.com/embed/1N-n2IGfsps?si=WHCjPNyIiYvzkOoU"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>

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
            De multiples formations peuvent également être suivi que ce soit en
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
    <Container>
      <div class="index__news">
        <h2 class="index__news__title titles">
          Plus de news
          <NuxtLink
            class="index__news__title__link button-primary"
            to="/actualites"
            >Voir toutes les actualités</NuxtLink
          >
        </h2>
        <div class="index__news__articles">
          <NuxtLink class="index__news__articles__article" to="/">
            <h3 class="index__news__articles__article__title">
              Titre de l'article
            </h3>
          </NuxtLink>
          <NuxtLink class="index__news__articles__article" to="/">
            <h3 class="index__news__articles__article__title">
              Titre de l'article
            </h3>
          </NuxtLink>
          <NuxtLink class="index__news__articles__article" to="/">
            <h3 class="index__news__articles__article__title">
              Titre de l'article
            </h3>
          </NuxtLink>
          <NuxtLink class="index__news__articles__article" to="/">
            <h3 class="index__news__articles__article__title">
              Titre de l'article
            </h3>
          </NuxtLink>
          <NuxtLink class="index__news__articles__article" to="/">
            <h3 class="index__news__articles__article__title">
              Titre de l'article
            </h3>
          </NuxtLink>
          <NuxtLink class="index__news__articles__article" to="/">
            <h3 class="index__news__articles__article__title">
              Titre de l'article
            </h3>
          </NuxtLink>
        </div>
      </div></Container
    >
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
    background-image: url("@/assets/images/placeholder.svg");
    background-size: cover;
    background-position: center;
    height: 60svh;
    width: 100%;
    position: relative;
    margin-bottom: 6rem;

    @media (min-width: $big-tablet-screen) {
      margin-bottom: 2rem;
    }

    &__txt {
      display: flex;
      flex-direction: column;
      background-color: $secondary-color;
      padding: 1rem;
      border-radius: $radius;
      color: $primary-color;
      max-width: 450px;
      gap: 1rem;
      position: absolute;
      bottom: -6rem;
      left: 1rem;
      right: 1rem;

      @media (min-width: $big-tablet-screen) {
        bottom: -4rem;
        right: 4rem;
        left: inherit;
      }

      &__title {
        font-size: 1.25rem;
        font-weight: $thick;
      }

      &__link {
        color: $primary-color;
        text-decoration: underline;
        text-underline-offset: 2px;
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
        text-shadow: $shadow;
        filter: grayscale(20%);
        transition:
          background-position 0.4s ease,
          filter 0.4s ease;

        &:hover {
          background-position: center right;
          filter: grayscale(0%);
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

  &__news {
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
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      justify-content: center;
      width: 100%;
      gap: 1rem;
      @media (min-width: $big-tablet-screen) {
        gap: 2rem;
      }

      &__article {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 200px;
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
          text-shadow: $shadow;
        }
      }
    }
  }
}
</style>
