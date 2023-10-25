<template>
    <nav class="nav">
        <ul>
            <li>
                <a-dropdown v-model:open="openDropdown" :overlayClassName="['nav-menu-dropdown', isSticky && 'nav-menu-dropdown-sticky']"
                            :destroyPopupOnHide="true">
                    <p>Maps</p>
                    <template class="nav-menu-dropdown" #overlay>
                        <div class="navbar-wrapper-dropdown">
                            <MapDropDownMenu/>
                        </div>
                    </template>
                </a-dropdown>
            </li>
            <li>
                <p>Apparel</p>
            </li>
            <li>
                <p>Retailers</p>
            </li>
            <li>
                <p>About </p>
                <div class="js-dropdown dropdown">
                    <div class="shell">
                        <ul>
                            <li>
                                <p>About Us</p>
                            </li>

                            <li>
                                <p>FAQS</p>
                            </li>

                            <li>
                                <p>Wholesale</p>
                            </li>
                        </ul>
                    </div><!-- /.shell -->
                </div><!-- /.dropdown -->
            </li>
            <li>
                <p>Contact Us</p>
            </li>
    </ul>
  </nav>


</template>

<script setup lang="ts">
import MapDropDownMenu from "~/components/layout-module/header-module/MapDropDownMenu.vue";

interface Props {
    isSticky : boolean
}
defineProps<Props>()
const openDropdown = ref<boolean>(false)



</script>



