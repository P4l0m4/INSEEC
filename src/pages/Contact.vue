<script setup>
useHead(() => {
  return {
    title: "Contact | INSEEC Campus Chambéry Savoie",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Contacter l’INSEEC Campus Chambéry Savoie. Vos interlocuteurs sur le campus.",
      },
    ],
  };
});
</script>

<template>
  <section class="contact">
    <Container>
      <div class="contact__list">
        <h1 class="contact__list__title titles">
          VOS INTERLOCUTEURS SUR LE CAMPUS
        </h1>

        <div class="contact__list__people">
          <div class="contact__list__people__card">
            <span class="contact__list__people__card__title subtitles"
              >Associations</span
            >

            <span class="contact__list__people__card__name"
              >Alexandre VALENTINO</span
            >
            <div class="contact__list__people__card__info">
              <span class="contact__list__people__card__info__coordinates"
                ><img src="@/assets/icons/phone.svg" alt="icone telephone" />06
                03 49 78 98</span
              >
              <span class="contact__list__people__card__info__coordinates"
                ><img
                  src="@/assets/icons/email.svg"
                  alt="icone email"
                />adressemail[@]gmail.com</span
              >
            </div>
          </div>
          <div class="contact__list__people__card">
            <span class="contact__list__people__card__title subtitles"
              >Communication</span
            >

            <span class="contact__list__people__card__name"
              >Théo BONNET-LIGEON</span
            >
            <div class="contact__list__people__card__info">
              <span class="contact__list__people__card__info__coordinates"
                ><img src="@/assets/icons/phone.svg" alt="icone telephone" />04
                79 25 34 36
              </span>
              <span class="contact__list__people__card__info__coordinates"
                ><img
                  src="@/assets/icons/email.svg"
                  alt="icone email"
                />adressemail[@]gmail.com</span
              >
            </div>
          </div>
          <div class="contact__list__people__card">
            <span class="contact__list__people__card__title subtitles"
              >Référents Handicap</span
            >

            <span class="contact__list__people__card__name"
              >Clément BERTACCO (MSc)</span
            >
            <div class="contact__list__people__card__info">
              <span class="contact__list__people__card__info__coordinates"
                ><img src="@/assets/icons/phone.svg" alt="icone telephone" />06
                04 79 25 38 05</span
              >
              <span class="contact__list__people__card__info__coordinates"
                ><img
                  src="@/assets/icons/email.svg"
                  alt="icone email"
                />adressemail[@]gmail.com</span
              >
            </div>
            <span class="contact__list__people__card__name"
              >Sophie CHOUKROUN (Bachelor)</span
            >
            <div class="contact__list__people__card__info">
              <span class="contact__list__people__card__info__coordinates"
                ><img src="@/assets/icons/phone.svg" alt="icone telephone" />04
                79 25 38 37</span
              >
              <span class="contact__list__people__card__info__coordinates"
                ><img
                  src="@/assets/icons/email.svg"
                  alt="icone email"
                />adressemail[@]gmail.com</span
              >
            </div>
          </div>
          <div class="contact__list__people__card">
            <span class="contact__list__people__card__title subtitles"
              >Relations Entreprises & Alumni</span
            >

            <span class="contact__list__people__card__name"
              >Théo BONNET-LIGEON</span
            >
            <div class="contact__list__people__card__info">
              <span class="contact__list__people__card__info__coordinates"
                ><img src="@/assets/icons/phone.svg" alt="icone telephone" />04
                79 25 35 79
              </span>
              <span class="contact__list__people__card__info__coordinates"
                ><img
                  src="@/assets/icons/email.svg"
                  alt="icone email"
                />srea.chambery[@]omneseducation.com</span
              >
            </div>
          </div>
          <div class="contact__list__people__card">
            <span class="contact__list__people__card__title subtitles"
              >Admission Etudiants Internationaux</span
            >

            <div class="contact__list__people__card__info">
              <span class="contact__list__people__card__info__coordinates"
                ><img src="@/assets/icons/phone.svg" alt="icone telephone" />01
                42 27 33 77
              </span>
              <span class="contact__list__people__card__info__coordinates"
                ><img
                  src="@/assets/icons/email.svg"
                  alt="icone email"
                />internationaladmissions[@]omneseducation.fr</span
              >
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
<style lang="scss" scoped>
.contact {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;

  @media (min-width: $big-tablet-screen) {
    gap: 6rem;
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (min-width: $big-tablet-screen) {
      gap: 4rem;
    }

    &__title {
      width: 100%;
    }

    &__people {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(343px, 1fr));
      gap: 1rem;
      @media (min-width: $big-tablet-screen) {
        gap: 2rem;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
      }

      &__card {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        // background-color: $primary-color;
        // border-radius: $radius;
        // box-shadow: $shadow;

        &__title {
          color: $secondary-color-faded;
        }

        &__name {
          font-size: $base-text;
          font-weight: $thick;
        }

        &__info {
          margin-top: -0.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;

          @media (min-width: $big-tablet-screen) {
            flex-direction: row;
          }

          &__name {
          }

          &__coordinates {
            display: flex;
            align-items: center;
            gap: 0.25rem;

            & img {
              width: 24px;
              height: 24px;
            }
          }
        }
      }
    }
  }
}
</style>
