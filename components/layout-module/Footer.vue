<template>
    <footer class="footer-wrapper">
        <div class="wrapper-content">
            <div class="logo-footer">
                <img src="~/assets/images/logo-footer.png" alt="">
            </div>
            <div class="content">
                <a-row>
                    <a-col :span="6" v-for="col in mockDataColumnLinkFooter"  :key="col.id">
                        <h3 class="column-title">
                            {{col.column_title}}
                        </h3>
                        <div class="column-list">
                            <div class="column-item" v-for="item in col.column_links">
                                <nuxt-link v-if="item.isLink" :to="item['link']">{{item.name}}</nuxt-link>
                                <p  v-else>{{item.name}}</p>
                            </div>
                        </div>
                    </a-col>
                    <a-col :span="6" class="last-col" >
                        <h3 class="column-title ">
                            follow us
                        </h3>
                        <div class="column-list">
                            <div class="column-item" >
                                <img src="~/assets/images/icon-socical/facebook.png" alt="fb">
                            </div>
                            <div class="column-item" >
                                <img src="~/assets/images/icon-socical/intagram.png" alt="instagram">
                            </div>
                            <div class="column-item" >
                                <img src="~/assets/images/icon-socical/twitter.png" alt="twitter">
                            </div>
                            <div class="column-item" >
                                <img src="~/assets/images/icon-socical/youtube.png" alt="youtube">
                            </div>
                        </div>
                    </a-col>
                </a-row>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
const mockDataColumnLinkFooter = [
    {
        id :1 ,
        column_title : 'learn more',
        column_links : [
            {
                name : "About Us",
                link : "/",
                isLink : true,
            },
            {
                name : "FAQS",
                link : "/",
                isLink : true,

            },
            {
                name : "Ordering Info",
                link : "/",
                isLink : true,

            },
            {
                name : "Testomonials",
                link : "/",
                isLink : true,

            },
            {
                name : "Legal",
                link : "/",
                isLink : true,

            },
        ]
    },
    {
        id :2 ,
        column_title : 'shop',
        column_links : [
            {
                name : "All Outdoor Atlases",
                link : "/",
                isLink : true,

            },
            {
                name : "Fishing Map Guides",
                link : "/",
                isLink : true,

            },
            {
                name : "eBooks",
                link : "/",
                isLink : true,

            },
            {
                name : "Wood Engraved Maps",
                link : "/",
                isLink : true,

            },
            {
                name : "Wood Engraved Maps",
                link : "/",
                isLink : true,

            },
            {
                name : "Retailer Search",
                link : "/",
                isLink : true,

            },
            {
                name : "Wholesale",
                link : "/",
                isLink : true,
            },
        ]
    },
    {
        id :3 ,
        column_title : 'Contact Us',
        column_links : [
            {
                name : "info@scmaps.com",
                isLink : false,
                link:null,
            },
            {
                name : "715-395-7775",
                isLink : false,
                link:null,
            },
            {
                name : "Sportsman's Connection\n" +
                    "259 Main Street\n" +
                    "Superior, WI 54880",
                isLink : false,
                link : null,
            },
        ]
    }
]
</script>



