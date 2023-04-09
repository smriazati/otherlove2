<template>
  <span v-if="data">
    <SystemImage :image="data.submark" :width="width"></SystemImage>
  </span>
</template>

<script setup>
const props = defineProps(['width'])

const query = `
*[_type == "siteSettings"][0]{
  "submark": submark.asset->{url, altText, originalFilename}
}
`
const { data } = await useSanityQuery(query);

</script>
<style lang="scss" scoped>
header .collapsible {
  img {
    width: 35px;
    filter: grayscale(1) invert(1);
  }
}

footer {
  .submark img {
    max-width: 50px;
    filter: grayscale(1) invert(1);
  }
}
</style>