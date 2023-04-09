<template>
    <div class="page-container">
        <div class="wrapper">
            <h1>Coming soon</h1>
            <nuxt-link to="/work">Back to all work</nuxt-link>
        </div>
    </div>
</template>

<script setup>

const query = groq`
*[_type=="projects" && slug.current == $slug][0]
`;
const route = useRoute()
const { data } = await useSanityQuery(query, { slug: route.params.id })

</script>
<style lang="scss" scoped>
.wrapper {
    @include contained;
    text-align: center;
}

h1 {
    margin-bottom: 30px;
}

a {
    text-transform: uppercase;
    border-bottom: 1px solid black;
}
</style>