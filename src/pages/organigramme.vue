<script setup>
import { ref, onMounted } from "vue";
import { createClient } from "@supabase/supabase-js";
const story = await useAsyncStoryblok("organigramme", { version: "published" });

const supabaseUrl = "https://enqiiovmugkbnlqjvidw.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVucWlpb3ZtdWdrYm5scWp2aWR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUzMzU2ODYsImV4cCI6MjAyMDkxMTY4Nn0.7hRQZfa5Iz5qU1TNYn0PIVCwqGuql41opNf5jiY8Fco";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const password = ref("");
const passwordVisible = ref(false);
const errorMessage = ref("");
const inputType = ref("password");
let isUserAuthenticated = ref(false);

async function signOut() {
  const { error } = await supabase.auth.signOut();
  isUserAuthenticated.value = false;
}

async function signIn() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: "chamberycampus@gmail.com",
    password: password.value,
  });

  if (error) {
    errorMessage.value = error.message;
  } else {
    password.value = "";
    errorMessage.value = "";
    isUserAuthenticated.value = true;
  }
}

async function checkAuth() {
  const user = supabase.auth.user();
  isUserAuthenticated.value = !!user;
}

onMounted(() => {
  checkAuth();
  supabase.auth.onAuthStateChange((event, session) => {
    isUserAuthenticated.value = !!session;
  });
});

useHead(() => {
  return {
    title: "Organigramme | INSEEC Campus Chambéry Savoie",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Organigramme de l'INSEEC Campus Chambéry Savoie",
      },
      {
        hid: "robots",
        name: "robots",
        content: "noindex",
      },
    ],
  };
});
</script>
<template>
  <section class="organigramme">
    <picture class="organigramme__banner" v-if="isUserAuthenticated">
      <source
        media="(min-width: 1100px)"
        srcset="@/assets/images/org-banner.webp"
      />
      <source
        media="(min-width: 600px)"
        srcset="@/assets/images/org-banner-tablet.webp"
      />

      <img
        class="organigramme__banner__img"
        src="@/assets/images/org-banner-mobile.webp"
        alt="banner inseec chambéry"
      />
      <h1 class="organigramme__banner__title titles">
        Découvrez les membres de l'INSEEC Chambéry
      </h1>
      <div class="organigramme__banner__buttons">
        <NuxtLink
          class="organigramme__banner__buttons__button button-primary"
          to="#search"
          >Consulter l'annuaire</NuxtLink
        >
        <NuxtLink
          class="organigramme__banner__buttons__button button-secondary"
          to="#organigramme"
          >Voir l'organigramme</NuxtLink
        >
      </div>
    </picture>
    <Container v-if="!isUserAuthenticated">
      <form class="organigramme__form" @submit.prevent="signIn">
        <h1 class="organigramme__form__title subtitles">
          Connectez-vous pour accéder à l'organigramme de l'INSEEC Chambéry
        </h1>
        <div class="organigramme__form__group">
          <label class="organigramme__form__group__label" for="password"
            >Mot de passe</label
          >

          <input
            class="organigramme__form__group__input"
            :type="inputType"
            id="password"
            placeholder="*******************"
            v-model="password"
            autocomplete="on"
          />
          <img
            class="organigramme__form__group__icon"
            src="@/assets/icons/eye.svg"
            alt="eye icon"
            @click="(passwordVisible = true), (inputType = 'text')"
            v-if="!passwordVisible"
          />
          <img
            class="organigramme__form__group__icon"
            src="@/assets/icons/eye-off.svg"
            alt="eye-off icon"
            @click="(passwordVisible = false), (inputType = 'password')"
            v-if="passwordVisible"
          />
          <span class="organigramme__form__group__error">{{
            errorMessage
          }}</span>
        </div>

        <button
          class="organigramme__form__button button-primary"
          type="submit"
          @click="signIn"
        >
          Connexion
        </button>
      </form></Container
    >
    <Container id="search">
      <SearchableMembers v-if="isUserAuthenticated" :story="story" />
    </Container>

    <Container id="organigramme" v-if="isUserAuthenticated">
      <div class="organigramme__first-section">
        <h1 class="organigramme__first-section__title subtitles">
          Organigramme de l'INSEEC Chambéry
        </h1>

        <img
          class="organigramme__first-section__img"
          :src="story.content.image.filename"
          :alt="story.content.image.alt"
        />
      </div>
    </Container>

    <Container v-if="isUserAuthenticated">
      <div class="organigramme__buttons">
        <button
          class="button-primary organigramme__buttons__button"
          @click="signOut"
        >
          Déconnexion
        </button>
      </div></Container
    >
  </section>
</template>
<style lang="scss" scoped>
.organigramme {
  display: flex;
  flex-direction: column;
  gap: 4rem;

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

  &__form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 450px;
    margin: 0 auto;
    text-align: center;

    &__group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      &__label {
        color: $secondary-color;
        background-color: $base-color;
        padding: 0 6px;
        margin-bottom: -16px;
        margin-left: 8px;
        z-index: 1;
        width: fit-content;
        animation: slide-from-top 0.4s ease-in-out;
      }

      &__input {
        border: 2px solid $secondary-color;
        height: 44px;
        width: 100%;
        caret-color: $text-color;
        padding: 12px;
        color: $text-color;
        background-color: $base-color;
        box-shadow: $shadow;
        animation: slide-from-top 0.4s ease-in-out;

        &::placeholder {
          color: $text-color;
          opacity: 0.4;
        }
      }

      &__error {
        color: $secondary-color;
        font-size: 0.8rem;
        margin-top: 0.5rem;
        width: 100%;
        text-align: left;
      }

      &__icon {
        margin-top: -2.5rem;
        margin-left: 92%;
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
    }

    &__button {
      margin-top: -1rem;
    }
  }

  &__first-section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;

    &__title {
      width: 100%;
    }

    &__img {
      width: 100%;
    }
  }

  &__members {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
    justify-content: center;

    @media (min-width: $big-tablet-screen) {
      gap: 2rem;
    }

    &__member {
      background-image: linear-gradient(
          190deg,
          rgba(255, 255, 255, 0) 20%,
          $text-color
        ),
        url("@/assets/images/placeholder-person.webp");
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
        margin-bottom: -6.2rem;
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

        &__desk {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: $small-text;
          text-shadow: $shadow-text;
          color: $text-color-alt;

          & img {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }

  &__buttons {
    display: flex;
    justify-content: flex-end;
    &__button {
      width: 100%;

      @media (min-width: $big-tablet-screen) {
        width: fit-content;
      }
    }
  }
}
</style>
