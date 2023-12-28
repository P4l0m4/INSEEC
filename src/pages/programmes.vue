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

let selected = ref();

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

console.log(programsGroupedByPole);
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
          <button
            class="programs__list__filters__filter scale-on-hover"
            v-for="(program, pole) in programsGroupedByPole"
            :key="pole"
            :class="{
              'programs__list__filters__filter--selected': selected === pole,
            }"
            @click="selected = pole"
          >
            {{ pole }}
          </button>
        </div>
      </div></Container
    >
  </section>
</template>

<style lang="scss" scoped>
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
      overflow-x: scroll;

      @media (min-width: $big-tablet-screen) {
        gap: 4rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      }

      &__filter {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: $primary-color;
        box-shadow: $shadow;
        color: $secondary-color;
        padding: 1rem 2rem;
        border-radius: $radius;
        white-space: nowrap;
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        &--selected {
          background-color: $secondary-color;
          color: $primary-color;
          box-shadow: $shadow-secondary;
        }
      }
    }
  }
}
</style>
