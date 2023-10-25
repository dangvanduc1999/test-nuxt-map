<template>
    <a-tabs class="product-tab-section" v-model:activeKey="activeKey" centered>
        <a-tab-pane key="1" >
            <template #tab>
                <p class="tab-title">Features</p>
            </template>
            <feature-tab />
        </a-tab-pane>
        <a-tab-pane key="2" >
            <template #tab>
                <p class="tab-title">Description</p>
            </template>
            <description-tab-section :description="description"/>
        </a-tab-pane>
        <a-tab-pane key="3"  >
            <template #tab>
                <p class="tab-title">Videos</p>
            </template>
        </a-tab-pane>
        <a-tab-pane key="4"  >
            <template #tab>
                <p class="tab-title">eBook Version</p>
            </template>
        </a-tab-pane>
    </a-tabs>
    <div class="mobile-tab-section">
        <slot name="mobile-tab-section"/>
    </div>
</template>
<script setup lang="ts">
    import FeatureTab from "~/components/product-modules/FeatureTab.vue";
    import DescriptionTabSection from "~/components/product-modules/DescriptionTabSection.vue";

    interface Props {
        description : string,
    }
    const {description} = defineProps<Props>()
    const activeKey = ref('1');
</script>

