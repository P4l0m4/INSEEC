<template>
  <section class="index">
    <div class="index__banner">
      <div class="index__banner__txt">
        <h1 class="index__banner__txt__title">
          L’INSEEC Campus Chambéry Savoie
        </h1>
        <p class="index__banner__txt__description">
          Niché au cœur d'Aix Riviera, le campus de Chambéry bénéficie d'un
          emplacement privilégié, entre les eaux sereines du lac et les
          majestueuses montagnes, offrant ainsi un cadre remarquable à nos
          étudiants.
        </p>
        <NuxtLink class="index__banner__txt__link" to="/campus"
          >En savoir plus</NuxtLink
        >
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.index {
  display: flex;
  flex-direction: column;
  &__banner {
    background-image: url("@/assets/images/campus.webp");
    background-size: cover;
    background-position: center;
    height: 60svh;
    position: relative;

    &__txt {
      display: flex;
      flex-direction: column;
      background-color: $secondary-color;
      padding: 1rem;
      border-radius: $radius;
      color: $primary-color;
      max-width: 400px;
      gap: 1rem;
      position: absolute;
      bottom: -6rem;
      left: 1rem;
      right: 1rem;

      @media (min-width: $big-tablet-screen) {
        bottom: -4rem;
        right: 4rem;
        left: inherit;
      }

      &__title {
        font-size: 1.25rem;
        font-weight: $thick;
      }

      &__link {
        color: $primary-color;
        text-decoration: underline;
        text-underline-offset: 2px;
      }
    }
  }
}
</style>
