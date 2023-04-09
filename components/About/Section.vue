<template>
    <div class="wrapper grid-fixed" :class="reverse ? 'grid-reverse' : ''">
        <div class="text-wrapper">
            <h2>{{ data?.headline }}</h2>
            <div class="rte">
                <SanityContent :blocks="data?.text?.rte"></SanityContent>
            </div>

        </div>
        <div v-if="data.media" class="image-wrapper">
            <div v-for="(item, index) in data.media" :key="index">
                <div v-if="item._type == 'video'">
                    <SystemVideo :poster="item.poster" :video="item.video"></SystemVideo>
                </div>
                <div v-if="item._type == 'image'">
                    <SystemImage :image="item.asset" :cover="true"></SystemImage>
                </div>
            </div>
        </div>

    </div>
</template>
<script setup>
const props = defineProps(['data', 'reverse'])
</script>

<style lang="scss" scoped>
.wrapper {
    @include contained;
    padding: 200px 0;

    @media (max-width: $collapse-bp) {
        padding: 90px 0;
    }
}

.grid-fixed {
    .text-wrapper {
        grid-column: 2/span 5;
        grid-row: 1 / 2;
        place-self: center;
    }

    .image-wrapper {
        grid-column: 8/span 5;
        grid-row: 1 / 2;
    }

    @media (max-width: $collapse-bp) {
        display: flex;
        flex-direction: column-reverse;

        .text-wrapper {
            margin-top: 30px;
            place-self: flex-start;
        }
    }
}


.grid-fixed.grid-reverse {
    .text-wrapper {
        grid-column: 8/span 5;
        grid-row: 1 / 2;
    }

    .image-wrapper {
        grid-column: 2/span 5;
        grid-row: 1 / 2;
    }

}



.image-wrapper {
    display: flex;
    height: 344px;

    @media (max-width: $collapse-bp) {
        height: 500px;
    }

    grid-column-gap: 15px;
    overflow: hidden;

    >* {
        place-self: center;
        min-height: 100%;

        &+* {
            padding-left: 15px;
        }
    }

    * {
        width: 100%;
        height: 100%;
    }
}
</style>