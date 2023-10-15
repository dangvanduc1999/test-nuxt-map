<template>
    <a-collapse v-model:activeKey="activeKey" accordion ghost>
        <template #expandIcon="{ isActive }">
            <PlusOutlined v-if="!isActive" class="icon-collaspe"/>
            <MinusOutlined v-else class="icon-collaspe"/>
        </template>
        <a-collapse-panel key="1" header="Fishing Map Guides">
            <span>
                <nuxt-link to="/fishing-map-guides/indiana">
                    India
                </nuxt-link>
            </span>
            <span>
                <nuxt-link to="/fishing-map-guides/iowa">
                    Iowa
                </nuxt-link>
            </span>
        </a-collapse-panel>
        <a-collapse-panel key="2" header="All-Outdoors Atlas & Field Guides  ">
             <span>
                <nuxt-link to="/fishing-map-guides/michigan">
                    Michigan
                </nuxt-link>
            </span>
            <span>
                <nuxt-link to="/fishing-map-guides/new-york">
                    New York
                </nuxt-link>
            </span>
        </a-collapse-panel>
        <a-collapse-panel key="3" header="eBooks">
            <span>
                <nuxt-link to="/fishing-map-guides/illinois">
                    Illinois
                </nuxt-link>
            </span>
            <span>
                <nuxt-link to="/fishing-map-guides/indiana">
                    Indiana
                </nuxt-link>
            </span>
        </a-collapse-panel>
<!--        <a-collapse-panel key="4" header="Wood Engraved Maps">-->
<!--            <span>Iowa</span>-->
<!--            <span>Illinois</span>-->
<!--            <span>Indiana</span>-->
<!--            <span>Kentucky</span>-->
<!--            <span>Michigan</span>-->
<!--            <span>Minnesota</span>-->
<!--            <span>Missouri</span>-->
<!--            <span>New York</span>-->
<!--            <span>South Dakota</span>-->
<!--            <span>Tennessee</span>-->
<!--            <span>Texas</span>-->
<!--            <span>Wisconsin</span>-->
<!--        </a-collapse-panel>-->
<!--        <a-collapse-panel key="5" header="Maps By State">-->

<!--            <span>Iowa</span>-->
<!--            <span>Illinois</span>-->
<!--            <span>Indiana</span>-->
<!--            <span>Kentucky</span>-->
<!--            <span>Michigan</span>-->
<!--            <span>Minnesota</span>-->
<!--            <span>Missouri</span>-->
<!--            <span>New York</span>-->
<!--            <span>South Dakota</span>-->
<!--            <span>Tennessee</span>-->
<!--            <span>Texas</span>-->
<!--            <span>Wisconsin</span>-->
<!--        </a-collapse-panel>-->
    </a-collapse>
</template>

<script setup lang="ts">
import {MinusOutlined, PlusOutlined} from "@ant-design/icons-vue";
import {ref} from 'vue';

const activeKey = ref(['1']);
</script>
