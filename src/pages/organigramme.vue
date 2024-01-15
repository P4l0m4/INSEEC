<script setup>
import { ref, onMounted } from "vue";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://enqiiovmugkbnlqjvidw.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVucWlpb3ZtdWdrYm5scWp2aWR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUzMzU2ODYsImV4cCI6MjAyMDkxMTY4Nn0.7hRQZfa5Iz5qU1TNYn0PIVCwqGuql41opNf5jiY8Fco";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const password = ref("");
const passwordVisible = ref(false);
const errorMessage = ref("");

function isUserAuthenticated() {
  const user = supabase.auth.user;
  return user !== null;
}

async function signIn() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: "chamberycampus@gmail.com",
    password: password.value,
  });

  if (error) {
    errorMessage.value = error.message;
  }
}

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
    <Container v-if="!isUserAuthenticated"
      ><form class="organigramme__form" @submit.prevent="signIn">
        <div class="organigramme__form__group">
          <label for="password">Mot de passe</label>
          <input
            class="organigramme__form__group__input"
            type="password"
            id="password"
            placeholder="*******************"
            v-model="password"
          />
          <span class="organigramme__form__group__error">{{
            errorMessage
          }}</span>

          <img
            class="organigramme__form__group__icon"
            src="@/assets/icons/eye.svg"
            alt="eye icon"
            @click="passwordVisible = true"
            v-if="!passwordVisible"
          />
          <img
            class="organigramme__form__group__icon"
            src="@/assets/icons/eye-off.svg"
            alt="eye-off icon"
            @click="passwordVisible = false"
            v-if="passwordVisible"
          />
        </div>

        <button class="button-primary" type="submit">Connexion</button>
      </form></Container
    >
    <Container v-if="isUserAuthenticated">
      <div class="organigramme__protected-content">
        <h1 class="organigramme__protected-content__title titles">
          Organigramme
        </h1>

        <img
          class="organigramme__protected-content__img"
          src="@/assets/images/placeholder.svg"
          alt="organigramme"
        />
      </div>
    </Container>
  </section>
</template>
<style lang="scss" scoped>
.organigramme {
  display: flex;
  flex-direction: column;
  gap: 4rem;

  &__form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 450px;

    &__group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      &__input {
        padding: 0.5rem;
        position: relative !important;
      }

      &__error {
        color: $secondary-color;
        font-size: 0.8rem;
      }

      &__icon {
        position: absolute;
        right: 1rem;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
    }
  }

  &__protected-content {
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
}
</style>
