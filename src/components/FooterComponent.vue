<script setup>
import { ref } from "vue";

const isBugOpen = ref(false);
</script>
<template>
  <footer class="footer">
    <div class="footer__links">
      <NuxtLink class="footer__links__link" to="/">Accueil</NuxtLink
      ><NuxtLink class="footer__links__link" to="/#campus">Campus</NuxtLink
      ><NuxtLink class="footer__links__link" to="/programmes"
        >Programmes</NuxtLink
      ><NuxtLink class="footer__links__link" to="/evenements"
        >Evénements</NuxtLink
      >
      <NuxtLink class="footer__links__link" to="/equipes"
        >Responsables de pôles</NuxtLink
      >
      <NuxtLink class="footer__links__link" to="/equipes#intervenants"
        >Intervenants</NuxtLink
      >
      <NuxtLink class="footer__links__link" to="/partenaires"
        >Partenaires</NuxtLink
      >
      <NuxtLink class="footer__links__link" to="/partenaires#associations"
        >Associations</NuxtLink
      >
      <NuxtLink class="footer__links__link" to="/contact">Contact</NuxtLink
      ><button class="footer__links__link" @click="isBugOpen = true">
        Signaler un bug
      </button>
    </div>

    <div class="footer__legal">
      <span class="footer__legal__copyright"
        >©INSEEC Campus Chambéry 2024</span
      >
      <NuxtLink class="footer__legal__legal-mentions" to="/mentions-legales"
        >Mentions légales</NuxtLink
      >
    </div>

    <div class="footer__socials">
      <a
        class="footer__socials__link"
        href="https://www.facebook.com/INSEEC.Chambery/"
        aria-label="facebook inseec chambéry"
        target="_blank"
        ><img
          class="footer__socials__link__icon scale-on-hover"
          src="@/assets/icons/facebook.svg"
          alt="icone facebook inseec chambéry"
      /></a>
      <a
        class="footer__socials__link"
        href="https://www.instagram.com/inseec_campus_chambery/"
        aria-label="instagram inseec chambéry"
        target="_blank"
        ><img
          class="footer__socials__link__icon scale-on-hover"
          src="@/assets/icons/instagram.svg"
          alt="icone instagram inseec chambéry"
      /></a>
      <a
        class="footer__socials__link"
        href="https://www.linkedin.com/school/inseeccampuschamberysavoie/?originalSubdomain=fr"
        aria-label="linkedin inseec chambéry"
        target="_blank"
        ><img
          class="footer__socials__link__icon scale-on-hover"
          src="@/assets/icons/linkedin.svg"
          alt="icone linkedin inseec chambéry"
      /></a>
    </div>
    <BugSignaling :isBugOpen="isBugOpen" @close="isBugOpen = false" />
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: $secondary-color;
  padding: 2rem 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  &__links {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;

    @media (min-width: $big-tablet-screen) {
      justify-content: flex-start;
    }

    &__link {
      color: $primary-color;
      font-size: $small-text;
      cursor: pointer;
    }
  }

  &__legal {
    display: flex;
    gap: 0.5rem;

    &__copyright {
      color: $primary-color;
      font-size: $small-text;
    }

    &__legal-mentions {
      color: $primary-color;
      font-size: $small-text;
      text-decoration: underline;
    }
  }

  &__socials {
    display: flex;
    gap: 0.5rem;

    &__link {
      display: flex;
      cursor: pointer;

      &__icon {
        width: 24px;
        height: 24px;
      }
    }
  }
}
</style>
