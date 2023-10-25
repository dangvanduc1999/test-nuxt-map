<template>
    <header class="header js-header">
        <div class="bar">
            <div class="shell">
                <p>free shipping on orders $100 or more</p>
            </div>
        </div>
        <div class="header__content">
            <div class="shell">
                <div class="header__content-inner">
                    <nuxt-link to="/" class="logo header__logo">
                        <img src="https://cdn11.bigcommerce.com/s-kipp5/content/theme_images/logo@2x.png" alt=""
                             width="550"/>
                    </nuxt-link>

                </div>
            </div>
        </div>
    </header>
    <div class="header__nav" ref="headerSticky">
        <div class="shell">
            <div class="header__nav-inner">
                <div class="sticky-logo">
                    <img src="https://cdn11.bigcommerce.com/s-kipp5/content/theme_images/sc-logo.jpg" alt="logo">
                </div>
                <Navbar/>
            </div>
            <div class="search">
                <a-form  autocomplete="off">
                    <a-form-item class="search-form" >
                        <a-input type="text" name="q" id="q"    placeholder="Search the store" class="search__field">
                            <template #prefix>
                                <SearchOutlined />
                            </template>
                        </a-input>
                    </a-form-item>
                </a-form>
            </div>
            <div class="nav-trigger js-nav-trigger" @click="toggleShowDrawerMobile">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <MobileNavBar @toggle="toggleShowDrawerMobile" :open="isShowDrawerMobile" />
        </div>
    </div>
</template>
<script lang="ts" setup>

import Navbar from "~/components/layout-module/header-module/Navbar.vue";
import MobileNavBar from "~/components/layout-module/header-module/MobileNavBar.vue";
import {SearchOutlined} from "@ant-design/icons-vue"


const isShowDrawerMobile = ref<boolean>(false)
const headerSticky = ref<HTMLElement |null>(null)

//life cycle
onMounted(() => {
    window.addEventListener("scroll", handleStickyNavBar)
})
const toggleShowDrawerMobile = () => {
    isShowDrawerMobile.value = !isShowDrawerMobile.value
}
const handleStickyNavBar = ():void => {
    if(window.innerWidth <= 575 || !headerSticky.value) {
        return;
    }
    const sticky = headerSticky.value.offsetTop
    if (window.pageYOffset > sticky) {
        headerSticky.value.classList.add("sticky");
    } else {
        headerSticky.value.classList.remove("sticky");
    }
}

</script>

<style scoped lang="scss">
.sticky {
    position: fixed;
    top: 0;
    z-index: 100;
    width: 100%;
}
.search-form{
    margin-bottom: 0;
}
.search {
    flex-shrink: 0;
}
</style>
