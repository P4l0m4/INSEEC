<script setup>
import { stringToSlug } from "@/utils/slugify.js";
const story = await useAsyncStoryblok("news", { version: "published" });
const dayjs = useDayjs();
const route = useRoute();
const articleSlug = route.params.slug;
const article = story.value.content.newsList.find(
  (a) => stringToSlug(a.title) === articleSlug
);

useHead(() => {
  return {
    title: article.title,
    meta: [
      {
        hid: "description",
        name: "description",
        content: article.TLDR,
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "article",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: article.title,
      },
      {
        hid: "og:url",
        property: "og:url",
        content: window.location.href,
      },
      {
        hid: "og:image",
        property: "og:image",
        content: article.images[0].filename,
      },
    ],
  };
});

//JSONLD
const breadcrumbs = [
  {
    name: "Accueil",
    url: window.location.origin,
  },
  {
    name: "Actualités",
    url: window.location.origin + "/actualites",
  },
  {
    name: article.title,
    url: window.location.href,
  },
];

useJsonld(() => ({
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": window.location.href,
  },
  headline: article.title,
  description: article.TLDR,
  image: article.images[0].filename,
  author: {
    "@type": "Organization",
    name: "INSEEC Chambéry",
    url: window.location.origin,
  },
  publisher: {
    "@type": "Organization",
    name: "INSEEC Chambéry",
    logo: {
      "@type": "ImageObject",
      url: "https://chamberycampus.com/_nuxt/logo-inseec.a0368931.svg",
    },
  },
  datePublished: dayjs(article.date).format("YYYY[-]MM[-]DD[T]HH[:]mm"),
}));
</script>
<template>
  <Container>
    <div class="article">
      <h1 class="article__title titles">
        {{ article.title }}
      </h1>
      <h2 class="article__tldr subtitles">{{ article.TLDR }}</h2>

      <div class="article__content">
        <div class="article__content__txt">
          <p
            class="article__content__paragraph"
            v-html="renderRichText(paragraph.text)"
            v-for="paragraph in article.paragraphs"
            :key="paragraph._uid"
          ></p>

          <iframe
            class="article__content__txt__video"
            :src="article.video"
            title="vidéo inseec campus chambéry"
            v-if="article.video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div class="article__content__images">
          <div
            class="article__content__images__frame"
            v-for="image in article.images"
          >
            <img
              class="article__content__images__frame__img"
              :src="image.filename"
              :alt="image.alt"
            />
          </div>
        </div>
      </div>
    </div>
  </Container>
  <News />
  <JsonldBreadcrumb :links="breadcrumbs" />
</template>
<style lang="scss" scoped>
.article {
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;

  @media (min-width: $big-tablet-screen) {
    gap: 4rem;
  }

  &__title {
    width: 100%;
  }

  &__tldr {
    width: 100%;
    margin-top: -1rem;
  }

  &__content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (min-width: $big-tablet-screen) {
      flex-direction: row;
    }

    &__txt {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      @media (min-width: $big-tablet-screen) {
        gap: 2rem;
      }

      &:deep(span) {
        color: $text-color !important;
        font-size: $base-text !important;
        font-weight: $skinny !important;
        font-family: "Custom" !important;
        background-color: $base-color !important;
      }

      &__video {
        width: 100%;
        height: 400px;
        border-radius: $radius;
        box-shadow: $shadow;
        border: none;
        outline: none;
      }
    }
    &__images {
      width: 100%;
      max-width: 650px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

      &__frame {
        width: 100%;
        max-width: 375px;
        height: 375px;
        padding: 1rem 1rem 3rem 1rem;
        background-color: $primary-color;
        border-radius: $radius;
        box-shadow: $shadow;
        &:nth-of-type(1n) {
          transform: rotate(0deg);
        }
        &:nth-of-type(2n) {
          transform: rotate(6deg);
        }
        &:nth-of-type(3n) {
          transform: rotate(-6deg);
        }
        &:nth-of-type(4n) {
          transform: rotate(0deg);
        }

        &__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: $radius;
        }
      }
    }
  }
}
</style>
