import {
  // faMagnifyingGlass,
  faCircleInfo,
  faFolderClosed,
  faFolderOpen,
  faNewspaper,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export const MenuItemlist = [
  {
    engTitle: "About Us",
    vieTitle: "Giới thiệu",
    url: "/",
    icon: faCircleInfo,
  },
  {
    engTitle: "Product",
    vieTitle: "Sản phẩm",
    url: "/",
    icon: faFolderClosed,
    changedIcon: faFolderOpen,
    submenu: [
      {
        engTitle: "title1",
        vieTitle: "vieTitle1",
        url: "/",
      },
      {
        engTitle: "title2",
        vieTitle: "vieTitle2",
        url: "/",
      },
      {
        engTitle: "title3",
        vieTitle: "vieTitle3",
        url: "/",
      },
      {
        engTitle: "title4",
        vieTitle: "vieTitle4",
        url: "/",
      },
    ],
  },
  {
    engTitle: "News",
    vieTitle: "Tin tức",
    url: "/",
    icon: faNewspaper,
  },
  {
    engTitle: "Contact",
    vieTitle: "Liên hệ",
    url: "/",
    icon: faPhone,
  },
];
