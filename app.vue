<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const { data } = await useSanityQuery(`*[_type == "siteSettings"][0]{siteTitle}`);
const siteTitle = data.value.siteTitle
useHead({
  titleTemplate: `%s - ${siteTitle}`,
})

</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
