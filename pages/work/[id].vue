<template>
    <div class="page-container">

        <Head>
            <Title>{{ data.name }}</Title>
        </Head>
        <div>
            <div class="wrapper">
                <div class="fixed-content-wrapper">
                    <div class="text-wrapper">
                        <div class="grid-fixed">
                            <h1>{{ data.name }}</h1>
                            <ul v-if="data.category" class="categories-wrapper">
                                <li v-for="item in data.category" :key="item.id">
                                    {{ item.name }}
                                </li>
                            </ul>
                            <p>{{ data.description }}</p>
                        </div>
                    </div>
                </div>
                <div class="gallery-wrapper">
                    <ul class="grid-fixed">
                        <li v-for="item in data.gallery" :key="item.id">
                            <SystemImage :image="item.asset"></SystemImage>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const query = groq`
*[_type=="projects" && slug.current == $slug][0]{
    ...,
    category[]->,
    gallery[]{asset->{url, altText}}
}
`;
const route = useRoute()
const { data } = await useSanityQuery(query, { slug: route.params.id })

onMounted(() => {
    if (data.value.bgColor.hex) {
        const body = document.querySelector('.layout-default');
        if (body) {
            body.style.backgroundColor = data.value.bgColor.hex
        }
    }
})

onUnmounted(() => {
    if (data.value.bgColor.hex) {
        const body = document.querySelector('.layout-default');
        if (body) {
            body.style.backgroundColor = '#fff'
        }
    }
})
</script>
<style lang="scss" scoped>
.wrapper {
    @include contained;
    padding-bottom: 100px;
    min-height: 100vh;
}

.fixed-content-wrapper {
    position: fixed;
    bottom: 60px;
    left: 5%;
}

h1 {
    margin-bottom: 30px;
    font-size: 36px;
    font-weight: 400;
    line-height: 44px;
    letter-spacing: 0em;
    margin-bottom: $spacer;
}

p {
    font-size: 15px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
}

ul {
    list-style: none;
}

ul.categories-wrapper {
    display: flex;
    flex-wrap: wrap;

    >*:not(:last-child) {
        margin-right: $spacer;
    }

    li {
        font-family: DM Sans;
        font-size: 15px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0em;
        text-transform: uppercase;
    }
}

a {
    text-transform: uppercase;
    border-bottom: 1px solid black;
}

.text-wrapper .grid-fixed {

    * {
        padding-right: $spacer*1.5;
        grid-column: 1 / span 6;
    }
}

.gallery-wrapper .grid-fixed {
    li {
        grid-column: 7 / span 6;
    }
}
</style>