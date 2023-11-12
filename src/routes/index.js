import Home from "../page/home";
import Cart from "../page/cart";
import Products from "../page/products";
import ProductsDetail from "../page/productsDetail";
import Intro from "../page/intro";
// public routes

const publicRoutes = [
  {
    path: "/noithatvietbach/",
    component: Home,
    layout: "DefaultLayout",
  },
  {
    path: "/cart",
    component: Cart,
    layout: "DefaultLayout",
  },
  {
    path: "/products",
    component: Products,
    layout: "DefaultLayout",
  },
  {
    path: "/products/:productsId",
    component: ProductsDetail,
    layout: "DefaultLayout",
  },
  {
    path: "/intro",
    component: Intro,
    layout: "DefaultLayout",
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
