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
          "L'INSEEC Campus Chambéry Savoie regroupe de nombreux étudiants Bachelor (BAC+1 à BAC+3) et MSc (BAC+4 à BAC+5). De multiples formations peuvent également être suivies en rythme classique mais également en alternance",
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Accueil | INSEEC Campus Chambéry Savoie",
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
          "L'INSEEC Campus Chambéry Savoie regroupe de nombreux étudiants Bachelor (BAC+1 à BAC+3) et MSc (BAC+4 à BAC+5). De multiples formations peuvent également être suivies en rythme classique mais également en alternance",
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
];
</script>
<template>
  <section class="index">
    <picture class="index__banner">
      <source
        media="(min-width: 1100px)"
        :srcset="story.content.banner.filename"
      />
      <source
        media="(min-width: 600px)"
        :srcset="story.content.mediumBanner.filename"
      />

      <img
        class="index__banner__img"
        :src="story.content.smallBanner.filename"
        :alt="story.content.smallBanner.alt"
      />
      <div class="index__banner__txt">
        <h1 class="index__banner__txt__title subtitles">
          L'INSEEC Campus Chambéry Savoie
        </h1>
        <p class="index__banner__txt__description">
          Niché au cœur d'Aix Riviera, le campus de Chambéry bénéficie d'un
          emplacement privilégié, entre les eaux sereines du lac et les
          majestueuses montagnes, offrant ainsi un cadre remarquable à nos
          étudiants.
        </p>
        <NuxtLink
          class="index__banner__txt__link button-secondary"
          target="_blank"
          to="https://www.inseec.com/procedures-admissions/"
          >M'inscrire à l'INSEEC Chambéry</NuxtLink
        >
      </div>
      <div class="index__banner__socials">
        <a
          class="index__banner__socials__link"
          href="https://www.tiktok.com/@inseec_campus_chambery?is_from_webapp=1&amp;sender_device=
