<template>
    <a-drawer
        title="Browse products"
        :root-class-name="'mobile-navbar-wrapper'"
        :placement="placement"
        :closable="true"
        :open="open"
        @close="onClose"
    >
        <a-menu
            v-model:openKeys="state.openKeys"
            v-model:selectedKeys="state.selectedKeys"
            mode="inline"
            class="menu-mobile-wrapper"
            :inline-collapsed="state.collapsed"
            v-if="!subMenuReactive.isShow"
        >
            <menu-item-link v-for="item in TopNavMenuMobile" :key="item.key"
                            :key-menu="item.key" :title="item.title"
                            :is-has-sub-menu="item.isHasSubMenu" :link="item.link" :label="item.label"
                            @toggle-show-sub-menu="toggleShowSubMenuReactive"
                            @toggle="onClose"
            />
        </a-menu>
        <Transition name="slide-fade">
            <h3 v-if="subMenuReactive.isShow" @click="subMenuReactive.isShow = false" class="mobile-title__submenu">
                <ArrowLeftOutlined class="icon"/>
                {{ subMenuReactive.titleSubMenu }}
            </h3>
        </Transition>
        <a-divider v-if="subMenuReactive.isShow" class="divider-submenu"/>
        <Transition name="slide-fade">
            <a-menu v-if="subMenuReactive.isShow" v-model:openKeys="state.openKeys"
                    mode="inline"
                    class="menu-mobile-wrapper"
                    v-model:selectedKeys="state.openKeys"
            >
                <div v-for="item in subMenuReactive.subMenuList" :key="item.key">
                    <a-sub-menu v-if="item.isSubMenu" :key="item.key">
                        <template #title>
                            {{ item.title }}
                        </template>
                        <a-menu-item v-for="child in item.children" :key="child.key" @click="onClose">
                            <nuxt-link :to="child.link">
                                {{ child.title }}
                            </nuxt-link>
                        </a-menu-item>
                    </a-sub-menu>
                    <a-menu-item v-else :key="item.key" @click="onClose">
                        <NuxtLink :to="item.link">
                            {{ item.title }}
                        </NuxtLink>
                    </a-menu-item>
                </div>
            </a-menu>
        </Transition>
    </a-drawer>
</template>

<script setup lang="ts">
import MenuItemLink from "~/common/MenuItemLink.vue";
import {DrawerProps} from "ant-design-vue";
import {reactive, watch} from 'vue';
import {TopNavMenuMobile} from "~/utils/constant/app-constants";
import {mappingSubMenu, mappingSubMenuTitle} from "~/utils/helper/mappingSubMenu";
import {ArrowLeftOutlined} from "@ant-design/icons-vue"

interface Props {
    open: boolean;
}

// region define setup in vue
const {open} = defineProps<Props>()
const emit = defineEmits(['toggle'])

// region reactive
const placement = ref<DrawerProps['placement']>('right');
const subMenuReactive = ref({
    isShow: false,
    subMenuList: mappingSubMenu("1"),// default with submenu of map
    titleSubMenu: mappingSubMenuTitle("1") // default with submenu title of map
})
const state = reactive({
    collapsed: false,
    selectedKeys: ['1'],
    openKeys: ['sub1'],
    preOpenKeys: ['sub1'],
});
watch(
    () => state.openKeys,
    (_val, oldVal) => {
        state.preOpenKeys = oldVal;
    },
);

const toggleShowSubMenuReactive = (key: string) => {
    if (subMenuReactive.value.isShow) {
        subMenuReactive.value.subMenuList = []
        subMenuReactive.value.titleSubMenu = ""
    } else {
        subMenuReactive.value.subMenuList = mappingSubMenu(key)
        subMenuReactive.value.titleSubMenu = mappingSubMenuTitle(key)
    }
    subMenuReactive.value.isShow = !subMenuReactive.value.isShow
}

const onClose = () => {
    subMenuReactive.value.isShow = false
    subMenuReactive.value.subMenuList = []
    subMenuReactive.value.titleSubMenu = ""
    emit('toggle')
}

</script>

<style scoped lang="scss">
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}


</style>
