import { applyPlugin } from 'nuxt/app';
<script setup lang="ts">
import { ref } from "vue";

let isMenuOpen = ref(false);
</script>
<template>
  <header class="header">
    <nav class="header__nav">
      <NuxtLink class="header__nav__logo" to="/"
        ><img
          class="header__nav__logo__img"
          src="@/assets/images/logo-inseec.svg"
          alt="logo inseec campus chambéry"
      /></NuxtLink>
      <img
        class="header__nav__icon"
        src="@/assets/icons/burger.svg"
        alt="menu burger"
        @click="isMenuOpen = !isMenuOpen"
      />
      <div
        class="header__nav__invisible"
        v-if="isMenuOpen"
        @click="isMenuOpen = false"
      ></div>
      <ul class="header__nav__ul" v-if="isMenuOpen">
        <li class="header__nav__ul__li">
          <NuxtLink
            class="header__nav__ul__li__link"
            to="/evenements"
            exact
            @click="isMenuOpen = !isMenuOpen"
            >Evénements</NuxtLink
          >
        </li>
        <li class="header__nav__ul__li">
          <NuxtLink
            class="header__nav__ul__li__link"
            to="/actualites"
            exact
            @click="isMenuOpen = !isMenuOpen"
            >Actualités</NuxtLink
          >
        </li>
        <li class="header__nav__ul__li">
          <NuxtLink
            class="header__nav__ul__li__link"
            to="/partenaires"
            exact
            @click="isMenuOpen = !isMenuOpen"
            >Partenaires & Assos</NuxtLink
          >
        </li>
        <li class="header__nav__ul__li">
          <NuxtLink
            class="header__nav__ul__li__link"
            to="/equipes"
            exact
            @click="isMenuOpen = !isMenuOpen"
            >Équipes</NuxtLink
          >
        </li>

        <li class="header__nav__ul__li">
          <NuxtLink
            class="header__nav__ul__li__link"
            to="/programmes"
            exact
            @click="isMenuOpen = !isMenuOpen"
            >Programmes</NuxtLink
          >
        </li>
        <li class="header__nav__ul__li">
          <NuxtLink
            class="header__nav__ul__li__link"
            to="/contact"
            exact
            @click="isMenuOpen = !isMenuOpen"
            >Contact</NuxtLink
          >
        </li>
      </ul>

      <ul class="header__nav__ul--desktop">
        <li class="header__nav__ul--desktop__li">
          <NuxtLink
            class="header__nav__ul--desktop__li__link"
            to="/evenements"
            exact
            >Evénements</NuxtLink
          >
        </li>

        <li class="header__nav__ul--desktop__li">
          <NuxtLink
            class="header__nav__ul--desktop__li__link"
            to="/partenaires"
            exact
            >Partenaires & Assos</NuxtLink
          >
        </li>
        <li class="header__nav__ul--desktop__li">
          <NuxtLink
            class="header__nav__ul--desktop__li__link"
            to="/equipes"
            exact
            >Équipes</NuxtLink
          >
        </li>
        <li class="header__nav__ul--desktop__li">
          <NuxtLink
            class="header__nav__ul--desktop__li__link"
            to="/programmes"
            exact
            >Programmes</NuxtLink
          >
        </li>
        <li class="header__nav__ul--desktop__li">
          <NuxtLink
            class="header__nav__ul--desktop__li__link"
            to="/contact"
            exact
            >Contact</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>
<style lang="scss" scoped>
.router-link-exact-active {
  text-decoration: underline;
  text-decoration-color: $secondary-color;
  text-decoration-thickness: 2px;
  text-underline-offset: 8px;

  &:hover::after {
    display: none;
  }
}

.header {
  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;
  background-color: $primary-color;
  z-index: 2;

  &__nav {
    max-width: 2000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 2rem;
    padding: 1rem;

    @media (min-width: $big-tablet-screen) {
      gap: 4rem;
      padding: 0.5rem 2rem;
    }

    &__logo {
      width: 200px;
      height: 52px;

      &__img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    &__icon {
      width: 24px;
      height: 24px;
      position: relative;

      @media (min-width: $laptop-screen) {
        display: none;
      }
    }

    &__invisible {
      backdrop-filter: blur(4px);
      position: fixed;
      inset: 0;
    }

    &__ul {
      display: flex;
      list-style: none;
      flex-direction: column;
      justify-content: center;
      position: fixed;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: $primary-color;
      margin: auto;
      box-shadow: $shadow;
      animation: slide-from-right 0.4s ease;

      @media (min-width: $laptop-screen) {
        display: none;
      }

      &__li {
        padding: 1rem;

        &__link {
          font-weight: $thick;
          &::after {
            content: "";
            display: block;
            width: 1%;
            transition:
              width 0.3s ease-in-out,
              background-color 0.3s ease-in-out;
          }

          @media (min-width: $laptop-screen) {
            &:hover::after {
              width: 100%;
              background-color: $secondary-color;
            }
          }
        }
      }
    }

    &__ul--desktop {
      display: none;

      @media (min-width: $laptop-screen) {
        gap: 1rem;
        display: flex;
        list-style: none;
        flex-direction: column;
        justify-content: center;
        flex-direction: row;
      }

      &__li {
        padding: 1rem;

        &__link {
          font-weight: $thick;
          &::after {
            content: "";
            display: block;
            margin-top: 2px;
            width: 1%;
            height: 2px;
            transition:
              width 0.3s ease-in-out,
              background-color 0.3s ease-in-out;
          }

          &:hover::after {
            width: 100%;
            background-color: $secondary-color;
          }
        }
      }
    }
  }
}
</style>
