<template>
    <div>
        <div>
            <div v-if="!showThanks && !showError" class="form-wrapper">
                <form id="contact" name="contact" method="post" netlify netlify-honeypot="bot-field" data-netlify="true"
                    @submit.prevent="onFormSubmit">
                    <input type="hidden" name="form-name" value="contact">
                    <div class="form-group">
                        <label for="name">Name *</label>
                        <input type="text" name="name" required placeholder="Name *">
                    </div>
                    <div class="form-group">
                        <label for="email">Email *</label>
                        <input type="email" name="email" required placeholder="Email *">
                    </div>
                    <div class="form-group">
                        <label for="message">Message *</label>
                        <textarea name="message" rows="5" required placeholder="Tell us about your project *"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="link">Website address and/or social link</label>
                        <input type="text" name="link" placeholder="Website address and/or social link" />
                    </div>
                    <div class="form-group">
                        <label for="referral">How did you hear about us?</label>
                        <input type="text" name="referral" placeholder="How did you hear about us?" />
                    </div>

                    <button class="btn">Submit</button>
                </form>
            </div>
            <div v-if="showThanks" class="confirmation-wrapper">
                <p>Thanks for reaching out! Your message has been submitted.</p>
            </div>
            <div v-if="showError" class="error-wrapper">
                <p>Sorry, something has gone wrong. Please try again later, or send an email to hello@otherlove.co</p>
            </div>
        </div>
    </div>
</template>
<script setup>
const showThanks = ref(false)
const showError = ref(false)

const onFormSubmit = (e) => {
    let myForm = document.getElementById("contact");
    let formData = new FormData(myForm);
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
    })
        .then(result => showThanks.value = true)
        .catch((error) => {
            console.log(error);
            showError.value = true
        });
}
useHead({
    title: 'Contact',
})
</script>

<style lang="scss" scoped>
label {
    display: none;
}

textarea {
    font-family: inherit;
    padding: 8px;
}

form {
    display: flex;
    flex-direction: column;

    .form-group {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        text-align: left;

        label {
            margin-bottom: 6px;
            font-size: 14px;
            text-transform: uppercase;
        }

        &+.form-group {
            margin-top: 50px;
        }
    }
}

button {
    margin-top: 50px;
    background: #181818;
    transition: all .3s ease;
    color: $cloud;
    border-radius: 20px;
    padding: 10px 20px;
    align-self: flex-start;
}
</style>

