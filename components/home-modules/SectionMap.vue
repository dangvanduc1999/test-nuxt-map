<template>
    <section class="section-map" @click="toggleShowModal(true)">
        <div class="shell">
            <h2 class="h1">Maps By State</h2>
            <a class="map popup-modal">
                <img src="https://store-hdumb.mybigcommerce.com/content/images/temp/map.png" alt="">
            </a>
        </div><!-- /.shell -->
    </section><!-- /.section-map -->
    <Teleport to="body">
        <Transition name="fade">
            <div class="wrapper-modal" v-if="isShowModal">
                <div class="layer__modal" @click="toggleShowModal(false)"></div>
                <div id="map-modal" class="white-popup-block mfp-hide modal-map">
                    <h6>Select Your State</h6>
                    <ul class="list-states">
                        <li>
                            <a href="#">
                                <img src="https://store-hdumb.mybigcommerce.com/content/images/svg/illinois.svg" alt="">

                                <span>il</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <img src="https://store-hdumb.mybigcommerce.com/content/images/svg/indiana.svg" alt="">

                                <span>in</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <img src="https://store-hdumb.mybigcommerce.com/content/images/svg/iowa.svg" alt="">

                                <span>ia</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <img src="https://store-hdumb.mybigcommerce.com/content/images/svg/kentucky.svg" alt="">

                                <span>ky</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <img src="https://store-hdumb.mybigcommerce.com/content/images/svg/michigan.svg" alt="">

                                <span>mi</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <img src="https://store-hdumb.mybigcommerce.com/content/images/svg/wisconsin.svg" alt="">

                                <span>mn</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <img src="https://store-hdumb.mybigcommerce.com/content/images/svg/missouri.svg" alt="">

                                <span>mo</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <img src="https://store-hdumb.mybigcommerce.com/content/images/svg/new-york.svg" alt="">

                                <span>ny</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <img src="https://store-hdumb.mybigcommerce.com/content/images/svg/ohio.svg" alt="">

                                <span>oh</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <img src="https://store-hdumb.mybigcommerce.com/content/images/svg/pennslyvania.svg" alt="">

                                <span>pa</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <img src="https://store-hdumb.mybigcommerce.com/content/images/svg/south-dakota.svg" alt="">

                                <span>sd</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <img src="https://store-hdumb.mybigcommerce.com/content/images/svg/tennesee.svg" alt="">

                                <span>tn</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <img src="https://store-hdumb.mybigcommerce.com/content/images/svg/texas.svg" alt="">

                                <span>tx</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <img src="https://store-hdumb.mybigcommerce.com/content/images/svg/wisconsin.svg" alt="">

                                <span>wi</span>
                            </a>
                        </li>
                    </ul><!-- /.list-states -->
                    <p @click="toggleShowModal(false)"><a class="modal__close js-popup-close" ></a></p>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup lang="ts">

    const isShowModal = ref<boolean>(false)
    const toggleShowModal = (value : boolean) => {
        isShowModal.value = value
    }

</script>



