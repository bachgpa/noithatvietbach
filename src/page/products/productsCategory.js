let productsCategoryDemo = [
  {
    id: 1,
    name: "Bàn trà gỗ sồi",
    category: "Bàn trà",
    price: 1500000,
    description:
      "Bàn trà gỗ sồi tự nhiên, kiểu dáng hiện đại.",
    image: require("../../assets/products/Ban-tra-52-500x500.webp"),
  },
  {
    id: 2,
    name: "Ghế sofa da thật",
    category: "Ghế sofa",
    price: 3500000,
    description: "Ghế sofa da thật, êm ái và thoải mái.",
    image: require("../../assets/products/sofaSquare.jpg"),
  },
];

for (var a = 1; a < 100; a++) {
  if (a % 2 !== 0) {
    console.log("so le a = ", a);
    productsCategoryDemo.push({
      id: `${a + 2}`,
      name: `Bàn gỗ sồi cô đơn trên sofa ${a}`,
      category: "Bàn trà",
      price: 1500000,
      description:
        "Bàn trà gỗ sồi tự nhiên, kiểu dáng hiện đại.",
      image: require("../../assets/products/Ban-tra-52-500x500.webp"),
    });
  } else {
    productsCategoryDemo.push({
      id: `${a + 2}`,
      name: `gì đó đá gỗ sồi cô đơn trên sofa ${a}`,
      category: "Chảo sofa",
      price: 1500000000000000,
      description:
        "Ghế sofa da thật, bàn trà ngồi bên trên êm ái và thoải mái.",
      image: require("../../assets/products/sofaSquare.jpg"),
    });
  }
}

const productsCategory = productsCategoryDemo;
export default productsCategory;
