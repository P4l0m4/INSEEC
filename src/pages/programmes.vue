<script setup lang="ts">
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

let rotateArrow = ref(false);
let selected = ref(story.value.content.programsList[0].pole);

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
          <div class="programs__list__filters__poles">
            <label class="programs__list__filters__poles__label">Pôle</label>
            <div
              class="programs__list__filters__poles__choices"
              :class="{
                'programs__list__filters__poles__choices--displayed':
                  rotateArrow === true,
              }"
            >
              <button
                class="programs__list__filters__poles__choices__filter scale-on-hover"
                v-for="(program, pole) in programsGroupedByPole"
                :key="pole"
                :class="{
                  'programs__list__filters__poles__choices__filter--selected':
                    selected === pole,
                }"
                @click="(selected = pole), (rotateArrow = !rotateArrow)"
              >
                {{ pole
                }}<img
                  class="programs__list__filters__poles__choices__filter__img"
                  src="@/assets/icons/arrow.svg"
                  alt="icone arrow"
                  :class="{
                    'programs__list__filters__poles__choices__filter__img--rotated':
                      rotateArrow === true,
                  }"
                />
              </button>
            </div>
          </div>
        </div></div
    ></Container>
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

      &__poles {
        display: flex;
        align-items: flex-start;

        &__label {
          background-color: $primary-color;
          font-size: $base-text;
          font-weight: $skinny;
          display: flex;
          gap: 1rem;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 1.5rem;
        }

        &__choices {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          transition: margin-top 0.2s;

          &__filter {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: $primary-color;
            color: $secondary-color;
            border-radius: $radius;
            white-space: nowrap;
            cursor: pointer;
            transition:
              box-shadow 0.2s,
              background-color 0.2s,
              color 0.2s;
            padding: 0.6rem 1.5rem;
            animation: fade 0.4s ease;

            &:hover {
              background-color: $secondary-color;
              color: $primary-color;
              box-shadow: $shadow-secondary;
            }

            &__img {
              visibility: hidden;
              transition: transform 0.2s;

              &--rotated {
                transform: rotate(180deg);
              }
            }
          }
        }
      }
    }
  }
}
</style>
