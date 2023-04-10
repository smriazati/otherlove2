<template>
    <div class="page-container">

        <Head>
            <Title>{{ data.name }}</Title>
        </Head>
        <div>
            <div class="wrapper" ref="wrapper">
                <div class="fixed-content-wrapper" ref="textWrapper">
                    <div class="text-wrapper">
                        <h1>{{ data.name }}</h1>
                        <ul v-if="data.category" class="categories-wrapper">
                            <li v-for="item in data.category" :key="item.id">
                                {{ item.name }}
                            </li>
                        </ul>
                        <p>{{ data.description }}</p>
                    </div>
                </div>
                <div class="gallery-wrapper">
                    <ul>
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
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const query = groq`
*[_type=="projects" && slug.current == $slug][0]{
    ...,
    category[]->,
    gallery[]{asset->{url, altText}}
}
`;
const route = useRoute()
const { data } = await useSanityQuery(query, { slug: route.params.id })

// const wrapper = ref();
// const textWrapper = ref();
// const ctx = ref();
// const setPinAnimation = () => {
//     ctx.value = gsap.context(() => {
//         ScrollTrigger.create({
//             trigger: wrapper.value,
//             start: "top top",
//             markers: true,
//             pin: true
//         });
//     }, wrapper.value);
// }
onMounted(() => {
    if (data.value.bgColor?.hex) {
        const body = document.querySelector('.layout-default');
        if (body) {
            body.style.backgroundColor = data.value.bgColor.hex
        }
    }

    // setPinAnimation();
})

onUnmounted(() => {
    if (data.value.bgColor?.hex) {
        const body = document.querySelector('.layout-default');
        if (body) {
            body.style.backgroundColor = '#fff'
        }
    }
    // ctx.value.revert();
})
</script>
<style lang="scss" scoped>
.wrapper {
    padding-bottom: 100px;
    min-height: 100vh;
}

.fixed-content-wrapper {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
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



.text-wrapper {
    padding-bottom: 60px;
    padding-left: 5%;
    width: 50%;
    padding-right: 15px;
}

.gallery-wrapper {
    width: 50%;
    margin-left: 50%;
}
</style>