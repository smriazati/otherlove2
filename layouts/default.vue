<template>
    <div class="layout-default">
        <SiteNav></SiteNav>
        <main>
            <slot />
        </main>
        <SiteFooter></SiteFooter>
    </div>
</template>

<style lang="scss" scoped>
.layout-default {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: space-between;
    background: #fff;
    transition: .3s ease all;
}
</style>