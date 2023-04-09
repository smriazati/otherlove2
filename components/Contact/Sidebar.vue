<template>
    <div class="contact-sidebar">
        <div class="text-wrapper" v-if="data">
            <SanityContent :blocks="data" />
        </div>
    </div>
</template>

<script setup>

const props = defineProps(['data'])

</script>
<style lang="scss">
.contact-sidebar {
    display: flex;
    flex-direction: column;

    .text-wrapper:not(:last-child) {
        margin-bottom: 70px;
    }

    h2 {
        font-size: 22px;
        line-height: 29px;
    }

    p+h2 {
        margin-top: 70px;
    }

    font-size: 11px;
    line-height: 15px;

    p {
        font-size: 14px;
        line-height: 18px;
    }


}
</style>
