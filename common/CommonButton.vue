

<template>
    <a-config-provider :theme="{ theme }">
        <a-button v-bind="props" :class="['common-button' , customClassName]">
            {{titleButton}}
        </a-button>
    </a-config-provider>
</template>

<script setup lang="ts">
import {ButtonProps} from "ant-design-vue";
interface Props {
    titleButton : string
    customClassName ?: string
}
type CommonButtonProps = ButtonProps & Props
const props = defineProps<CommonButtonProps>()
const theme = {
    token : {
        colorPrimaryBg:'#1C2526',
        colorBorder:'#1C2526',
        colorTextBase:"#ffffff",
        colorPrimaryHover :"#1C2526",
        colorPrimaryTextHover:"#ffffff"
    }
}
</script>
