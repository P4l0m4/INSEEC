<script setup lang="ts">
const story = await useAsyncStoryblok("poles", { version: "published" });
</script>
<template>
  <section class="responsables-poles">
    <div
      class="responsables-poles__banner"
      :style="`background-image: url('${story.content.banner.filename}')`"
    >
      <h1 class="responsables-poles__banner__title subtitles">
        Mettre des visages sur vos programmes
      </h1>
    </div>

    <Container v-for="pole in story.content.list" :key="pole._uid">
      <div class="responsables-poles__pole">
        <h2 class="responsables-poles__pole__title subtitles">
          {{ pole.title }}
        </h2>
        <div class="responsables-poles__pole__people">
          <div
            class="responsables-poles__pole__people__person"
            v-for="person in pole.persons"
            :key="person._uid"
          >
            <div class="responsables-poles__pole__people__person__txt">
              <span
                class="responsables-poles__pole__people__person__txt__name"
                >{{ person.name }}</span
              >
              <span class="responsables-poles__pole__people__person__txt__role">
                {{ person.role }}
              </span>
              <p
                class="responsables-poles__pole__people__person__txt__description"
              >
                {{ person.description }}
              </p>
            </div>
          </div>
        </div>
      </div></Container
    >
  </section>
</template>
<style lang="scss" scoped>
.responsables-poles {
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

  &__pole {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    &__people {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1rem;
      justify-content: center;

      @media (min-width: $big-tablet-screen) {
        gap: 2rem;
      }

      &__person {
        background-image: url("@/assets/images/placeholder-person.webp");
        background-size: cover;
        background-position: center;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        border-radius: $radius;
        height: 420px;
        overflow: hidden;
        cursor: pointer;
        filter: grayscale(20%);
        transition:
          background-position 0.4s ease,
          filter 0.4s ease;

        &:hover {
          background-position: center right;
          filter: grayscale(0%);
        }

        &:hover > &__txt {
          margin-bottom: 0;
        }

        &__txt {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1rem;
          color: $primary-color;
          backdrop-filter: blur(4px);
          margin-bottom: -4rem;
          transition: margin-bottom 0.4s ease;

          &__name {
            text-shadow: $shadow-text;
          }

          &__role {
            font-size: $base-text;
            font-weight: $thick;
            margin-top: -0.5rem;
            text-shadow: $shadow-text;
          }
          &__description {
            font-size: $small-text;
            height: 48px;
            overflow: hidden;
            text-shadow: $shadow-text;
          }
        }
      }
    }
  }
}
</style>
