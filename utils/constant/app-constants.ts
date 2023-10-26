export enum TYPENAME_QUERY {
    PRODUCT = "Product",
    CATEGORY = "Category"
}


export const TopNavMenuMobile = [
    {
        key: '1',
        label: 'Maps',
        title: 'Maps',
        isHasSubMenu: true,
        link: "/",
    },
    {
        key: '2',
        label: 'Apparel',
        title: 'Apparel',
        isHasSubMenu: false,
        link: "/apparel",
    },
    {
        key: '3',
        label: 'Retailers',
        title: 'Retailers',
        isHasSubMenu: false,
        link: "/retailers",
    },
    {
        key: '4',
        label: 'About',
        title: 'About',
        isHasSubMenu: true,
        link: "/",
    },
    {
        key: '5',
        label: 'Contact Us',
        title: 'Contact Us',
        isHasSubMenu: false,
        link: "/contact-us",
    },
]

export const SubMenuMaps = [
    {
        isSubMenu: true,
        link: "",
        title: "Fishing Map Guides",
        label: "Fishing Map Guides",
        key: "sub1",
        children: [
            {
                key: "sub-1-1",
                link: "/fishing-map-guides/indiana/",
                title: "Indiana",
            },
            {
                key: "sub-1-2",
                link: "/fishing-map-guides/iowa/",
                title: "iowa",
            },
        ]
    },
    {
        isSubMenu: true,
        link: "",
        title: "All-Outdoors Atlas & Field Guides ",
        label: "All-Outdoors Atlas & Field Guides ",
        key: "sub2",
        children: [
            {
                key: "sub-2-1",
                link: "/all-outdoors-atlases/michigan/",
                title: "Michigan",
            },
            {
                key: "sub-2-2",
                link: "/all-outdoors-atlases/new-york/",
                title: "New York",
            },
        ]
    },
    {
        isSubMenu: true,
        link: "",
        title: "Wood Engraved Maps ",
        label: "Wood Engraved Maps ",
        key: "sub3",
        children: [
            {
                key: "sub-3-1",
                link: "/wood-engraved-maps/illinois/",
                title: "Michigan",
            },
            {
                key: "sub-3-2",
                link: "/wood-engraved-maps/indiana/",
                title: "New York",
            },
        ]
    },
]

export const SubMenuAbouts = [
    {
        isSubMenu: false,
        link: "/",
        title: "About us",
        label: "About us",
        key: "sub1",
    },
    {
        isSubMenu: false,
        link: "/",
        title: "FAQs",
        label: "FAQs",
        key: "sub2",
    },
    {
        isSubMenu: false,
        link: "/",
        title: "Whosale",
        label: "Whosale",
        key: "sub3",

    },
]



