import {
  // faMagnifyingGlass,
  faCircleInfo,
  faFolderClosed,
  faFolderOpen,
  faNewspaper,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import productsCategory from "../../page/products/productsCategory";
const arrayCategory = productsCategory.reduce(
  (result, productItem) => {
    // kiểm tra bên trong kết quả cuối result đã có item này chưa
    const existingCat = result.find(
      (i) => i.category === productItem.category
    );
    // nếu chưa có thì đẩy mảng mới vào
    if (!existingCat) {
      result.push({
        category: productItem.category,
        engTitle: productItem.category,
        vieTitle: productItem.category,
        url: "/",
      });
    }

    return result;
  },
  []
);
console.log("Giá trị của arrayCategory:", arrayCategory);
// console.log(MenuItemlist);
export const MenuItemlist = [
  {
    engTitle: "About Us",
    vieTitle: "Giới thiệu",
    url: "/intro",
    icon: faCircleInfo,
  },
  {
    engTitle: "Product",
    vieTitle: "Sản phẩm",
    url: "/",
    icon: faFolderClosed,
    changedIcon: faFolderOpen,
    submenu: arrayCategory,
  },
  {
    engTitle: "News",
    vieTitle: "Tin tức",
    url: "/news",
    icon: faNewspaper,
  },
  {
    engTitle: "Contact",
    vieTitle: "Liên hệ",
    url: "contact",
    icon: faPhone,
  },
];
