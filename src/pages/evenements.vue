<template>
  <section class="events">
    <div class="events__banner">
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
          <NuxtLink to="#eventname" class="events__showcase__list__link"
            >RACLETTE CUP</NuxtLink
          >
          <NuxtLink to="#eventname" class="events__showcase__list__link"
            >FESTICOLOR</NuxtLink
          >
          <NuxtLink to="#eventname" class="events__showcase__list__link"
            >BUSINESS GAME</NuxtLink
          >
          <NuxtLink to="#eventname" class="events__showcase__list__link"
            >GRAINES DE HIGH FIVE</NuxtLink
          >
          <NuxtLink to="#eventname" class="events__showcase__list__link"
            >ANIMATIONS INTERNES</NuxtLink
          >
          <NuxtLink to="#eventname" class="events__showcase__list__link"
            >SOIREE FRIENDS</NuxtLink
          >
          <NuxtLink to="#eventname" class="events__showcase__list__link"
            >TRIFT SHOP</NuxtLink
          >
          <NuxtLink to="#eventname" class="events__showcase__list__link"
            >CONCOURS DE VENTE</NuxtLink
          >
          <NuxtLink to="#eventname" class="events__showcase__list__link"
            >REMISE DES DIPLÔMES</NuxtLink
          >
          <NuxtLink to="#eventname" class="events__showcase__list__link"
            >CHALLENGE DE PROSPECTION & DE VENTE</NuxtLink
          >
        </div>
      </div></Container
    >

    <Container id="#eventname">
      <div class="events__presentation">
        <h2 class="events__presentation__title titles">
          RACLETTE CUP, LA PLUS GRANDE RACLETTE ETUDIANTE DU MONDE
        </h2>
        <p class="events__presentation__description subtitles">
          Depuis 2018, l’association étudiante de l’INSEEC Campus Chambéry
          Savoie, Campus Events, organise chaque année la
          <strong>Raclette Cup.</strong>
        </p>
        <div class="events__presentation__wrapper">
          <div class="events__presentation__wrapper__txt">
            <p class="events__presentation__wrapper__txt__description">
              Le temps d’une soirée, un
              <strong
                >véritable restaurant éphémère de 2 500 mètres carrés</strong
              >
              est agencé sur l’esplanade du campus de l’INSEEC Chambéry Savoie.
              La réussite de cet événement vient aussi de la prouesse technique
              pour disposer les 150 tables avec les 150 appareils à raclete
              TEFAL. <strong>Cet événement 100% étudiant</strong> met en place
              le principe pédagogique de l’école : le
              <strong>Learning by doing</strong>, soit l’idée d’apprendre en
              faisant !
            </p>
            <p class="events__presentation__wrapper__txt__description">
              En effet, ce projet est piloté par de nombreux étudiants de 2e
              année INSEEC Bachelor qui encadrent l’ensemble des bénévoles
              INSEEC, les 1ères années. De 19 h 00 à minuit, ce sont 80
              bénévoles qui découvrent l’événementiel et metent en valeur leur
              savoir-être ainsi que leur savoir-faire. Ils ont un seul objectif
              : tout faire pour que les 1200 participants ne manquent de rien et
              pour les satisfaire, ce sont 10 000 tranches de charcuterie, 500
              kg de fromage de Raclete d’Entremont et 400 kg de pommes de terre
              qu’ils vont servir aux convives, marchandises offertes par les
              partenaires de l’événement (Salaisons du Cayon, Brasserie du
              Mont-Blanc, etc)
            </p>

            <p class="events__presentation__wrapper__txt__description">
              Le soir de l’événement, tous les partenaires se retrouvent au
              milieu des étudiants, avec des bénévoles qui donnent leur maximum
              pour donner du bonheur à tous ; c’est
              <strong
                >cette magie intergénérationnelle qui donne à ce moment festif
                et convivial un côté unique et qui rend heureux tout le
                monde.</strong
              >
              Entre déguisement de ski vintage pour l’ensemble des participants
              et concert de DJ Matafan, sur une piste de danse composée de 200
              kg de paille, ce moment festif est toujours dès plus agréable !
            </p>
          </div>

          <img
            class="events__presentation__wrapper__img"
            src="@/assets/images/placeholder.svg"
            alt="campus inseec chambéry"
          />
        </div>
        <img
          class="events__presentation__img"
          src="@/assets/images/placeholder.svg"
          alt="evenement inseec chambéry"
        /></div
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
        text-shadow: $shadow;
        text-wrap: balance;
        transition:
          background-size 0.4s ease,
          filter 0.4s ease;

        &:hover {
          background-size: 140%;
          filter: grayscale(40%);
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
