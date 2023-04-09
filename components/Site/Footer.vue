<template>
    <footer class="site-footer">
        <div class="primary-footer row grid-fixed">
            <div class="col rte footer-column-block" v-if="footer.footer1">
                <SanityContent :blocks="footer.footer1.rte" />
            </div>

            <div class="col rte footer-column-block" v-if="footer.footer2">
                <SanityContent :blocks="footer.footer2.rte" />
            </div>

            <div class="col no-p-margin footer-column-block">
                <h2>Socials</h2>
                <SiteSocialsList></SiteSocialsList>
            </div>

            <div id="backToTop" class="col">
                <button @click="backToTop">Back to top</button>
            </div>
        </div>
        <div class="sub-footer">
            <p>&copy; {{ year }} Made with Otherlove, LLC.</p>
            <div class="submark">
                <div class="image-wrapper">
                    <nuxt-link to="/">
                        <SiteSubmark></SiteSubmark>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </footer>
</template>
  
<script setup>

const query = `
*[_type == "siteFooter"][0]{
  footer1, footer2
}
`

const { data: footer } = await useSanityQuery(query);

const backToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const year = computed(() => {
    const d = new Date();
    let year = d.getFullYear();
    return year
})
</script>
  
<style lang="scss" scoped>
#backToTop {
    grid-column: span 2 / 13;
    grid-row: 1 / 2;
    text-align: right;

    @media (max-width: $mobile-bp) {
        grid-column: 1 / span 5;
        grid-row: 4 / 5;
        text-align: left;
        margin-top: 111px;
        margin-bottom: 0;
    }

    button {
        color: $cloud;
    }
}

.grid-fixed {
    .col {
        grid-column: span 3;

        @media (max-width: $mobile-bp) {
            grid-column: span 8;
            margin-bottom: 30px;

            &:first-child {
                grid-row: 1 / 2;
            }

            &:nth-child(2) {
                grid-row: 2 / 3;
            }

            &:nth-child(3) {
                grid-row: 3 / 4;
            }
        }
    }
}

ul,
ol {
    list-style: none;
}

footer {
    width: 100%;
    background: #000;
    color: $cloud;
    padding: 60px 0 30px 0;
    position: relative;
    z-index: 13;
}

.sub-footer {
    @include contained;
    display: flex;
    padding: 80px 0 10px 0;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    @media (max-width: $mobile-bp) {
        padding: 0;
    }

    p {
        font-size: 10px;
        line-height: 20px;
    }
}

h2 {
    font-family: "Reckless", serif;
    font-size: 22px;
    line-height: 22px;
    margin-bottom: 10px;
}

p,
ul li,
ol li {
    font-size: 14px;
    line-height: 20px;
    max-width: 295px;
}

footer {
    position: relative;
    z-index: 11;
}
</style>