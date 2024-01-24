<script setup>
const story = await useAsyncStoryblok("contact", { version: "published" });

useHead(() => {
  return {
    title: "Contact | INSEEC Campus Chambéry Savoie",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Contacter l'INSEEC Campus Chambéry Savoie. Vos interlocuteurs sur le campus.",
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
    name: "Contact",
    url: window.location.href,
  },
];

const questions = story.value.content.faq.map((question) => {
  return {
    "@type": "Question",
    name: question.title,
    acceptedAnswer: {
      "@type": "Answer",
      text: question.answer,
    },
  };
});
useJsonld(() => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [questions],
}));

const questionOpened = ref("");
function toggleQuestion(index) {
  if (questionOpened.value === index) {
    questionOpened.value = "";
  } else {
    questionOpened.value = index;
  }
}

console.log(story.value.content.faq[1].link);
</script>

<template>
  <section class="contact">
    <Container>
      <div class="contact__list">
        <h1 class="contact__list__title titles">
          VOS INTERLOCUTEURS SUR LE CAMPUS
        </h1>

        <div class="contact__list__people">
          <div class="contact__list__people__card">
            <span class="contact__list__people__card__title subtitles"
              >Accueil</span
            >

            <span class="contact__list__people__card__name"
              >Accueil de l'INSEEC Chambéry</span
            >
            <div class="contact__list__people__card__info">
              <span class="contact__list__people__card__info__coordinates"
                ><img src="@/assets/icons/phone.svg" alt="icone telephone" />04
                79 25 32 54</span
              >
              <!-- <span class="contact__list__people__card__info__coordinates"
                ><img
                  src="@/assets/icons/email.svg"
                  alt="icone email"
                />adressemail[@]gmail.com</span
              > -->
            </div>
          </div>

          <div class="contact__list__people__card">
            <span class="contact__list__people__card__title subtitles"
              >Directrice des Etudes Bachelor</span
            >

            <span class="contact__list__people__card__name"
              >Céline Guillouet</span
            >
            <div class="contact__list__people__card__info">
              <span class="contact__list__people__card__info__coordinates"
                ><img src="@/assets/icons/phone.svg" alt="icone telephone" />06
                42 57 66 40</span
              >
              <span class="contact__list__people__card__info__coordinates"
                ><img
                  src="@/assets/icons/email.svg"
                  alt="icone email"
                />cguillouet[@]inseec.com</span
              >
            </div>
          </div>

          <div class="contact__list__people__card">
            <span class="contact__list__people__card__title subtitles"
              >Directrice des Etudes MSc</span
            >

            <span class="contact__list__people__card__name"
              >Véronique Rodari</span
            >
            <div class="contact__list__people__card__info">
              <span class="contact__list__people__card__info__coordinates"
                ><img src="@/assets/icons/phone.svg" alt="icone telephone" />04
                79 25 33 55</span
              >
              <span class="contact__list__people__card__info__coordinates"
                ><img
                  src="@/assets/icons/email.svg"
                  alt="icone email"
                />vrodari[@]inseec.com</span
              >
            </div>
          </div>

          <div class="contact__list__people__card">
            <span class="contact__list__people__card__title subtitles"
              >Responsable Evénementiel</span
            >

            <span class="contact__list__people__card__name"
              >Alexandre Valentino</span
            >
            <div class="contact__list__people__card__info">
              <span class="contact__list__people__card__info__coordinates"
                ><img src="@/assets/icons/phone.svg" alt="icone telephone" />06
                03 49 78 98</span
              >
              <span class="contact__list__people__card__info__coordinates"
                ><img
                  src="@/assets/icons/email.svg"
                  alt="icone email"
                />avalentino[@]inseec.com</span
              >
            </div>
          </div>

          <!-- THEO -->

          <div class="contact__list__people__card">
            <span class="contact__list__people__card__title subtitles"
              >Communication</span
            >

            <span class="contact__list__people__card__name"
              >Théo Bonnet-Ligeon</span
            >
            <div class="contact__list__people__card__info">
              <span class="contact__list__people__card__info__coordinates"
                ><img src="@/assets/icons/phone.svg" alt="icone telephone" />04
                79 25 34 36
              </span>
              <span class="contact__list__people__card__info__coordinates"
                ><img
                  src="@/assets/icons/email.svg"
                  alt="icone email"
                />tbonnetligeon[@]inseec.com</span
              >
            </div>
          </div>

          <div class="contact__list__people__card">
            <span class="contact__list__people__card__title subtitles"
              >Relations Entreprises & Alumni</span
            >

            <span class="contact__list__people__card__name">Franck Gorry</span>
            <div class="contact__list__people__card__info">
              <span class="contact__list__people__card__info__coordinates"
                ><img src="@/assets/icons/phone.svg" alt="icone telephone" />04
                79 25 38 02
              </span>
              <span class="contact__list__people__card__info__coordinates"
                ><img
                  src="@/assets/icons/email.svg"
                  alt="icone email"
                />fgorry[@]omneseducation.com</span
              >
            </div>
          </div>
          <!-- <div class="contact__list__people__card">
            <span class="contact__list__people__card__title subtitles"
              >Admission Etudiants Internationaux</span
            >

            <div class="contact__list__people__card__info">
              <span class="contact__list__people__card__info__coordinates"
                ><img src="@/assets/icons/phone.svg" alt="icone telephone" />01
                42 27 33 77
              </span>
              <span class="contact__list__people__card__info__coordinates"
                ><img
                  src="@/assets/icons/email.svg"
                  alt="icone email"
                />internationaladmissions[@]omneseducation.fr</span
              >
            </div>
          </div> -->
          <div class="contact__list__people__card">
            <span class="contact__list__people__card__title subtitles"
              >Référent Handicap MSc</span
            >

            <span class="contact__list__people__card__name"
              >Clément Bertacco</span
            >
            <div class="contact__list__people__card__info">
              <span class="contact__list__people__card__info__coordinates"
                ><img src="@/assets/icons/phone.svg" alt="icone telephone" />04
                79 25 38 05</span
              >
              <span class="contact__list__people__card__info__coordinates"
                ><img
                  src="@/assets/icons/email.svg"
                  alt="icone email"
                />cbertacco[@]inseec.com</span
              >
            </div>
          </div>
          <div class="contact__list__people__card">
            <span class="contact__list__people__card__title subtitles"
              >Référent Handicap Bachelor</span
            >

            <span class="contact__list__people__card__name"
              >Sophie Choukroun</span
            >
            <div class="contact__list__people__card__info">
              <span class="contact__list__people__card__info__coordinates"
                ><img src="@/assets/icons/phone.svg" alt="icone telephone" />04
                79 25 38 37</span
              >
              <span class="contact__list__people__card__info__coordinates"
                ><img
                  src="@/assets/icons/email.svg"
                  alt="icone email"
                />schoukroun[@]inseec.com</span
              >
            </div>
          </div>

          <div class="contact__list__people__card">
            <span class="contact__list__people__card__title subtitles"
              >Responsable Admissions Bachelor</span
            >

            <span class="contact__list__people__card__name">Maud Piggio</span>
            <div class="contact__list__people__card__info">
              <span class="contact__list__people__card__info__coordinates"
                ><img src="@/assets/icons/phone.svg" alt="icone telephone" />04
                79 25 38 42
              </span>
              <span class="contact__list__people__card__info__coordinates"
                ><img
                  src="@/assets/icons/email.svg"
                  alt="icone email"
                />mpiggio[@]inseec.com</span
              >
            </div>
          </div>

          <div class="contact__list__people__card">
            <span class="contact__list__people__card__title subtitles"
              >Responsable Admission MSc</span
            >

            <span class="contact__list__people__card__name">Océane Clerc</span>
            <div class="contact__list__people__card__info">
              <span class="contact__list__people__card__info__coordinates"
                ><img src="@/assets/icons/phone.svg" alt="icone telephone" />04
                79 25 34 44
              </span>
              <span class="contact__list__people__card__info__coordinates"
                ><img
                  src="@/assets/icons/email.svg"
                  alt="icone email"
                />oclerc[@]inseec.com</span
              >
            </div>
          </div>

          <div class="contact__list__people__card">
            <span class="contact__list__people__card__title subtitles"
              >Secrétaire Général Campus Chambéry</span
            >

            <span class="contact__list__people__card__name"
              >Géraldine Rival</span
            >
            <div class="contact__list__people__card__info">
              <span class="contact__list__people__card__info__coordinates"
                ><img src="@/assets/icons/phone.svg" alt="icone telephone" />04
                79 25 38 40
              </span>
              <span class="contact__list__people__card__info__coordinates"
                ><img
                  src="@/assets/icons/email.svg"
                  alt="icone email"
                />grival[@]omneseducation.com</span
              >
            </div>
          </div>

          <div class="contact__list__people__card">
            <span class="contact__list__people__card__title subtitles"
              >Responsable CES</span
            >

            <span class="contact__list__people__card__name"
              >Marilyn Pouyet</span
            >
            <div class="contact__list__people__card__info">
              <span class="contact__list__people__card__info__coordinates"
                ><img src="@/assets/icons/phone.svg" alt="icone telephone" />04
                78 29 75 48
              </span>
              <span class="contact__list__people__card__info__coordinates"
                ><img
                  src="@/assets/icons/email.svg"
                  alt="icone email"
                />mpouyet[@]omneseducation.com</span
              >
            </div>
          </div>

          <div class="contact__list__people__card">
            <span class="contact__list__people__card__title subtitles"
              >Responsable Financier</span
            >

            <span class="contact__list__people__card__name">Sébastien Bau</span>
            <div class="contact__list__people__card__info">
              <span class="contact__list__people__card__info__coordinates"
                ><img src="@/assets/icons/phone.svg" alt="icone telephone" />04
                79 25 38 47
              </span>
              <span class="contact__list__people__card__info__coordinates"
                ><img
                  src="@/assets/icons/email.svg"
                  alt="icone email"
                />sbau[@]omneseducation.com</span
              >
            </div>
          </div>

          <div class="contact__list__people__card">
            <span class="contact__list__people__card__title subtitles"
              >Directeur INSEEC Campus Chambéry</span
            >

            <span class="contact__list__people__card__name"
              >Damien Bezançon</span
            >
          </div>
        </div>
      </div>
    </Container>
    <Container>
      <iframe
        class="contact__iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2789.349012108592!2d5.868268476283805!3d45.64381247107748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478b09ca39fa5545%3A0x7eeb651ba68a5980!2sINSEEC%20Campus%20Chamb%C3%A9ry%20Savoie!5e0!3m2!1sfr!2sfr!4v1704463938443!5m2!1sfr!2sfr"
        allowfullscreen="true"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe
    ></Container>
    <Container>
      <div class="contact__faq">
        <div
          class="contact__faq__card"
          v-for="(question, index) in story.content.faq"
          :key="index"
          @click="toggleQuestion(index)"
          @mouseover="questionOpened = index"
          @mouseleave="questionOpened = ''"
        >
          <h2 class="contact__faq__card__question">
            {{ question.title
            }}<img
              class="contact__faq__card__question__img"
              src="@/assets/icons/arrow.svg"
              alt="icon arrow inseec"
              :class="{
                'contact__faq__card__question__img--rotated':
                  questionOpened === index,
              }"
            />
          </h2>
          <p class="contact__faq__card__answer" v-if="questionOpened === index">
            {{ question.answer }}
          </p>
          <NuxtLink
            class="contact__faq__card__link button-tertiary"
            :to="question.link?.url"
            :target="question.link?.target"
            v-if="question.link?.url && questionOpened === index"
          >
            {{ question.link.url }}</NuxtLink
          >
        </div>
      </div>
    </Container>
  </section>
  <JsonldBreadcrumb :links="breadcrumbs" />
