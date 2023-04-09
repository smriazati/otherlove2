<template>
    <div class="template-home">
        <SiteNav />
        <main>
            <slot />
        </main>
    </div>
</template>
<style lang="scss" scoped>
.template-home {
    background: #000;
    color: #fff;
}
</style>