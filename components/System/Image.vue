<template>
    <img :src="`${image.url}${width ? '?w=' + width : ''}`" :alt="image.altText" :width="width"
        :class="cover ? 'img-cover' : ''" />
</template>

<script setup>
const props = defineProps(['image', 'width', 'cover'])

</script>

<style lang="scss" scoped>
.img-cover {
    height: 100%;
    object-fit: cover;
}
</style>