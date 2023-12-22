<script setup lang="ts">
const story = await useAsyncStoryblok("campus", { version: "published" });
</script>
<template>
  <section class="campus">
    <div
      class="campus__banner"
      :style="`background-image: url('${story.content.banner.filename}')`"
    >
      <h1 class="campus__banner__title">
        Découvre l’INSEEC Campus Chambéry Savoie
      </h1>
    </div>

    <Container>
      <div class="campus__presentation">
        <h2 class="campus__presentation__title titles">
          L'EXCEPTIONNEL CAMPUS DE L’INSEEC CHAMBÉRY
        </h2>
        <div class="campus__presentation__wrapper">
          <div class="campus__presentation__wrapper__txt">
            <h3 class="campus__presentation__wrapper__txt__title subtitles">
              Un environnement d'exception au coeur de la Savoie
            </h3>
            <p class="campus__presentation__wrapper__txt__description">
              Niché au cœur d'Aix Riviera, le campus de Chambéry bénéficie d'un
              <strong
                >emplacement privilégié, entre les eaux sereines du lac et les
                majestueuses montagnes</strong
              >, offrant ainsi un cadre remarquable à nos étudiants.
            </p>
            <p class="campus__presentation__wrapper__txt__description">
              S'étendant aux pieds des Alpes, Chambéry est du fait de son
              emplacement proche des plus grands lacs naturels de France. Cete
              ville se trouve à
              <strong
                >proximité immédiate de la Suisse, de l'Italie et de
                l'Allemagne, offrant ainsi un environnement géographique
                exceptionnel pour les études et pour la poursuite
                professionnelle</strong
              >
              de nos étudiants.
            </p>
          </div>

          <img
            class="campus__presentation__wrapper__img"
            src="@/assets/images/placeholder.svg"
            alt="campus inseec chambéry"
          />
        </div></div
    ></Container>

    <Container>
      <div class="campus__environment">
        <h2 class="campus__environment__title titles">
          UN EMPLACEMENT PROPICE A L’EMPLOI
        </h2>
        <p class="campus__environment__description">
          La région Rhône-Alpes, en tant que
          <strong>deuxième région économique de France</strong> et sixième
          d’Europe, représente un
          <strong>vivier considérable en termes d'emplois</strong>... Que ce
          soit dans la recherche de stage ou d’alternance mais également en
          débouché après un BAC+3 ou BAC+5.
        </p>
        <p class="campus__environment__description">
          La Savoie se distingue par son expertise indéniable dans les
          <strong>sports de montagne et les activités sportives</strong>,
          abritant la plus grande concentration nationale de leaders industriels
          et de PME/PMI innovantes dans les domaines du sport et des loisirs.
        </p>
        <p class="campus__environment__description">
          Notre campus est présent sur Savoie Technolac, joyau de l'innovation
          économique et du transfert technologique, qui arbore la certification
          ISO 14001 et s'impose comme un modèle de développement durable.
        </p>
      </div></Container
    >

    <Container>
      <div class="campus__presentation">
        <h2 class="campus__presentation__title titles">
          UN TERRITOIRE ET UNE ECOLE EN LIEN FORT AVEC LE SPORT
        </h2>
        <div class="campus__presentation__wrapper">
          <img
            class="campus__presentation__img"
            src="@/assets/images/placeholder.svg"
            alt="campus inseec chambéry"
          />
          <div class="campus__presentation__wrapper__txt">
            <p class="campus__presentation__wrapper__txt__description">
              La région Savoie - Haute-Savoie regorge d'opportunités
              touristiques, notamment grâce à ses
              <strong
                >stations de ski et ses nombreuses opportunités de sport
                outdoor.</strong
              >
              La destination Savoie Mont- Blanc, avec ses stations d'altitude
              parmi les plus prisées de France, offre des paysages idylliques
              pour les amateurs de tourisme.
            </p>
            <p class="campus__presentation__wrapper__txt__description">
              Chambéry se distingue par une architecture d'inspiration
              piémontaise. Son centre historique, niché au pied du château,
              dévoile un tissu urbain dense et singulier.
            </p>
          </div>
        </div>
      </div></Container
    >

    <img
      class="campus__img"
      src="@/assets/images/placeholder.svg"
      alt="campus inseec chambéry savoie"
    />
    <Container>
      <div class="campus__presentation">
        <h2 class="campus__presentation__title titles">
          UNE PÉDAGOGIE TOURNÉE A 100% VERS NOS ÉTUDIANTS
        </h2>
        <p class="campus__presentation__description subtitles">
          L’approche pédagogique sur notre campus de Chambéry se distingue par
          sa dynamique, axée sur le concept du
          <strong>"Learning by doing"</strong>.
        </p>
        <div class="campus__presentation__wrapper">
          <div class="campus__presentation__wrapper__txt">
            <p class="campus__presentation__wrapper__txt__description">
              Nous formons nos étudiants à la gestion de projets, les
              encourageant ainsi à
              <strong
                >développer leurs compétences entrepreneuriales tout en
                renforçant leur réseau professionnel. Le département des
                relations avec les entreprises</strong
              >, en collaboration avec notre système de "matching",
              <strong
                >prépare chaque étudiant à son immersion dans le monde
                professionnel.</strong
              >
            </p>
            <ul class="campus__presentation__wrapper__txt__ul">
              Nos étudiants bénéficient :
              <li class="campus__presentation__wrapper__txt__ul__li">
                D’un réseau exclusif de plus de
                <strong>1 000 partenaires</strong>
              </li>
              <li class="campus__presentation__wrapper__txt__ul__li">
                D’un
                <strong>dispositif adapté aux sportifs de haut niveau :</strong>
                un campus en ligne spécialement conçu pour répondre à leurs
                exigences
              </li>
              <li class="campus__presentation__wrapper__txt__ul__li">
                D’un<strong> suivi personnalisé</strong> pour chacun
              </li>
              <li class="campus__presentation__wrapper__txt__ul__li">
                D’<strong>associations étudiantes</strong> dynamiques
              </li>
              <li class="campus__presentation__wrapper__txt__ul__li">
                D’un
                <strong
                  >enseignement dispensé par de nombreux professionnels</strong
                >
                du secteur
              </li>
            </ul>
            <p class="campus__presentation__wrapper__txt__description">
              Le campus de Chambéry offre une variété de services adaptés à
              toutes les atentes et besoins de nos étudiants.
            </p>
          </div>

          <img
            class="campus__presentation__img"
            src="@/assets/images/placeholder.svg"
            alt="campus inseec chambéry"
          />
        </div></div
    ></Container>

    <div class="campus__mini-banner">
      <span class="campus__mini-banner__txt">Pour en savoir plus, RDV sur</span
      ><a
        class="campus__mini-banner__link button-primary"
        href="https://www.inseec.com/"
        >INSEEC.COM</a
      >
    </div>
  </section>
</template>

<style lang="scss" scoped>
.campus {
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
      flex-direction: column;
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
    }
  }

  &__environment {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: $big-tablet-screen) {
      gap: 2rem;
    }
  }

  &__img {
    width: 100%;
    object-fit: cover;
    height: 400px;

    @media (min-width: $big-tablet-screen) {
      height: 600px;
    }
  }

  &__mini-banner {
    display: flex;
    background-color: $secondary-color;
    padding: 1rem;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
    width: 100%;

    &__txt {
      color: $primary-color;
    }

    &__link {
      background-color: $primary-color;
      color: $secondary-color;
    }
  }
}
</style>
