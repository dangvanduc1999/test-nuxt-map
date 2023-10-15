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
                    <a href="#" class="logo header__logo">
                        <img src="https://cdn11.bigcommerce.com/s-kipp5/content/theme_images/logo@2x.png" alt=""
                             width="550"/>
                    </a>
                    <nav class="nav-profile">
                        <ul>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        <div class="header__nav">
            <div class="shell">
                <div class="header__nav-inner">
                    <Navbar/>
                </div>
                <div class="search">
                    <form>
                        <label for="q" class="hidden">Search</label>
                        <input type="search" name="q" id="q" value="" placeholder="Search" class="search__field"/>
                    </form>
                </div>
                <a href="#" class="nav-trigger js-nav-trigger">
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </div>
        </div>
    </header>
</template>
<script lang="ts" setup>

import Navbar from "~/components/layout-module/header-module/Navbar.vue";
</script>