</template>
<style lang="scss" scoped>
.contact {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;

  @media (min-width: $big-tablet-screen) {
    gap: 6rem;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (min-width: $big-tablet-screen) {
      gap: 4rem;
    }

    &__title {
      width: 100%;
    }

    &__people {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(343px, 1fr));
      gap: 2rem;
      @media (min-width: $big-tablet-screen) {
        gap: 4rem;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
      }

      &__card {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        &__title {
          color: $secondary-color;
          opacity: 0.6;
        }

        &__name {
          font-size: $base-text;
          font-weight: $thick;
        }

        &__info {
          display: flex;
          flex-direction: column;
          gap: 1rem;

          @media (min-width: $big-tablet-screen) {
            flex-direction: row;
          }

          &__name {
          }

          &__coordinates {
            display: flex;
            align-items: center;
            gap: 0.25rem;

            & img {
              width: 24px;
              height: 24px;
            }
          }
        }
      }
    }
  }

  &__iframe {
    width: 100%;
    height: 450px;
    border: 0;

    @media (min-width: $big-tablet-screen) {
      height: 600px;
    }
  }

  &__faq {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(343px, 1fr));
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
    width: 100%;

    @media (min-width: $big-tablet-screen) {
      grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    }

    @media (min-width: $super-big-screen) {
      grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
    }

    &__card {
      background-color: $primary-color;
      border-radius: $radius;
      box-shadow: $shadow;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      width: 100%;
      padding: 1rem;
      gap: 1rem;
      cursor: pointer;

      &__question {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        font-size: $subtitles;
        font-weight: $thick;
        align-self: stretch;

        &__img {
          width: 16px;
          height: 16px;
          transition: transform 0.2s;

          &--rotated {
            transform: rotate(180deg);
          }
        }
      }

      &__answer {
        font-size: $base-text;
        font-weight: $skinny;
        animation: fading 0.4s;
        width: 100%;
      }

      &__link {
        animation: fading 0.4s;
        width: fit-content;
      }
    }
  }
}
</style>
