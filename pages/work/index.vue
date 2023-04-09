<template>
    <div class="page-container">
        <SystemPageMetadata title="Work" schemaType="workPage"></SystemPageMetadata>
        <ul class="work-grid">
            <li v-for="item in data" :key="item._id">
                <WorkGridItem :item="item"></WorkGridItem>
            </li>
        </ul>
    </div>
</template>

<script setup>

const query = `
*[_type == "projects" && isHidden != true]|order(orderRank){
  slug,
  "tnail": tnail.asset->{url, originalFilename, altText},
  name,
  _id
}
`
const { data } = await useSanityQuery(query);

</script>

<style lang="scss" scoped>
.work-grid {
    @include contained;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
    grid-gap: 100px;
    padding-bottom: 100px;
}
</style>