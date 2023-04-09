<template>
    <div class="wrapper">
        <div class="bg-video-wrapper">
            <SystemVideo :poster="data.video.poster" :video="data.video.video"></SystemVideo>
        </div>
        <div class="text-wrapper" v-if="data">
            <h2 v-if="data.text">{{ data.text }}</h2>
            <div class="button-wrapper">
                <nuxt-link to="/contact">Get in touch</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['data'])
// console.log('about cta', props);
</script>
<style lang="scss" scoped>
.wrapper {
    @include stackedDivs;

    >* {
        position: relative;
    }
}

.text-wrapper {
    z-index: 9;
    color: #fff;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
}

h2 {
    font-family: 'Reckless', serif;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 48px;
    margin-bottom: 30px;
}

.button-wrapper {
    display: flex;
    text-align: center;
    justify-content: center;

    a {
        font-size: 24px;
        line-height: 31px;
        color: $cloud;
        text-transform: uppercase;
        border-bottom: 1px solid $cloud;
    }
}
</style>