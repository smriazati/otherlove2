<template>
    <div class="wrapper">
        <h2>{{ data?.headline }}</h2>
        <div class="rte">
            <SanityContent :blocks="data?.text?.rte"></SanityContent>
        </div>
    </div>
</template>
<script setup>
const props = defineProps(['data'])
// console.log(props);
</script>

<style lang="scss" scoped>
.wrapper {
    @include contained;
    padding: 180px 15px;
}

h2 {
    font-size: 26px;
    line-height: 34px;
}

h2,
.rte {
    max-width: 600px;
}

.rte {
    margin-top: 30px;
}

p {
    font-size: 18px;
    line-height: 26px;
}
</style>