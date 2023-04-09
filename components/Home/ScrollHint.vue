<template>
    <div v-if="!hasScrolled" class="scroll-hint-wrapper">
        <p>Scroll</p>
    </div>
</template>
<script setup>
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const hasScrolled = ref(false)
const setScrollHint = () => {
    ScrollTrigger.create({
        start: `0`,
        onToggle: (self) => {
            if (self.isActive) {
                hasScrolled.value = true
            }
        },
    });
}
onMounted(() => {
    setScrollHint()
})

</script>
<style lang="scss" scoped>
.scroll-hint-wrapper {
    position: fixed;
    bottom: 60px;
    right: 5%;

    p {
        font-size: 15px;
        line-height: 20px;
    }
}
</style>