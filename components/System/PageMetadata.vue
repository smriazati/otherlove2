<template>
    <div>

        <Head>
            <Title>{{ pageTitle }}</Title>
            <Meta name="description" :content="description" />
            <Meta name="og:img" :content="ogImg" />
        </Head>
    </div>
</template>
<script setup>
const props = defineProps(['title', 'schemaType'])

const pageMetadataQuery = `*[_type == "${props.schemaType}"][0]{
    "pageTitle": pageMetadata.pageTitle,
    "pageDesc": pageMetadata.pageDesc,
    "pageOgImg": pageMetadata.ogImage.asset->url
}`
const { data: page } = await useSanityQuery(pageMetadataQuery);

const siteMetadataQuery = `*[_type == "siteSettings"][0]{
    'siteOgImg': ogImg.asset->url, 
    siteDesc
}`
const { data: site } = await useSanityQuery(siteMetadataQuery);

let pageTitle = '';
let description = '';
let ogImg = '';

if (page.value.pageTitle) {
    pageTitle = page.value.pageTitle
} else {
    pageTitle = props.title
}

if (page.value.pageDesc) {
    description = page.value.pageDesc
} else if (site.value.siteDesc) {
    description = site.value.siteDesc
}
if (page.value.pageOgImg) {
    ogImg = page.value.pageOgImg
} else if (site.value.siteOgImg) {
    ogImg = site.value.siteOgImg
} 
</script>