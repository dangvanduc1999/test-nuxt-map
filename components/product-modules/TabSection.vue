<template>
    <a-tabs class="product-tab-section" v-model:activeKey="activeKey" centered>
        <a-tab-pane key="1" >
            <template #tab>
                <p class="tab-title">Features</p>
            </template>
            <feature-tab />
        </a-tab-pane>
        <a-tab-pane key="2"  >
            <template #tab>
                <p class="tab-title">Videos</p>
            </template>
            <feature-tab />
        </a-tab-pane>
        <a-tab-pane key="3"  >
            <template #tab>
                <p class="tab-title">eBook Version</p>
            </template>
            <feature-tab />
        </a-tab-pane>
    </a-tabs>
</template>
<script setup lang="ts">
    import FeatureTab from "~/components/product-modules/FeatureTab.vue";

    const activeKey = ref('1');
</script>

