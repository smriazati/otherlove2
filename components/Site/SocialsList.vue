<template>
    <ul>
        <li v-for="(item, index) in data.socials" :key="index">
            <a :href="item.link" target="_blank">{{ item.title }}</a>
        </li>
    </ul>
</template>
<script setup>
const query = `
*[_type == "siteSettings"][0]{
  socials
}
`
const { data } = await useSanityQuery(query);
</script>

<style lang="scss" scoped>
ul {
    list-style: none;
}

footer ul {
    font-size: 14px;
    line-height: 20px;
}

header .collapsible {
    ul {
        margin-bottom: 30px;
    }

    a {
        color: $cloud;
        padding: 5px;
        font-size: 14px;
        line-height: 20px;
    }
}
</style>