<script setup>
import { ref, computed } from "vue";
import { groupBy } from "@/utils/groupBy.js";
import { sortArray } from "@/utils/sortArray";
const story = await useAsyncStoryblok("programs", { version: "published" });

useHead(() => {
  return {
    title: "Programmes | INSEEC Campus Chambéry Savoie",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Découvrez les programmes de l'INSEEC Chambéry Savoie. Un environnement d'exception au coeur de la Savoie.",
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
    name: "Programmes",
    url: window.location.href,
  },
];

const selectedLevel = ref("");
const selectedPole = ref("");
const isLevelFilterActive = ref(false);
const isPoleFilterActive = ref(false);

let levels = computed(() => {
  let programs = story.value.content.programsList;
  const groupedPrograms = groupBy(programs, "level");
  return sortArray(groupedPrograms);
});

let poles = computed(() => {
  let programs = story.value.content.programsList.filter(
    (program) => program.level === selectedLevel.value
  );
  const groupedPrograms = groupBy(programs, "pole");
  return sortArray(groupedPrograms);
});

const filteredPrograms = computed(() => {
  let programs = story.value.content.programsList;
  if (selectedLevel.value) {
    programs = story.value.content.programsList.filter(
      (program) => program.level === selectedLevel.value
    );
  }
  if (selectedLevel.value && selectedPole.value) {
    programs = story.value.content.programsList.filter(
      (program) =>
        program.level === selectedLevel.value &&
        program.pole === selectedPole.value
    );
  }

  return programs;
});

function selectLevel(level) {
  selectedLevel.value = level;
  selectedPole.value = "";
  isLevelFilterActive.value = !isLevelFilterActive.value;
}

function selectPole(pole) {
  selectedPole.value = pole;
  isPoleFilterActive.value = !isPoleFilterActive.value;
}

const programOpened = ref("");

function openProgram(programName) {
  if (programOpened.value === programName) {
    programOpened.value = "";
  } else if (programOpened.value !== programName) {
    programOpened.value = programName;
  }
}
</script>
<template>
  <section class="programs">
    <picture class="programs__banner">
      <source
        media="(min-width: 1100px)"
        :srcset="story.content.banner.filename"
      />
      <source
        media="(min-width: 600px)"
        :srcset="story.content.mediumBanner.filename"
      />

      <img
        class="programs__banner__img"
        :src="story.content.smallBanner.filename"
        :alt="story.content.smallBanner.alt"
      />
      <h1 class="programs__banner__title titles">
        Tous les programmes de l'INSEEC Campus Chambéry Savoie
      </h1>

      <div class="programs__banner__buttons">
        <NuxtLink
          class="programs__banner__buttons__button button-primary"
          to="#programs"
          >Découvrir nos programmes</NuxtLink
        >
        <NuxtLink
          class="programs__banner__buttons__button button-secondary"
          target="_blank"
          to="https://www.inseec.com/procedures-admissions/"
          >M'inscrire à l'INSEEC Chambéry</NuxtLink
        >
      </div>
    </picture>

    <Container id="programs">
      <div class="programs__exclusives">
        <h2 class="programs__exclusives__title subtitles">
          Les programmes exclusifs de l'INSEEC Chambéry
        </h2>
        <div class="programs__exclusives__pictures">
          <img
            class="programs__exclusives__pictures__img"
            src="@/assets/images/INSEEC-CAISSE-EPARGNE.webp"
            alt="image programme caisse d'épargne inseec chambéry"
          />
          <img
            class="programs__exclusives__pictures__img"
            src="@/assets/images/INSEEC-CIMALPES.webp"
            alt="image programme cimalpes inseec chambéry"
          />
          <img
            class="programs__exclusives__pictures__img"
            src="@/assets/images/INSEEC-DECATHLON.webp"
            alt="image programme décathlon inseec chambéry"
          />
        </div>
      </div>
    </Container>

    <Container
      ><div class="programs__list">
        <div class="programs__list__filters">
          <!-- NIVEAUX -->
          <div class="programs__list__filters__poles-and-levels">
            <div
              class="programs__list__filters__poles-and-levels__choices"
              :class="{
                'programs__list__filters__poles-and-levels__choices--displayed':
                  isLevelFilterActive,
              }"
            >
              <div
                class="programs__list__filters__poles-and-levels__choices__placeholder"
                @click="
                  (isLevelFilterActive = !isLevelFilterActive),
                    (isPoleFilterActive = false)
                "
              >
                <span v-if="selectedLevel">{{ selectedLevel }}</span>
                <span v-else>Niveau</span>
                <img
                  class="programs__list__filters__poles-and-levels__choices__placeholder__img"
                  src="@/assets/icons/arrow.svg"
                  alt="icone arrow"
                  :class="{
                    'programs__list__filters__poles-and-levels__choices__placeholder__img--rotated':
                      isLevelFilterActive,
                  }"
                />
              </div>
              <button
                class="programs__list__filters__poles-and-levels__choices__filter"
                v-for="(_, level) in levels"
                :key="level"
                @click="selectLevel(level)"
              >
                {{ level }}
              </button>
            </div>
          </div>
          <!-- POLES -->
          <div
            v-if="selectedLevel"
            class="programs__list__filters__poles-and-levels"
          >
            <div
              class="programs__list__filters__poles-and-levels__choices"
              :class="{
                'programs__list__filters__poles-and-levels__choices--displayed':
                  isPoleFilterActive,
              }"
            >
              <div
                class="programs__list__filters__poles-and-levels__choices__placeholder"
                @click="
                  (isPoleFilterActive = !isPoleFilterActive),
                    (isLevelFilterActive = false)
                "
              >
                <span v-if="selectedPole">{{ selectedPole }}</span>
                <span v-else>Domaine</span>
                <img
                  class="programs__list__filters__poles-and-levels__choices__placeholder__img"
                  src="@/assets/icons/arrow.svg"
                  alt="icone arrow"
                  :class="{
                    'programs__list__filters__poles-and-levels__choices__placeholder__img--rotated':
                      isPoleFilterActive,
                  }"
                />
              </div>
              <button
                class="programs__list__filters__poles-and-levels__choices__filter"
                v-for="(_, pole) in poles"
                :key="pole"
                :class="{
                  'programs__list__filters__poles-and-levels__choices__filter--selected':
                    pole === selectedPole,
                }"
                @click="selectPole(pole)"
              >
                {{ pole }}
              </button>
            </div>
          </div>
        </div>

        <div class="programs__list__cursus">
          <div
            v-for="program in filteredPrograms"
            class="programs__list__cursus__card"
            :class="{
              'programs__list__cursus__card--opened':
                programOpened === program.name,
            }"
            @click="openProgram(program.name)"
          >
            <h2
              class="programs__list__cursus__card__title"
              :class="{
                'programs__list__cursus__card__title--blue':
                  programOpened === program.name,
              }"
            >
              {{ program.pole
              }}<img
                class="programs__list__cursus__card__title__img"
                src="@/assets/icons/add-blue.svg"
                alt="icone inseec plus"
                :class="{
                  'programs__list__cursus__card__title__img--rotated':
                    programOpened === program.name,
                }"
              />
            </h2>
            <p
              class="programs__list__cursus__card__subtitle"
              :class="{
                'programs__list__cursus__card__subtitle--opened':
                  programOpened === program.name,
              }"
            >
              {{ program.name }}
            </p>
            <p
              class="programs__list__cursus__card__details"
              v-if="programOpened === program.name"
            >
              {{ program.details }}
            </p>
            <NuxtLink
              class="programs__list__cursus__card__button button-tertiary"
              :to="program.link.url"
              :target="program.link.target"
              :aria-label="program.name"
              v-if="programOpened === program.name"
            >
              <img
                class="programs__list__cursus__card__button__img"
                src="@/assets/icons/contract.svg"
                alt="icone inscription inseec"
              />Inscription
            </NuxtLink>
          </div>
        </div>
      </div></Container
    >
  </section>
  <News />
  <JsonldBreadcrumb :links="breadcrumbs" />
