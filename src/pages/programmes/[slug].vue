<script setup>
import { stringToSlug } from "@/utils/slugify.js";
const story = await useAsyncStoryblok("programmes", { version: "published" });
const route = useRoute();
const programSlug = route.params.slug;
const program = story.value.content.programsList.find(
  (p) => stringToSlug(`${p.level} ${p.name}`) === programSlug
);
</script>

<template>
  <section class="program">
    <Container>
      <div class="program__details">
        <div class="program__details__txt">
          <h1 class="program__details__txt__title titles">
            {{ program.name }}
          </h1>

          <p class="program__details__txt__description">
            {{ program.details }}
          </p>
        </div>

        <div class="program__details__tags">
          <div class="program__details__tags__tag" v-if="program.price">
            <img
              class="program__details__tags__tag__img"
              src="@/assets/icons/podium.svg"
              alt="icone tag inseec"
            />
            {{ program.level }}
          </div>
          <div class="program__details__tags__tag" v-if="program.price">
            <img
              class="program__details__tags__tag__img"
              src="@/assets/icons/euro.svg"
              alt="icone tag inseec"
            />
            {{ program.price }}
          </div>
          <div class="program__details__tags__tag" v-if="program.duration">
            <img
              class="program__details__tags__tag__img"
              src="@/assets/icons/calendar.svg"
              alt="icone tag inseec"
            />
            {{ program.duration }}
          </div>

          <div class="program__details__tags__tag" v-if="program.evaluation">
            <img
              class="program__details__tags__tag__img"
              src="@/assets/icons/grade.svg"
              alt="icone tag inseec"
            />
            {{ program.evaluation }}
          </div>
          <div class="program__details__tags__tag" v-if="program.RNCP">
            <img
              class="program__details__tags__tag__img"
              src="@/assets/icons/star.svg"
              alt="icone tag inseec"
            />Titre RNCP Niveau

            {{ program.RNCP }}
          </div>
          <div class="program__details__tags__tag" v-if="program.pole">
            <img
              class="program__details__tags__tag__img"
              src="@/assets/icons/category.svg"
              alt="icone tag inseec"
            />
            {{ program.pole }}
          </div>
          <div class="program__details__tags__tag" v-if="program.accessibility">
            <img
              class="program__details__tags__tag__img"
              src="@/assets/icons/accessible.svg"
              alt="icone tag inseec"
            />
            {{ program.accessibility }}
          </div>
        </div>
      </div>

      <div class="program__info">
        <div class="program__info__prerequisites" v-if="program.prerequisites">
          <h2 class="program__info__prerequisites__title subtitles">
            Prérequis de la formation
          </h2>
          <ul class="program__info__prerequisites__ul">
            <li
              class="program__info__prerequisites__ul__li"
              v-for="prerequisite in program.prerequisites"
            >
              <img
                class="program__info__prerequisites__ul__li__img"
                src="@/assets/icons/check.svg"
                alt="icone checkbox inseec"
              />
              {{ prerequisite.text }}
            </li>
          </ul>
        </div>
      </div>

      <div class="program__objectives" v-if="program.objectives">
        <h2 class="program__objectives__title subtitles">Objectifs</h2>

        <div class="program__objectives__tags">
          <div
            class="program__objectives__tags__tag"
            v-for="objective in program.objectives"
          >
            <img
              class="program__objectives__tags__tag__img"
              src="@/assets/icons/medal.svg"
              alt="icone medal inseec"
            />
            {{ objective.goal }}
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
<style scoped lang="scss">
.program {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;

  @media (min-width: $big-tablet-screen) {
    gap: 6rem;
  }

  &__details {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (min-width: $big-tablet-screen) {
      flex-direction: row;
      gap: 4rem;
    }

    &__txt {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      max-width: 600px;

      &__title {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    }

    &__tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      height: fit-content;
      max-width: 450px;

      &__tag {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        font-size: $base-text;
        font-weight: $skinny;
        color: $secondary-color;
        background-color: $secondary-color-ultra-faded;
        padding: 0.5rem 1rem;
        border-radius: 24px;
        height: fit-content;
        width: fit-content;

        &__img {
          width: 1rem;
          height: 1rem;
        }
      }
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    flex-direction: column;

    @media (min-width: $big-tablet-screen) {
      flex-direction: row;
      gap: 4rem;
    }

    &__prerequisites {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      width: 100%;

      &__ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        &__li {
          display: flex;
          gap: 0.25rem;
          align-items: center;
          font-size: $base-text;

          &__img {
            width: 1rem;
            height: 1rem;
          }
        }
      }
    }
  }

  &__objectives {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    &__tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;

      &__tag {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        font-size: $base-text;
        font-weight: $skinny;
        color: $secondary-color;
        background-color: $primary-color;
        box-shadow: $shadow;
        padding: 0.5rem 1rem;
        border-radius: 24px;
        height: fit-content;
        width: fit-content;

        &__img {
          width: 2.25rem;
          height: 2.25rem;

          @media (min-width: $big-tablet-screen) {
            width: 1rem;
            height: 1rem;
          }
        }
      }
    }
  }
}
</style>