pc"
          aria-label="tiktok inseec chambéry"
          target="_blank"
          ><img
            class="index__banner__socials__link__icon scale-on-hover"
            src="@/assets/icons/tiktok.svg"
            alt="icone tiktok inseec chambéry"
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
          href="https://www.linkedin.com/school/inseeccampuschamberysavoie/?originalSubdomain=fr"
          aria-label="linkedin inseec chambéry"
          target="_blank"
          ><img
            class="index__banner__socials__link__icon scale-on-hover"
            src="@/assets/icons/linkedin.svg"
            alt="icone linkedin inseec chambéry"
        /></a>
      </div>
    </picture>

    <Container>
      <div class="index__presentation">
        <div class="index__presentation__img">
          <h2 class="index__presentation__img__title titles">
            L'INSEEC Campus Chambéry Savoie
          </h2>
        </div>
        <div class="index__presentation__txt">
          <h3 class="index__presentation__txt__subtitle">
            L'INSEEC Campus Chambéry Savoie adopte une ambiance à l'américaine
          </h3>
          <p class="index__presentation__txt__description">
            Offrant
            <strong
              >de nombreuses installations destinées à l'ensemble des
              étudiants,</strong
            >
            il abonde en espaces de travail favorisant le co-working convivial.
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
              d'étudiants pour divers événements. </strong
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
          <NuxtLink
            class="index__presentation__txt__link button-tertiary"
            target="_blank"
            to="https://www.inseec.com/procedures-admissions/"
            >M'inscrire à l'INSEEC Chambéry</NuxtLink
          >
        </div>
      </div>
    </Container>
    <Container>
      <div class="index__categories">
        <h2 class="index__categories__title titles">
          L'INSEEC Campus Chambéry Savoie, c'est aussi des...
        </h2>
        <div class="index__categories__boxes">
          <NuxtLink class="index__categories__boxes__link" to="/evenements"
            >ÉVÉNEMENTS</NuxtLink
          >
          <NuxtLink class="index__categories__boxes__link" to="/equipes"
            >ÉQUIPES</NuxtLink
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
          <h2 class="index__stats__txt__title subtitles">
            L'INSEEC Campus Chambéry Savoie, en chiffres...
          </h2>
          <p class="index__stats__txt__description">
            L'INSEEC Campus Chambéry Savoie regroupe de nombreux étudiants
            <strong>Bachelor</strong> (BAC+1 à BAC+3) et
            <strong>MSc</strong> (BAC+4 à BAC+5) au sein du campus.
          </p>
          <p class="index__stats__txt__description">
            De multiples formations peuvent également être suivies que ce soit
            en
            <strong>rythme classique</strong> mais également en
            <strong>alternance</strong> (à partir de BAC+3).
          </p>

          <NuxtLink
            class="index__stats__txt__link button-tertiary"
            target="_blank"
            to="https://www.inseec.com/procedures-admissions/"
            >M'inscrire à l'INSEEC Chambéry</NuxtLink
          >
        </div>
        <img
          class="index__stats__img"
          src="@/assets/images/stats.webp"
          alt="campus inseec chambéry"
        /></div
    ></Container>

    <Container id="campus">
      <div class="index__presentation">
        <div id="savoie" class="index__presentation__img">
          <h2 class="index__presentation__img__title titles">
            L'EXCEPTIONNEL CAMPUS DE L'INSEEC CHAMBÉRY
          </h2>
        </div>

        <div class="index__presentation__txt">
          <h3 class="index__presentation__txt__title subtitles">
            Un environnement d'exception au coeur de la Savoie
          </h3>
          <p class="index__presentation__txt__description">
            Niché au cœur d'Aix Riviera, le campus de Chambéry bénéficie d'un
            <strong
              >emplacement privilégié, entre les eaux sereines du lac et les
              majestueuses montagnes</strong
            >, offrant ainsi un cadre remarquable à nos étudiants.
          </p>
          <p class="index__presentation__txt__description">
            S'étendant aux pieds des Alpes, Chambéry est du fait de son
            emplacement proche des plus grands lacs naturels de France. Cete
            ville se trouve à
            <strong
              >proximité immédiate de la Suisse, de l'Italie et de l'Allemagne,
              offrant ainsi un environnement géographique exceptionnel pour les
              études et pour la poursuite professionnelle</strong
            >
            de nos étudiants.
          </p>
          <NuxtLink
            class="index__presentation__txt__link button-tertiary"
            target="_blank"
            to="https://www.inseec.com/procedures-admissions/"
            >M'inscrire à l'INSEEC Chambéry</NuxtLink
          >
        </div>
      </div></Container
    >

    <Container>
      <div class="index__presentation">
        <div id="work" class="index__presentation__img">
          <h2 class="index__presentation__img__title titles">
            UN EMPLACEMENT PROPICE A L'EMPLOI
          </h2>
        </div>
        <div class="index__presentation__txt">
          <h3 class="index__presentation__txt__subtitle subtitles">
            Un campus au cœur d'un bassin économique dynamique
          </h3>
          <p class="index__presentation__txt__description">
            La région Rhône-Alpes, en tant que
            <strong>deuxième région économique de France</strong> et sixième
            d'Europe, représente un
            <strong>vivier considérable en termes d'emplois</strong>... Que ce
            soit dans la recherche de stage ou d'alternance mais également en
            débouché après un BAC+3 ou BAC+5.
          </p>
          <p class="index__presentation__txt__description">
            La Savoie se distingue par son expertise indéniable dans les
            <strong>sports de montagne et les activités sportives</strong>,
            abritant la plus grande concentration nationale de leaders
            industriels et de PME/PMI innovantes dans les domaines du sport et
            des loisirs.
          </p>
          <p class="index__presentation__txt__description">
            Notre campus est présent sur Savoie Technolac, joyau de l'innovation
            économique et du transfert technologique, qui arbore la
            certification ISO 14001 et s'impose comme un modèle de développement
            durable.
          </p>
          <NuxtLink
            class="index__presentation__txt__link button-tertiary"
            target="_blank"
            to="https://www.inseec.com/procedures-admissions/"
            >M'inscrire à l'INSEEC Chambéry</NuxtLink
          >
        </div>
      </div></Container
    >

    <Container>
      <img
        class="index__img"
        src="@/assets/images/placeholder.svg"
        alt="campus inseec chambéry savoie"
    /></Container>

    <Container>
      <div class="index__presentation">
        <div id="sport" class="index__presentation__img">
          <h2 class="index__presentation__img__title titles">
            UN LIEN FORT AVEC LE SPORT
          </h2>
        </div>

        <div class="index__presentation__txt">
          <h3 class="index__presentation__txt__subtitle subtitles">
            Un territoire et un campus propices aux activités sportives
          </h3>
          <p class="index__presentation__txt__description">
            La région Savoie - Haute-Savoie regorge d'opportunités touristiques,
            notamment grâce à ses
            <strong
              >stations de ski et ses nombreuses opportunités de sport
              outdoor.</strong
            >
            La destination Savoie Mont- Blanc, avec ses stations d'altitude
            parmi les plus prisées de France, offre des paysages idylliques pour
            les amateurs de tourisme.
          </p>
          <p class="index__presentation__txt__description">
            Chambéry se distingue par une architecture d'inspiration
            piémontaise. Son centre historique, niché au pied du château,
            dévoile un tissu urbain dense et singulier.
          </p>

          <NuxtLink
            class="index__presentation__txt__link button-tertiary"
            target="_blank"
            to="https://www.inseec.com/procedures-admissions/"
            >M'inscrire à l'INSEEC Chambéry</NuxtLink
          >
        </div>
      </div></Container
    >

    <Container>
      <div class="index__presentation">
        <div id="lbd" class="index__presentation__img">
          <h2 class="index__presentation__img__title titles">
            UNE PÉDAGOGIE TOURNÉE A 100% VERS NOS ÉTUDIANTS
          </h2>
        </div>
        <div class="index__presentation__txt">
          <p class="index__presentation__txt__description subtitles">
            L'approche pédagogique sur notre campus de Chambéry se distingue par
            sa dynamique, axée sur le
            <strong>"Learning by doing"</strong>.
          </p>

          <p class="index__presentation__txt__description">
            Nous formons nos étudiants à la gestion de projets, les encourageant
            ainsi à
            <strong
              >développer leurs compétences entrepreneuriales tout en renforçant
              leur réseau professionnel. Le département des relations avec les
              entreprises</strong
            >, en collaboration avec notre système de "matching",
            <strong
              >prépare chaque étudiant à son immersion dans le monde
              professionnel.</strong
            >
          </p>
          <ul class="index__presentation__txt__ul">
            Nos étudiants bénéficient :
            <li class="index__presentation__txt__ul__li">
              D'un réseau exclusif de plus de
              <strong>1 000 partenaires</strong>
            </li>
            <li class="index__presentation__txt__ul__li">
              D'un
              <strong>dispositif adapté aux sportifs de haut niveau :</strong>
              un campus en ligne spécialement conçu pour répondre à leurs
              exigences
            </li>
            <li class="index__presentation__txt__description__ul__li">
              D'un<strong> suivi personnalisé</strong> pour chacun
            </li>
            <li class="index__presentation__wrapper__txt__ul__li">
              D'<strong>associations étudiantes</strong> dynamiques
            </li>
            <li class="index__presentation__wrapper__txt__ul__li">
              D'un
              <strong
                >enseignement dispensé par de nombreux professionnels</strong
              >
              du secteur
            </li>
          </ul>
          <p class="index__presentation__txt__description">
            Le campus de Chambéry offre une variété de services adaptés à toutes
            les atentes et besoins de nos étudiants.
          </p>

          <NuxtLink
            class="index__presentation__txt__link button-tertiary"
            target="_blank"
            to="https://www.inseec.com/procedures-admissions/"
            >M'inscrire à l'INSEEC Chambéry</NuxtLink
          >
        </div>
      </div></Container
    >

    <Container>
      <a
        class="index__mini-banner"
        href="https://www.inseec.com/"
        target="_blank"
      >
        <h3 class="index__mini-banner__title subtitles">
          En savoir plus sur les inscriptions à l'INSEEC
        </h3>
        <img
          class="index__mini-banner__icon"
          src="@/assets/icons/arrow-blue.svg"
        /> </a
    ></Container>

    <News />
  </section>
  <JsonldBreadcrumb :links="breadcrumbs" />
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
    padding: 1rem;
    justify-content: flex-end;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;
    position: relative;

    @media (min-width: $big-tablet-screen) {
      flex-direction: row;
      justify-content: space-between;
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

    &__txt {
      z-index: 1;
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
        color: $primary-color;
        text-shadow: $shadow-text;
        border-color: $primary-color;
      }
    }
    &__socials {
      display: flex;
      gap: 0.5rem;
      z-index: 1;
      flex-direction: row;

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
    justify-content: center;
    flex-direction: column;

    @media (min-width: $big-tablet-screen) {
      flex-direction: row;
    }

    &__txt {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
      background-color: $primary-color;
      padding: 1rem;
      align-items: flex-end;

      @media (min-width: $big-tablet-screen) {
        gap: 2rem;
        padding: 2rem;
      }

      &__title {
        width: 100%;
      }

      &__subtitle {
        font-size: $subtitles;
        font-weight: $skinny-thick;
        width: 100%;
      }

      &__description {
        width: 100%;
      }

      &__ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;

        &__li {
          list-style: none;

          &:first-of-type {
            margin-top: 1rem;
          }
        }
      }
      &__link {
        margin-top: auto;
      }
    }

    &__img {
      width: 100%;
      min-height: 400px;
      background-image: linear-gradient(
          190deg,
          rgba(255, 255, 255, 0) 20%,
          $secondary-color
        ),
        url("@/assets/images/eleve-inseec.webp");
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: flex-end;
      padding: 1rem;

      @media (min-width: $big-tablet-screen) {
        padding: 2rem;
      }

      &__title {
        text-wrap: balance;
        color: $primary-color;
        text-shadow: $shadow-text;
      }
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

    &__title {
      width: 100%;
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
        // justify-content: center;
        align-items: flex-end;
        padding: 1rem;
        width: 100%;
        height: 200px;
        color: $primary-color;
        // text-align: center;
        background-image: linear-gradient(
            190deg,
            rgba(255, 255, 255, 0) 20%,
            $secondary-color
          ),
          url("@/assets/images/placeholder.svg");
        background-size: cover;
        background-position: center;
        font-size: $subtitles;
        font-weight: $thick;
        box-shadow: $shadow;
        border-radius: $radius;
        text-shadow: $shadow-text;
        filter: grayscale(20%);
        transition: filter 0.4s ease;

        &:hover {
          // background-position: center top;
          filter: grayscale(0%);
        }

        &:nth-of-type(1) {
          background-image: linear-gradient(
              190deg,
              rgba(255, 255, 255, 0) 40%,
              $secondary-color
            ),
            url("@/assets/images/raclette-cup.webp");
        }
        &:nth-of-type(2) {
          background-image: linear-gradient(
              190deg,
              rgba(255, 255, 255, 0) 40%,
              $secondary-color
            ),
            url("@/assets/images/intervenants.webp");
        }
        &:nth-of-type(3) {
          background-image: linear-gradient(
              190deg,
              rgba(255, 255, 255, 0) 40%,
              $secondary-color
            ),
            url("@/assets/images/hands.webp");
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
    justify-content: center;
    flex-direction: column;

    @media (min-width: $big-tablet-screen) {
      flex-direction: row;
    }

    &__txt {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
      background-color: $primary-color;
      padding: 1rem;
      align-items: flex-end;

      @media (min-width: $big-tablet-screen) {
        gap: 2rem;
        padding: 2rem;
        width: 50%;
      }

      &__title {
        width: 100%;
      }

      &__link {
        margin-top: auto;
      }
    }

    &__img {
      width: 100%;
      min-height: 400px;
      object-fit: cover;
      object-position: center;
      display: flex;
      align-items: flex-end;
      @media (min-width: $big-tablet-screen) {
        width: 50%;
      }
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

#sport {
  background-image: linear-gradient(
      190deg,
      rgba(255, 255, 255, 0) 20%,
      $secondary-color
    ),
    url("@/assets/images/sport.webp");
}
#lbd {
  background-image: linear-gradient(
      190deg,
      rgba(255, 255, 255, 0) 20%,
      $secondary-color
    ),
    url("@/assets/images/learning-by-doing.webp");
}
#work {
  background-image: linear-gradient(
      190deg,
      rgba(255, 255, 255, 0) 20%,
      $secondary-color
    ),
    url("@/assets/images/work.webp");
}
#savoie {
  background-image: linear-gradient(
      190deg,
      rgba(255, 255, 255, 0) 20%,
      $secondary-color
    ),
    url("@/assets/images/mountains.webp");
}
</style>
