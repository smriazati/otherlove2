<template>
    <NuxtLink :to="`/work/${item.slug.current}`" class="work-grid-item-container" ref="wrapper" @mouseenter="mouseEnter"
        @mousemove="mouseMove" @mouseleave="mouseLeave">
        <div class="text-wrapper">
            <h2 class="project-title" ref="title">{{ item.name }}</h2>
        </div>
        <figure v-if="item.tnail" class="image-wrapper">
            <img :src="
                $urlFor(item.tnail.url)
                    .forceDownload(item.tnail.originalFilename)
                    .size(800)
            " :alt="item.tnail.altText" />
        </figure>
    </NuxtLink>
</template>
<script setup>
const props = defineProps(['item'])

const title = ref()
const wrapper = ref();

const mouseEnter = (event) => {
    title.value.style.position = "absolute";
    title.value.style.whitespace = "nowrap";
}
const mouseLeave = (event) => {
    title.value.style.position = "static";
    title.value.style.top = "unset";
    title.value.style.left = "unset";
    title.value.style.whitespace = "normal";
}
const mouseMove = (event) => {
    setTitlePosition(event.clientX, event.clientY);
}
const setTitlePosition = (x, y) => {
    const titleW = title.value.offsetWidth;
    const wrapperL = wrapper.value.$el.getBoundingClientRect().left;
    const wrapperT = wrapper.value.$el.getBoundingClientRect().top;
    const mouseX = x;
    const mouseY = y;

    const targetX = mouseX - wrapperL - titleW / 2;
    const targetY = mouseY - wrapperT;

    title.value.style.left = `${targetX}px`;
    title.value.style.top = `${targetY}px`;
}
</script>
  
<style lang="scss">
.work-grid-item-container {
    // display: flex;
    @include stackedDivs;
    position: relative;

    .text-wrapper {
        width: 100%;
        height: 100%;
        z-index: 3;
        opacity: 0;
        transition: 0.5s ease opacity;
        background: rgba($light, 0.9);
        @include flexCenter;
        padding: $spacer;

        h2 {
            @include fontDmSans;
            font-size: 36px;
            line-height: 40px;
            z-index: 30;
        }
    }

    .image-wrapper {
        z-index: 2;
        display: flex;
        overflow: hidden;
    }

    &:hover {
        .text-wrapper {
            opacity: 1;
        }
    }
}
</style>