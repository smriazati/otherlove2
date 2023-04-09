<template>
  <div>
    <SystemPageMetadata title="Home" schemaType="homePage"></SystemPageMetadata>
    <div class="fixed-content-wrapper grid-fixed">
      <section>
        <div v-if="data">
          <h2 v-if="data.bannerText">
            {{ data.bannerText }}
          </h2>
          <p v-if="data.subText">
            {{ data.subText }}
          </p>
        </div>
      </section>
    </div>
    <HomeScrollHint></HomeScrollHint>
    <HomeLogoList :logos="data.logos"></HomeLogoList>
  </div>
</template>
  
<script setup>

const query = `
*[_type == "homePage"]{
  bannerText,
  subText,
  "logos": projects[]{
    _key,
    logoType, 
    "image": select(
      logoType == 'logo' => project->{"image": logo.asset->{altText, url, originalFilename}},
      logoType == 'mark' => project->{"image": submark.asset->{altText, url, originalFilename}}
    )
  }
}[0]
`
const { data } = await useSanityQuery(query);


definePageMeta({
  layout: "home"
});

</script>
<style lang="scss" scoped>
.fixed-content-wrapper {
  position: fixed;
  bottom: 60px;
  left: 5%;

  >section {
    grid-column: 1 / span 4;

    @media (max-width: $collapse-bp) {
      grid-column: 1/span 10;
    }
  }

  h2 {
    @media (max-width: $mobile-bp) {
      line-height: 50px;
    }
  }
}
</style>