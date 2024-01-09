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
              >Accueil INSEEC Chambéry</span
            >

            <!-- <span class="contact__list__people__card__name"
              >Alexandre VALENTINO</span
            > -->
            <div class="contact__list__people__card__info">
              <span class="contact__list__people__card__info__coordinates"
                ><img src="@/assets/icons/phone.svg" alt="icone telephone" />04
                79 25 32 54</span
              >
              <span class="contact__list__people__card__info__coordinates"
                ><img
                  src="@/assets/icons/email.svg"
                  alt="icone email"
                />adressemail[@]gmail.com</span
              >
            </div>
          </div>
          <div class="contact__list__people__card">
            <span class="contact__list__people__card__title subtitles"
              >Associations</span
            >

            <span class="contact__list__people__card__name"
              >Alexandre VALENTINO</span
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
                />adressemail[@]gmail.com</span
              >
            </div>
          </div>
          <div class="contact__list__people__card">
            <span class="contact__list__people__card__title subtitles"
              >Communication</span
            >

            <span class="contact__list__people__card__name"
              >Théo BONNET-LIGEON</span
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
                />adressemail[@]gmail.com</span
              >
            </div>
          </div>
          <div class="contact__list__people__card">
            <span class="contact__list__people__card__title subtitles"
              >Référents Handicap</span
            >

            <span class="contact__list__people__card__name"
              >Clément BERTACCO (MSc)</span
            >
            <div class="contact__list__people__card__info">
              <span class="contact__list__people__card__info__coordinates"
                ><img src="@/assets/icons/phone.svg" alt="icone telephone" />06
                04 79 25 38 05</span
              >
              <span class="contact__list__people__card__info__coordinates"
                ><img
                  src="@/assets/icons/email.svg"
                  alt="icone email"
                />adressemail[@]gmail.com</span
              >
            </div>
            <span class="contact__list__people__card__name"
              >Sophie CHOUKROUN (Bachelor)</span
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
                />adressemail[@]gmail.com</span
              >
            </div>
          </div>
          <div class="contact__list__people__card">
            <span class="contact__list__people__card__title subtitles"
              >Relations Entreprises & Alumni</span
            >

            <span class="contact__list__people__card__name"
              >Alumni, vous avez une question ou une proposition :</span
            >
            <div class="contact__list__people__card__info">
              <span class="contact__list__people__card__info__coordinates"
                ><img src="@/assets/icons/phone.svg" alt="icone telephone" />04
                79 25 35 79
              </span>
              <span class="contact__list__people__card__info__coordinates"
                ><img
                  src="@/assets/icons/email.svg"
                  alt="icone email"
                />srea.chambery[@]omneseducation.com</span
              >
            </div>
          </div>
          <div class="contact__list__people__card">
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

        @media (min-width: $big-tablet-screen) {
          gap: 2rem;
        }

        &__title {
          color: $secondary-color;
          opacity: 0.6;
        }

        &__name {
          font-size: $base-text;
          font-weight: $thick;
        }

        &__info {
          margin-top: -0.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;

          @media (min-width: $big-tablet-screen) {
            flex-direction: row;
            margin-top: -1.5rem;
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
