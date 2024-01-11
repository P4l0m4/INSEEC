<script setup lang="ts">
import { reactive, ref } from "vue";
import emailjs from "@emailjs/browser";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";

const props = defineProps({
  isBugOpen: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits({
  close: {
    type: Boolean,
    default: true,
  },
});

const state = reactive({
  textarea: "",
  isSubmitting: false,
  sent: false,
  HP: false,
});

const rules = {
  textarea: {
    required,
    minLength: minLength(75),
  },
};

const v$ = useVuelidate(rules, state);
const form: Ref<any> = ref();

async function submit() {
  const valid = await v$.value.$validate();

  if (valid) {
    if (state.HP === false) {
      await emailjs.sendForm(
        "service_tntjixo",
        "template_rbpyz1t",
        form.value,
        "0y6xJKJoR3SjglNhC"
      );
    }

    state.sent = true;
    state.isSubmitting = false;
    state.textarea = "";
    setTimeout(() => {
      emit("close");
    }, 4000);

    v$.value.$reset();
  }
}
</script>

<template>
  <form ref="form" class="form" @submit.prevent="submit" v-if="props.isBugOpen">
    <!-- CHAMP URL -->
    <div
      class="form__group"
      :class="{ 'form__group--error': v$.textarea.$dirty }"
    >
      <label class="form__group__label">Description du bug</label>
      <textarea
        v-model.trim="state.textarea"
        class="form__group__textarea"
        placeholder="Décrivez le bug rencontré avec le plus de détails possible (page, IOs/Android, MacOs/Windows, navigateur, etc.)"
        name="textarea"
      ></textarea>

      <div
        v-if="v$.textarea.$dirty && v$.textarea.required.$invalid"
        class="form__error"
      >
        Ce champ est requis
      </div>
      <div
        v-else-if="v$.textarea.$dirty && v$.textarea.minLength.$invalid"
        class="form__error"
      >
        Veuillez renseigner au moins
        {{ v$.textarea.minLength.$params.min }} caractères
      </div>
    </div>

    <!-- CHAMP HP -->
    <input
      id="HP"
      v-model="state.HP"
      class="HP"
      type="checkbox"
      name="not_a_robot"
    />
    <label for="HP" class="HP"> Je ne suis pas un robot </label>

    <button
      class="form__button button-primary"
      type="submit"
      :disabled="state.isSubmitting"
      aria-label="envoyer le formulaire"
    >
      Envoyer
    </button>

    <p v-if="state.sent" class="form__error">
      Merci ! Votre problème a bien été signalé.
    </p>
  </form>
</template>
<style lang="scss" scoped>
.form {
  margin-top: 2rem;
  animation: fade 0.4s ease;
  width: clamp(240px, 100%, 500px);
  background-color: $secondary-color;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  border-radius: $radius;
  animation: fading 0.4s;
  @media (min-width: $big-tablet-screen) {
    gap: 1.5rem;
  }

  &__group {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: flex-start;

    &__input,
    &__textarea {
      border: 2px solid $primary-color;
      // border-radius: $small-radius;
      height: 44px;
      width: 100%;
      caret-color: $text-color-alt;
      padding: 12px;
      color: $text-color-alt;
      // font-weight: $slim-weight;
      background-color: $secondary-color;
      animation: slide-from-top 0.4s ease-in-out;

      &::placeholder {
        color: $primary-color;
        // font-weight: $slim-weight;
        opacity: 0.4;
      }
      &[type="checkbox"] {
        width: 60px;
        height: 40px;
        cursor: pointer;
        accent-color: $text-color;
      }
    }
    &__textarea {
      resize: none;
      height: 140px;
      border-radius: $radius;
    }

    &__label {
      // font-weight: $medium-weight;
      color: $primary-color;
      position: absolute;
      background-color: $secondary-color;
      padding: 0 6px;
      top: -12px;
      left: 8px;
      animation: slide-from-top 0.4s ease-in-out;
    }
    &__checkbox-container {
      color: $text-color;
      display: flex;
      gap: 0.5rem;
      justify-content: space-between;
      width: 100%;
      flex-direction: row;

      &__text {
        // font-weight: $slim-weight;
        font-size: 12px;
      }
    }
  }
  &__button {
    width: 100%;
    background: $primary-color;
    color: $secondary-color;
    cursor: pointer;
    animation: slide-from-top 0.4s ease-in-out;

    // &:hover {
    //   background: linear-gradient(
    //     90deg,
    //     rgba(236, 159, 5, 1) 40%,
    //     rgba(236, 86, 5, 1) 100%
    //   );
    // }
  }

  &__error {
    // font-weight: $slim-weight;
    font-size: 12px;
    color: $primary-color;
  }
}
.HP {
  display: none;
}
</style>
