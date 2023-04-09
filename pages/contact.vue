<template>
    <div>
        <SystemPageMetadata title="Contact" schemaType="contactPage"></SystemPageMetadata>
        <div class="container page-contact" v-if="data">
            <section class="contact-intro">
                <div class="text-wrapper">
                    <h1>Get in touch</h1>
                    <p v-if="data.formMessage">
                        {{ data.formMessage }}
                    </p>
                </div>
            </section>
            <div class="contact-form-wrapper">
                <ContactForm></ContactForm>
            </div>
            <div class="contact-sidebar-wrapper">
                <ContactSidebar :data="data.contactSidebar" />
            </div>
        </div>
    </div>
</template>
  
<script setup>
const query = `
*[_type == "contactPage"][0]{
    contactSidebar,
    formMessage
}
`
const { data } = await useSanityQuery(query);

</script>
  
<style lang="scss" scoped>
.contact-intro {
    grid-column: 2 / span 5;
    margin-bottom: 30px;

    @media (max-width: $mobile-bp) {
        grid-column: 1 / span 12;
    }
}

.contact-form-wrapper {
    grid-column: 2 / span 5;

    @media (max-width: $mobile-bp) {
        grid-column: 1 / span 12;
        grid-row: 2 / 3;
        margin-bottom: 30px;
    }
}

.contact-sidebar-wrapper {
    grid-column: 8 / 13;

    @media (max-width: $mobile-bp) {
        grid-column: 1 / span 12;
        grid-row: 3 / 4;
    }
}

h1 {
    font-size: 32px;
    line-height: 44px;
}

p {
    font-size: 26px;
    line-height: 34px;
}
</style>