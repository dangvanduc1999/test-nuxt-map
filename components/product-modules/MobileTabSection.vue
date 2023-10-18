<template>
    <div class="title-tab tab1">
        <h3>
            {{name}}
        </h3>
    </div>
    <div class="content-tab content-tab1">
        <div v-html="description">
        </div>
    </div>
    <div class="title-tab tab2">
        <h3>
            feature
        </h3>
    </div>
    <div class="content-tab content-tab2">
        <slot name="slide-tab2-mobile"/>
    </div>
    <div class="title-tab tab3">
        <h3>
            videos
        </h3>
    </div>
    <div class="content-tab content-tab3">
        <iframe width="560" height="315" src="//www.youtube.com/embed/vqUgR-ohNow?fs=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>

    </div>
</template>

<script setup lang="ts">
interface Props {
    name : string,
    description : string,
}
const {name} = defineProps<Props>()
</script>

