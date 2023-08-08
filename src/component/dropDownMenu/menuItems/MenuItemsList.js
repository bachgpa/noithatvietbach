export const MenuItemsList = [
  {
    title: "Home",
    url: "/",
    class: "menuItem1",
  },
  {
    title: "Services",
    url: "/services",
    class: "menuItem2",
    submenu: [
      {
        title: "web design",
        url: "web-design",
        class: "subMenuItem1",
      },
      {
        title: "web development",
        url: "web-dev",
        class: "subMenuItem2",
      },
      {
        title: "SEO",
        url: "seo",
        class: "subMenuItem3",
      },
    ],
  },
  {
    title: "About",
    url: "/about",
    class: "menuItem3",
  },
];
