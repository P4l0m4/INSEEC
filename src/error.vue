<script setup>
defineProps(["error"]);
</script>

<template>
  <HeaderComponent />
  <div class="error">
    <div class="error__message">
      <h1 class="titles">Oooops... erreur {{ error.statusCode }}</h1>

      <h2 class="subtitles">
        Nous n'avons pas trouvé la page que vous cherchez.
      </h2>
      <NuxtLink
        to="/"
        class="button-primary"
        aria-label="retour à la page d'accueil"
        >Retour à la page d'accueil</NuxtLink
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
.error {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100svh;
  padding-top: 88px;
  @media (min-width: $big-tablet-screen) {
    padding-top: 91px;
  }

  &__message {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    padding: 4rem 1rem;
    text-align: center;

    & button {
      padding: 1rem 1.75rem;
    }
  }
}
</style>
