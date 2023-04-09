<template>
    <div class="wrapper">
        <div class="inner-wrapper">
            <h2>{{ data?.headline }}</h2>
            <div class="rte">
                <SanityContent :blocks="data?.text?.rte"></SanityContent>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps(['data'])
// console.log(props);
</script>

<style lang="scss" scoped>
.wrapper {
    background: #000;
    color: #fff;
}

.inner-wrapper {
    @include contained;
    padding: 50px 15px;
}

h2 {
    font-size: 18px;
    line-height: 26px;
    text-transform: uppercase;
    margin-bottom: 50px;
}
</style>