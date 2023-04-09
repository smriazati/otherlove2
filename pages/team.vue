<template>
    <div>
        <SystemPageMetadata title="Team" schemaType="teamPage"></SystemPageMetadata>
        <div class="page-container page-team" v-if="data">
            <div v-for="item in data" :key="item._id" class="person">
                <TeamMember :data="item"></TeamMember>
            </div>
        </div>
    </div>
</template>
  
<script setup>

const query = `
*[_type == "team" && (!isHidden || isHidden == undefined)]|order(orderRank){
 ...,
  "profile": profile.asset->
}
`
const { data } = await useSanityQuery(query);

</script>

<style lang="scss">
.page-team {
    padding: 100px 0;

    @media (max-width: $mobile-bp) {
        display: flex !important;
        flex-direction: column;
    }

    >* {
        grid-column: 1 / span 11;

        &:not(:last-child) {
            margin-bottom: 150px;

            @media (max-width: $mobile-bp) {
                margin-bottom: 50px;
            }
        }
    }
}
</style>