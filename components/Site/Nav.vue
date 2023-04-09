<template>
    <div :class="isMenuExpanded ? 'menu-expanded' : ''" class="header-wrapper">
        <header>
            <nuxt-link to="/" class="logo">
                <SiteLogo :width="300"></SiteLogo>
            </nuxt-link>
            <nav :class="isMenuExpanded ? 'expanded' : 'collapsed'">
                <button class="flat" @click="toggleMenu">
                    <span v-if="isMenuExpanded">Close</span>
                    <span v-else>Menu</span>
                </button>
                <div class="collapsible">
                    <ul ref="menu">
                        <li><nuxt-link to="/about">About</nuxt-link></li>
                        <li><nuxt-link to="/team">Team</nuxt-link></li>
                        <li><nuxt-link to="/work">Work</nuxt-link></li>
                        <li><nuxt-link to="/contact">Contact</nuxt-link></li>
                    </ul>

                    <div class="mobile-bonus-nav">
                        <SiteSocialsList></SiteSocialsList>
                        <div class="submark">
                            <div class="image-wrapper">
                                <nuxt-link to="/">
                                    <SiteSubmark />
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    </div>
</template>
  
<script setup>

const isMenuExpanded = ref(false)
const menu = ref()

const toggleMenu = () => {
    isMenuExpanded.value = !isMenuExpanded.value;
}
const closeMenu = () => {
    isMenuExpanded.value = false;
}

onMounted(() => {
    if (menu) {
        const navLinks = menu.value.querySelectorAll("li");
        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                closeMenu();
            });
        });
    }
})

</script>

  
<style lang="scss" scoped>
.template-home a,
.template-home button span {
    color: #fff;
}

header {
    width: 90%;
    left: 5%;
    position: fixed;
    z-index: 111;
    top: 0;
    display: flex;
    justify-content: space-between;

    .logo {
        padding-top: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 162px;
    }

    nav {
        grid-column: span 6 / 13;

        ul {
            display: flex;
            align-items: center;
            justify-content: flex-end;

            li {
                padding: 30px;

                transition: .3s ease all;

                &:last-child {
                    padding-right: 0;
                }

                a {
                    transition: .3s ease all;
                    font-size: 18px;
                    line-height: 16px;

                    @media (max-width: $mobile-bp) {
                        font-size: 20px;
                    }

                }

                a:not(.router-link-active):hover {
                    font-size: 20px;
                }

                a.router-link-active {
                    cursor: default;
                }

                a {
                    &.nuxt-link-active {
                        border-bottom: 1px solid black;
                    }
                }
            }
        }
    }
}

// mobile menu
@media (min-width: $nav-bp) {

    header nav>button,
    .mobile-bonus-nav {
        display: none;
    }
}

@media (max-width: $nav-bp) {
    header nav .collapsible {
        display: none;
    }

    header nav {
        display: flex;
        justify-content: flex-end;
    }

    header .logo {
        max-width: 200px;
    }

    header nav:not(.expanded) {
        .mobile-bonus-nav {
            display: none;
        }
    }

    .submark img {
        max-width: 35px;
        filter: grayscale(1) invert(1);
    }

    header nav.expanded {
        position: relative;

        button {
            position: relative;
            z-index: 100;
            color: white;
        }
    }

    header nav.expanded .collapsible {
        position: fixed;
        z-index: 99;
        top: 0;
        right: 0;
        padding: 5%;
        text-align: right;
        width: 70%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        // justify-content: center;
        background: #000;
        box-shadow: -12px 0px 30px #ee7b7b;

        >ul {
            flex: 2;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            >* {
                color: white;
            }

            >li {
                padding: 0;
                padding-top: 30px;
            }
        }

        .mobile-bonus-nav {
            flex: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            ul {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin-bottom: 10px;

                li {
                    padding: 5px;
                    font-size: 14px;
                    line-height: 20px;

                    a {
                        color: $cloud;
                    }
                }
            }
        }
    }
}
</style>