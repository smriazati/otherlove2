<template>
    <div class="wrapper grid-fixed">
        <div class="image-wrapper" v-if="data.profile?.url">
            <img :src="`${$urlFor(data.profile.url)
                .forceDownload(data.profile.originalFilename)
                .size(800)}`" :alt="data.profile.alt" width="800" />
        </div>
        <div class="text-wrapper">
            <h2 v-if="data.name">
                <span class="name"> {{ data.name }}</span>
                <span v-if="data.pronouns" class="pronouns">
                    {{ data.pronouns }}</span>
            </h2>
            <h3 v-if="data.title">{{ data.title }}</h3>
            <div v-if="data.bio" class="bio rte">
                <SanityContent :blocks="data.bio" />
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps(['data'])
</script>
<style lang="scss" scoped>
.text-wrapper {
    grid-column: 6 / span 6;

    @media (max-width: $mobile-bp) {
        grid-column: 1 / span 12;
    }

    &.bio {
        padding-right: 5%;
    }

    &.announcement {
        grid-column: 9 / span 4;

        @media (max-width: $mobile-bp) {
            grid-column: 9 / span 2;
        }
    }
}

.image-wrapper {
    grid-column: 2 / span 4;
    padding-right: 25%;

    @media (max-width: $mobile-bp) {
        grid-column: 1 / span 12;
        padding-left: 0;
        padding-right: 0;
        margin-bottom: 30px;
    }

    img {
        filter: blur(0px);
        transition: 0.5s ease all;
    }

    &:hover {
        img {
            filter: blur(20px);
        }
    }
}

h2 {
    display: flex;
    align-items: center;
    font-family: "Reckless", serif;
    font-size: 22px;
    line-height: 22px;

    .pronouns {
        font-family: "DM Sans", sans-serif;
        font-size: 10px;
        line-height: 20px;
        margin-left: 5px;
    }
}

h3 {
    font-size: 14px;
    line-height: 20px;
    text-transform: uppercase;
}

p {
    font-size: 14px;
    line-height: 20px;
}
</style>