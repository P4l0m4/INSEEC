<script setup>
useJsonld(
  () => (
    {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      name: "INSEEC campus Chambéry",
      url: "https://chamberycampus.com/",
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "INSEEC campus Chambéry",
      alternateName: "INSEEC Chambéry",
      url: "https://chamberycampus.com/",
      logo: "	https://chamberycampus.com/_nuxt/logo-inseec.a0368931.svg",
      sameAs: [
        "https://www.linkedin.com/company/tekila-web-factory/about/",
        "https://www.facebook.com/INSEEC.Chambery/",
        "https://www.instagram.com/inseec_campus_chambery/",
        "https://www.linkedin.com/school/inseeccampuschamberysavoie/?originalSubdomain=fr",
        "https://chamberycampus.fr/",
      ],
    }
  )
);
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
