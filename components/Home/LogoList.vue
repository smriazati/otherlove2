<template>
    <section class="grid-fixed">
        <ul ref="imageWrapper" v-if="logos" class="logo-wrapper">
            <li v-for="item in logos" :key="item._key" class="logo-wrapper-item">
                <img :src="`${$urlFor(item.image.image.url)
                    .forceDownload(item.image.image.originalFilename)
                    .size(500)}`" :alt="item.image.image.altText" width="500" />
            </li>
        </ul>
    </section>
</template>
<script setup>
import gsap from 'gsap';

const props = defineProps(['logos'])

const setImageAnimation = (ref) => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ref,
            // markers: true,
            start: `top-=${ref.offsetHeight}px bottom`,
            end: "bottom top",
            scrub: 0.1,
        },
    });

    tl.to(ref, {
        scale: 0,
        "-webkit-filter": "blur(30px)",
        filter: "blur(30px)",
        duration: 1,
    })
        .to(ref, {
            scale: 0.3,
            "-webkit-filter": "blur(0px)",
            filter: "blur(0px)",
            duration: 2,
        })
        .to(ref, {
            scale: 1,
            "-webkit-filter": "blur(0px)",
            filter: "blur(0px)",
            duration: 6,
        })
        .to(ref, {
            "-webkit-filter": "blur(30px)",
            filter: "blur(30px)",
            duration: 1,
        });
}

const imageWrapper = ref();
const initImageAnimation = () => {
    if (imageWrapper) {
        const refs = gsap.utils.toArray(imageWrapper.value.querySelectorAll(".logo-wrapper-item"));
        if (refs) {
            refs.forEach((ref) => {
                const img = ref.querySelector("img");
                if (img.complete) {
                    setImageAnimation(ref);
                } else {
                    img.addEventListener("load", () => {
                        setImageAnimation(ref);
                    });
                    img.addEventListener("error", () => {
                        console.log("error, no image loaded, no animation set");
                    });
                }
            });
        }
    }
}

onMounted(() => {
    initImageAnimation()
})

</script>

<style lang="scss" scoped>
.logo-wrapper {
    padding-top: 100vh;
    padding-bottom: 100vh;
    list-style: none;
    grid-column: 7 / span 6;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 10px;

    .logo-wrapper-item {
        padding: 10vh 0;
        place-self: center;

        &:nth-child(3n+1) {
            grid-column: 1 / span 2;
        }

        &:nth-child(3n+2) {
            grid-column: 4 / span 2;
        }

        &:nth-child(3n+3) {
            grid-column: 2 / span 2;
        }
    }
}
</style>