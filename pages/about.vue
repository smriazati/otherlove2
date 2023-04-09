<template>
    <div class="page-container">
        <SystemPageMetadata title="About" schemaType="aboutPage"></SystemPageMetadata>
        <div class="contained">
            <div class="intro-section" ref="introSection">
                <AboutIntroSection :data="data.introSection"></AboutIntroSection>
            </div>
            <div class="gsap-container" ref="container">
                <div class="capabilities-section">
                    <AboutCapabilitiesSection :data="data.capabilitiesSection"></AboutCapabilitiesSection>
                </div>
                <div class="belief-banner-section">
                    <AboutBeliefBanner :data="data.beliefBanner"></AboutBeliefBanner>
                </div>
                <div class="section2">
                    <AboutSection :data="data.section_2"></AboutSection>
                </div>
                <div class="section3">
                    <AboutSection :data="data.section_3" :reverse="true"></AboutSection>
                </div>
                <div class="section4">
                    <AboutSection :data="data.section_4"></AboutSection>
                </div>
            </div>
            <div class="cta-section" ref="cta">
                <AboutCTA :data="data.cta"></AboutCTA>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import gsap from 'gsap';

const mediaQuery = `
_type == 'video' => {
    _type,
    "poster": poster.asset->{url, altText}, 
    "video": video.asset._ref
},
_type == 'image' => {
    _type,
    asset->{url, altText}
}
`
const query = `
*[_type == "aboutPage"][0]{
    introSection,
    capabilitiesSection,
    beliefBanner,
    'section_2': {
        ...section_2,
        "media": section_2.media[]{${mediaQuery}}
    },
    'section_3': {
        ...section_3,
        "media": section_3.media[]{${mediaQuery}}
    },
    'section_4': {
        ...section_4,
        "media": section_4.media[]{${mediaQuery}}
    },
    'cta': {
        ...cta,
        "video": {
            "poster": cta.video.poster.asset->{url, altText}, 
            "video": cta.video.video.asset._ref
        }
    }
}
`
const { data } = await useSanityQuery(query);

const ctx1 = ref();
const introSection = ref();
const pinIntroSection = () => {
    ctx1.value = gsap.context(() => {
        gsap.to(introSection.value, {
            scrollTrigger: {
                trigger: introSection.value,
                start: "top top",
                markers: true,
                pin: true,
                pinSpacing: false,
            },
        });
    }, introSection.value);
}

const ctx2 = ref();
const cta = ref();
const container = ref();
const pinCTA = () => {
    ctx2.value = gsap.context(() => {
        gsap.to(cta.value, {
            scrollTrigger: {
                trigger: cta.value,
                start: "top bottom",
                pin: container.value,
                pinSpacing: false,
            },
        });
    })

}

onMounted(() => {
    // pinIntroSection();
    // pinCTA();
})

onUnmounted(() => {
    // ctx1.value.revert()
    // ctx2.value.revert()
})


</script>
  
<style lang="scss">
.gsap-container {
    min-height: 100vh;

    >* {
        width: 100%;
    }
}
</style>