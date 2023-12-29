<script setup>
import { ref, onMounted, computed } from "vue";
import { groupBy } from "@/utils/groupBy.js";
const story = await useAsyncStoryblok("programs", { version: "published" });

useHead(() => {
  return {
    title: "Programmes | INSEEC Campus Chambéry Savoie",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Découvrez les programmes de l’INSEEC Chambéry Savoie. Un environnement d'exception au coeur de la Savoie.",
      },
    ],
  };
});

let placeholder = ref("Domaine");
let rotateArrow = ref(false);
let displayedPrograms = ref([]);
let programsRef = ref();

function selectProgram(poleName, programs) {
  placeholder.value = poleName;
  displayedPrograms.value = programs;
}

let programsGroupedByPole = computed(() => {
  const program = story.value.content.programsList.map((program) => ({
    ...program,
    pole: program.pole,
  }));

  const groupedPrograms = groupBy(program, "pole");

  return sortPrograms(groupedPrograms);
});

function sortPrograms(programs) {
  return Object.keys(programs)
    .sort()
    .reduce((sortedPrograms, key) => {
      sortedPrograms[key] = programs[key];
      return sortedPrograms;
    }, {});
}
</script>
<template>
  <section class="programs">
    <picture class="programs__banner">
      <source
        media="(min-width: 1000px)"
        :srcset="story.content.banner.filename"
      />

      <img
        class="programs__banner__img"
        :src="story.content.smallBanner.filename"
        :alt="story.content.smallBanner.filename.alt"
      />
      <h1 class="programs__banner__title titles">
        Tous les programmes de l’INSEEC Campus Chambéry Savoie
      </h1>
    </picture>

    <Container
      ><div class="programs__list">
        <div class="programs__list__filters">
          <div class="programs__list__filters__poles-and-levels">
            <div
              class="programs__list__filters__poles-and-levels__choices"
              :class="{
                'programs__list__filters__poles-and-levels__choices--displayed':
                  rotateArrow === true,
              }"
            >
              <div
                class="programs__list__filters__poles-and-levels__choices__placeholder"
                @click="rotateArrow = !rotateArrow"
              >
                {{ placeholder
                }}<img
                  class="programs__list__filters__poles-and-levels__choices__placeholder__img"
                  src="@/assets/icons/arrow.svg"
                  alt="icone arrow"
                  :class="{
                    'programs__list__filters__poles-and-levels__choices__placeholder__img--rotated':
                      rotateArrow === true,
                  }"
                />
              </div>
              <button
                class="programs__list__filters__poles-and-levels__choices__filter scale-on-hover"
                v-for="(programs, poleName) in programsGroupedByPole"
                ref="programsRef"
                v-show="poleName !== placeholder"
                :key="poleName"
                @click="
                  (rotateArrow = !rotateArrow),
                    selectProgram(poleName, programs)
                "
              >
                {{ poleName }}
              </button>
            </div>
          </div>
          <div class="programs__list__filters__poles-and-levels">
            <div
              class="programs__list__filters__poles-and-levels__choices"
              :class="{
                'programs__list__filters__poles-and-levels__choices--displayed':
                  rotateArrow === true,
              }"
            >
              <div
                class="programs__list__filters__poles-and-levels__choices__placeholder"
                @click="rotateArrow = !rotateArrow"
              >
                {{ placeholder
                }}<img
                  class="programs__list__filters__poles-and-levels__choices__placeholder__img"
                  src="@/assets/icons/arrow.svg"
                  alt="icone arrow"
                  :class="{
                    'programs__list__filters__poles-and-levels__choices__placeholder__img--rotated':
                      rotateArrow === true,
                  }"
                />
              </div>
              <button
                class="programs__list__filters__poles-and-levels__choices__filter scale-on-hover"
                v-for="(programs, poleName) in programsGroupedByPole"
                ref="programsRef"
                v-show="poleName !== placeholder"
                :key="poleName"
                @click="
                  (rotateArrow = !rotateArrow),
                    selectProgram(poleName, programs)
                "
              >
                {{ poleName }}
              </button>
            </div>
          </div>
        </div>

        <div class="programs__list__cursus">
          <NuxtLink
            v-for="program in displayedPrograms"
            class="programs__list__cursus__card scale-on-hover"
            :to="program.link.url"
            :target="program.link.target"
            :aria-label="program.name"
          >
            <h2 class="programs__list__cursus__card__title">
              {{ program.name }}
            </h2>
          </NuxtLink>
        </div>
      </div></Container
    >
  </section>
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
    max-width: 2000px;
    padding: 1rem;
    justify-content: flex-end;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;
    position: relative;

    @media (min-width: $big-tablet-screen) {
      flex-direction: row;
      justify-content: flex-start;
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

      @media (min-width: $big-tablet-screen) {
        gap: 2rem;
      }

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
            white-space: nowrap;
            cursor: pointer;
            transition:
              box-shadow 0.2s,
              background-color 0.2s,
              color 0.2s;
            padding: 0.6rem 1.5rem;
            animation: fade 0.4s ease;

            @media (min-width: $big-tablet-screen) {
              &:hover {
                background-color: $secondary-color;
                color: $primary-color;
                box-shadow: $shadow-secondary;
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
            position: absolute;
            inset: 0;
            white-space: nowrap;
            height: fit-content;
            width: 100%;

            cursor: pointer;

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
        gap: 2rem;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
      }

      &__card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        background-color: $primary-color;
        border-radius: $radius;
        box-shadow: $shadow;
        width: 100%;
        max-width: 600px;
        animation: popUp 0.4s ease;

        @media (min-width: $tablet-screen) {
          flex-direction: row;
          height: 100%;
          align-items: space-between;
        }

        &__title {
          color: $secondary-color;
          font-size: $subtitles;
          font-weight: $skinny;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
