<template>
  <span v-if="data">
    <SystemImage :image="data.logo" :width="width"></SystemImage>
  </span>
</template>

<script setup>
const props = defineProps(['width'])

const query = `
*[_type == "siteSettings"][0]{
  "logo": siteLogo.asset->{url, altText, originalFilename}
}
`
const { data } = await useSanityQuery(query);

</script>