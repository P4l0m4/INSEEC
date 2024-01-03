<script setup>
useJsonld(() => ({
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  name: "INSEEC campus Chambéry",
  alternateName: "INSEEC Chambéry",
  url: "https://chamberycampus.com/",
  logo: "https://chamberycampus.com/_nuxt/logo-inseec.a0368931.svg",
  description:
    "L'INSEEC Chambéry est une école de commerce et de management située en Savoie. Elle propose des formations de Bac à Bac+5 en alternance et en initial.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "12 Avennue du Lac d'Annecy",
    addressLocality: "Le Bourget-du-Lac",
    addressRegion: "Auvergne Rhône Alpes",
    postalCode: "73381",
    addressCountry: "France",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "45.64395498437948",
    longitude: "5.870843396323475",
  },
  hasMap: "https://maps.app.goo.gl/JBZPMwA5SvdKDTok9",
  sameAs: [
    "https://www.facebook.com/INSEEC.Chambery/",
    "https://www.instagram.com/inseec_campus_chambery/",
    "https://www.linkedin.com/school/inseeccampuschamberysavoie/?originalSubdomain=fr",
    "https://chamberycampus.fr/",
  ],
}));
useJsonld(() => ({
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "INSEEC campus Chambéry",
  url: "https://chamberycampus.com/",
}));
</script>

<template>
  <HeaderComponent />
  <main>
    <slot />
  </main>
  <PopUp />
  <FooterComponent />
</template>
<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 88px;

  @media (min-width: $big-tablet-screen) {
    gap: 4rem;
    padding-top: 80px;
  }
}
</style>
