<template>
    <a-menu-item :key="keyMenu" class="menu-item">
        <nuxt-link v-if="!isHasSubMenu" :to="link" class="menu-item__link-wrapper" @click="toggleMenuBarMobile">
            <span>{{ title }}</span>
        </nuxt-link>
        <span v-else class="menu-item__wrapper" @click="showSubMenu(keyMenu)">
            <span>{{ title }}</span>
            <RightOutlined/>
        </span>
    </a-menu-item>
</template>

<script setup lang="ts">
import {RightOutlined,} from '@ant-design/icons-vue';

interface Props {
    link: string,
    isHasSubMenu: boolean
    title: string,
    label: string,
    keyMenu: string,
}

const {link, isHasSubMenu, title, label, keyMenu} = defineProps<Props>()
const emit = defineEmits(['toggleShowSubMenu' ,"toggle"])

const showSubMenu = (key : string) => {
    emit('toggleShowSubMenu',key)
}
const toggleMenuBarMobile = () => {
    emit('toggle')
}



</script>

<style scoped lang="scss">

</style>
