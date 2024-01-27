<script setup>
import { ref } from "vue";
const query = ref("");
const copyStatus = ref(false);
const matchingMembers = ref(props.story.content.members);
const props = defineProps({
  story: {
    type: Object,
    required: true,
  },
});

function search() {
  matchingMembers.value = props.story.content.members.filter((member) => {
    return (
      member.tags.some((tag) => {
        return tag.text.toLowerCase().includes(query.value.toLowerCase());
      }) ||
      member.name.toLowerCase().includes(query.value.toLowerCase()) ||
      member.role.toLowerCase().includes(query.value.toLowerCase()) ||
      member.description.toLowerCase().includes(query.value.toLowerCase()) ||
      member.desk.toLowerCase().includes(query.value.toLowerCase())
    );
  });
}

function copyToClipboard(mail) {
  navigator.clipboard.writeText(mail);
  copyStatus.value = true;

  setTimeout(() => {
    copyStatus.value = false;
  }, 500);
}
</script>
<template>
  <div class="search-section">
    <div class="search-section__header">
      <h1 class="search-section__header__title subtitles">
        Chercher une personne, un service, une mission, etc.
      </h1>
      <div class="search-section__header__wrapper">
        <input
          type="text"
          placeholder="Scolarité, communication, etc."
          class="search-section__header__wrapper__input"
          v-model="query"
          @input="search"
        />
        <img
          class="search-section__header__wrapper__icon"
          src="@/assets/icons/search.svg"
          alt="search icon inseec"
          @click="search"
        />
      </div>
      <span
        class="search-section__header__no-results"
        v-if="matchingMembers.length === 0"
        >Nous n'avons trouvé personne qui correspondait à votre recherche</span
      >
    </div>

    <div class="search-section__members">
      <div
        class="search-section__members__member"
        :style="`background-image: linear-gradient(
      190deg,
      rgba(255, 255, 255, 0) 40%,
      #2a3b6b
    ), url('${member.portrait.filename}')`"
        v-for="member in matchingMembers"
      >
        <div class="search-section__members__member__txt">
          <h2 class="search-section__members__member__txt__name">
            {{ member.name }}
          </h2>
          <h3 class="search-section__members__member__txt__role">
            {{ member.role }}
          </h3>
          <p class="search-section__members__member__txt__description">
            {{ member.description }}
          </p>
          <div class="search-section__members__member__txt__desk-and-email">
            <span
              class="search-section__members__member__txt__desk-and-email__desk"
              ><img
                src="@/assets/icons/desk-map.svg"
                alt="icone bureau inseec"
              />{{ member.desk }}</span
            >
            <button
              class="search-section__members__member__txt__desk-and-email__email button-tertiary"
              @click="copyToClipboard(member.email)"
            >
              <img
                src="@/assets/icons/copy.svg"
                alt="icone bureau inseec"
                v-if="!copyStatus"
              /><img
                src="@/assets/icons/copied.svg"
                alt="icone bureau inseec"
                v-if="copyStatus"
              />{{ member.email }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.search-section {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;

  &__header {
    display: flex;
    gap: 2rem;
    flex-direction: column;
    width: 100%;

    &__wrapper {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.25rem 1rem 0.25rem 0.25rem;
      border-radius: 24px;
      background-color: $primary-color;
      box-shadow: $shadow;
      width: 100%;

      &__input {
        padding: 0.5rem;
        outline: none;
        border: none;
        width: 100%;
      }
      &__icon {
        width: 20px;
        height: 20px;
        opacity: 0.5;
      }
    }
    &__no-results {
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
      animation: fading 0.4s;
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
        cursor: default;

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

        &__desk-and-email {
          display: flex;
          gap: 1rem;
          width: 100%;

          &__desk,
          &__email {
            display: flex;
            align-items: center;
            gap: 0.25rem;
            font-size: $small-text;
            text-shadow: $shadow-text;
            color: $text-color-alt;
            white-space: nowrap;
            overflow: ellipsis;

            & img {
              width: 20px;
              height: 20px;
            }
          }

          &__email {
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
