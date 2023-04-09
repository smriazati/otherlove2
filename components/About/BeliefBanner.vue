<template>
    <div class="text-wrapper">
        <h2 v-if="data.title">
            {{ data.title }}
        </h2>
        <ol ref="ticker">
            <li v-for="item in data.beliefs" :key="item._id">
                {{ item }}
            </li>
        </ol>
    </div>
</template>
<script setup>
import gsap from 'gsap';

const props = defineProps(['data'])

const ticker = ref();
const setTickerAnimation = () => {
    if (!ticker) { return }

    let tickerStart;
    let speed;
    const tickerWidth = ticker.value.offsetWidth;
    if (window.innerWidth > 768) {
        tickerStart = tickerWidth;
        speed = 30;
    } else {
        tickerStart = window.innerWidth / 2;
        speed = 15;
    }
    gsap.set(ticker.value, {
        x: tickerStart - 80,
    });
    gsap.to(ticker.value, {
        x: -tickerWidth,
        repeat: -1,
        ease: "linear",
        duration: speed,
    });
}
onMounted(() => {
    setTickerAnimation();
})
</script>
<style lang="scss" scoped>
.text-wrapper {
    border-bottom: 1px solid black;
    overflow: hidden;
    padding: 30px;
    overflow: hidden;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    >* {
        margin: 0;
    }
}

// ticker
.text-wrapper {
    padding-left: 0;

    h2 {
        padding-left: 30px;
    }
}

h2 {
    background: $cloud;
    padding-right: 30px;
    position: relative;
    z-index: 10;
    text-transform: uppercase;
    font-size: 18px;
    line-height: 20px;
    white-space: nowrap;
    margin-right: 30px;
}

ul,
ol {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    list-style: disc;

    li {
        white-space: nowrap;
        display: inline-block;
        font-size: 14px;
        line-height: 20px;

        &:not(:last-child) {
            padding-right: 60px;

            @media (max-width: $mobile-bp) {
                padding-right: 30px;
            }
        }
    }
}
</style>