<template>
  <nav class="nav">
    <ul>
      <li>
        <a-dropdown   :overlayClassName="'nav-menu-dropdown'">
          <a href="#">Maps</a>

          <template class="nav-menu-dropdown" #overlay>
              <a-collapse v-model:activeKey="activeKey" accordion>
                <template #expandIcon>
                  <PlusOutlined class="icon-collaspe"/>
                </template>
                <a-collapse-panel key="1" header="Fishing Map Guides">
                  <p>A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a
                    welcome guest in many households across the world.</p>
                </a-collapse-panel>
                <a-collapse-panel key="2" header="All-Outdoors Atlas & Field Guides  ">
                  <p>A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a
                    welcome guest in many households across the world.</p>
                </a-collapse-panel>
                <a-collapse-panel key="3" header="eBooks">
                  <p>A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a
                    welcome guest in many households across the world.</p>
                </a-collapse-panel>
                <a-collapse-panel key="4" header="Wood Engraved Maps">
                  <p>A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a
                    welcome guest in many households across the world.</p>
                </a-collapse-panel>
                <a-collapse-panel key="5" header="Maps By State">

                  <span>Iowa</span>
                  <span>Illinois</span>
                  <span>Indiana</span>
                  <span>Kentucky</span>
                  <span>Michigan</span>
                  <span>Minnesota</span>
                  <span>Missouri</span>
                  <span>New York</span>
                  <span>South Dakota</span>
                  <span>Tennessee</span>
                  <span>Texas</span>
                  <span>Wisconsin</span>

                </a-collapse-panel>
              </a-collapse>
          </template>
        </a-dropdown>
      </li>
      <li>
        <a href="#">Apparel</a>
      </li>
      <li>
        <a href="#">Retailers</a>
      </li>
      <li>
        <a href="#">About </a>
        <div class="js-dropdown dropdown">
          <div class="shell">
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>

              <li>
                <a href="#">FAQS</a>
              </li>

              <li>
                <a href="#">Wholesale</a>
              </li>
            </ul>
          </div><!-- /.shell -->
        </div><!-- /.dropdown -->
      </li>
      <li>
        <a href="#">Contact Us</a>
      </li>
    </ul>
  </nav>


</template>

<script setup lang="ts">
import {PlusOutlined} from "@ant-design/icons-vue"

const activeKey = ref(['5']);


</script>



