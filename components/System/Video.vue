<template>
    <div class="media-wrapper">
        <div v-if="poster" class="image-wrapper" ref="img">
            <SystemImage :image="poster"></SystemImage>
        </div>
        <div v-if="video" class="video-wrapper">
            <SanityFile :asset-id="video">
                <template #default="{ src }">
                    <video :src="src" autoplay muted loop></video>
                </template>
            </SanityFile>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['video', 'poster'])
// console.log('system video', props)

</script>

<style lang="scss" scoped>
.media-wrapper {
    @include stackedDivs;

    >*,
    video,
    img {
        height: 100%;
        min-height: 100%;
        object-fit: cover;
    }

    .image-wrapper {
        position: relative;
        z-index: 1;
    }

    .video-wrapper {
        position: relative;
        z-index: 2;
    }
}
</style>