</template>

<style lang="scss">
.programs {
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
      align-items: flex-start;
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

  &__exclusives {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    &__title {
      width: 100%;
    }

    &__pictures {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(343px, 1fr));
      gap: 1rem;
      @media (min-width: $big-tablet-screen) {
        gap: 2rem;
      }

      &__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: $radius;
      }
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    position: relative;

    &__filters {
      display: flex;
      gap: 1rem;
      width: 100%;

      &__poles-and-levels {
        display: flex;
        align-items: flex-start;
        width: 100%;

        &__choices {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding-top: 3.4rem;
          position: relative;
          height: 2.2rem;
          width: 100%;
          overflow-y: hidden;

          &__filter {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: $primary-color;
            border-radius: $radius;
            color: $text-color;
            white-space: nowrap;
            cursor: pointer;
            padding: 0.75rem 1.5rem;
            animation: fade 0.4s ease;
            transition:
              box-shadow 0.3s,
              background-color 0.3s,
              color 0.3s;

            @media (min-width: $big-tablet-screen) {
              &:hover {
                background-color: $secondary-color;
                color: $primary-color;
                box-shadow: $shadow-secondary;
              }
            }

            &--selected {
              opacity: 0.6;
              color: $secondary-color;
              border: 2px solid $secondary-color-faded;

              &:hover {
                background-color: $primary-color;
                color: $secondary-color;
                box-shadow: none;
                cursor: default;
              }
            }
          }

          &__placeholder {
            display: flex;
            justify-content: space-between;
            gap: 0.5rem;
            padding: 0.75rem 1.5rem;
            background-color: $primary-color;
            font-size: $base-text;
            border-radius: $radius;
            box-shadow: $shadow;
            position: absolute;
            inset: 0;
            white-space: nowrap;
            height: fit-content;
            width: 100%;
            cursor: pointer;

            & span {
              font-weight: $skinny;
              font-size: $base-text;
            }

            &__img {
              transition: transform 0.2s;

              &--rotated {
                transform: rotate(180deg);
              }
            }
          }

          &--displayed {
            height: fit-content;
          }
        }
      }
    }

    &__cursus {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(343px, 1fr));
      width: 100%;
      gap: 1rem;

      @media (min-width: $big-tablet-screen) {
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
      }

      &__card {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        background-color: $primary-color;
        border-radius: $radius;
        box-shadow: $shadow;
        width: 100%;
        max-width: 600px;
        height: 100%;
        max-height: 114px;
        animation: popUp 0.4s ease;
        transition:
          box-shadow 0.3s,
          background-color 0.3s;
        align-items: flex-end;

        @media (min-width: $big-tablet-screen) {
          height: 100%;
          max-height: 92px;

          &:hover {
            background-color: $secondary-color;
            box-shadow: $shadow-secondary;
            cursor: pointer;
          }

          &:hover > &__title {
            color: $primary-color;
          }

          &:hover > &__subtitle {
            color: $primary-color;
          }
        }

        &__title {
          font-weight: $thick;
          font-size: 1rem;
          display: flex;
          width: 100%;
          text-transform: uppercase;
          color: $secondary-color;
          opacity: 0.6;
          transition: color 0.3s;
          display: flex;
          justify-content: space-between;

          &--blue {
            color: $primary-color;
          }

          &__img {
            width: 20px;
            height: 20px;
            animation: fading 0.4s;
            transition: transform 0.2s;

            &--rotated {
              transform: rotate(45deg);
            }
          }
        }

        &__subtitle {
          font-size: calc($base-text + 0.25rem);
          font-weight: $skinny-thick;
          width: 100%;
          overflow-x: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;

          &--opened {
            white-space: normal;
          }
        }

        &__details {
          width: 100%;
          display: flex;
          color: $text-color-alt;
        }

        &__button {
          display: flex;
          width: fit-content;
          gap: 0.5rem;
          align-items: center;
          cursor: pointer;
          color: $text-color-alt;

          &__img {
            width: 16px;
            height: 16px;
          }
        }

        &--opened {
          height: fit-content !important;
          max-height: inherit;
          cursor: auto !important;
          background-color: $secondary-color;
          color: $primary-color;
        }
      }
    }
  }
}
</style>
