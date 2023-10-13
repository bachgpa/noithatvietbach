let productsCategoryDemo = [
  {
    id: 1,
    name: `Bàn trà gỗ sồi 1`,
    category: "Bàn trà",
    price: 1500002,
    description:
      "Bàn trà gỗ sồi tự nhiên, kiểu dáng hiện đại.",
    image: require("../../assets/products/Ban-tra-52-500x500.webp"),
    number: 1998,
    color: ["black", "brown", "green", "pink"],
    size: ["s", "m", "l", "xl", "xxl"],
    carousel: [
      require("../../assets/products/Ban-tra-52-500x500.webp"),
      require("../../assets/products/sofaSquare.jpg"),
      require("../../assets/products/Ban-tra-52-500x500.webp"),
      require("../../assets/products/banTra.jpg"),
    ],
    details: {
      brand: "Việt Bách",
      insuarrance: "Bảo hành nhà sản xuẩt",
      insuarranceDate: "6 tháng",
      from: "Việt Nam",
      address:
        " Số 7749, đường A, phường B, quận C, thành phố D",
      materials:
        "Gỗ công nghiệp nhập khẩu Mỹ, sắt Hòa Phát",
      size: "nhỏ: 3m x 1m x 0.5m (dài x rộng x cao), vừa: 3m x 1m x 0.5m (dài x rộng x cao), lớn: 3m x 1m x 0.5m (dài x rộng x cao)",
      sendFrom: "thành phố D",
      storage: 123456,
    },
  },
  {
    id: 2,
    name: "Ghế sofa da thật 2",
    category: "Ghế sofa",
    price: 3500002,
    description: "Ghế sofa da thật, êm ái và thoải mái.",
    image: require("../../assets/products/sofaSquare.jpg"),
    number: 1998,
    color: ["black", "brown", "green", "pink"],
    size: ["s", "m", "l", "xl", "xxl"],
    carousel: [
      require("../../assets/products/Ban-tra-52-500x500.webp"),
      require("../../assets/products/sofaSquare.jpg"),
      require("../../assets/products/Ban-tra-52-500x500.webp"),
      require("../../assets/products/banTra.jpg"),
    ],
    details: {
      brand: "Việt Bách",
      insuarrance: "Bảo hành nhà sản xuẩt",
      insuarranceDate: "6 tháng",
      from: "Việt Nam",
      address:
        " Số 7749, đường A, phường B, quận C, thành phố D",
      materials:
        "Gỗ công nghiệp nhập khẩu Mỹ, sắt Hòa Phát",
      size: "nhỏ: 3m x 1m x 0.5m (dài x rộng x cao), vừa: 3m x 1m x 0.5m (dài x rộng x cao), lớn: 3m x 1m x 0.5m (dài x rộng x cao)",
      sendFrom: "thành phố D",
      storage: 123456,
    },
  },
];

for (var a = 1; a < 100; a++) {
  if (a % 2 !== 0) {
    console.log("so le a = ", a);
    productsCategoryDemo.push({
      id: a + 2,
      // id: `${a + 2}`,
      name: `Bàn gỗ sồi cô đơn trên sofa ${a}`,
      category: "Bàn trà",
      price: 1500000,
      description:
        "Bàn trà gỗ sồi tự nhiên, kiểu dáng hiện đại.",
      image: require("../../assets/products/Ban-tra-52-500x500.webp"),
      number: 1998,
      color: ["black", "brown", "green", "pink"],
      size: ["s", "m", "l", "xl", "xxl"],
      carousel: [
        require("../../assets/products/Ban-tra-52-500x500.webp"),
        require("../../assets/products/sofaSquare.jpg"),
        require("../../assets/products/Ban-tra-52-500x500.webp"),
        require("../../assets/products/banTra.jpg"),
        require("../../assets/products/Ban-tra-52-500x500.webp"),
        require("../../assets/products/banTra.jpg"),
        require("../../assets/products/Ban-tra-52-500x500.webp"),
      ],
      details: {
        brand: "Việt Bách",
        insuarrance: "Bảo hành nhà sản xuẩt",
        insuarranceDate: "6 tháng",
        from: "Việt Nam",
        address:
          " Số 7749, đường A, phường B, quận C, thành phố D",
        materials:
          "Gỗ công nghiệp nhập khẩu Mỹ, sắt Hòa Phát",
        size: "nhỏ: 3m x 1m x 0.5m (dài x rộng x cao), vừa: 3m x 1m x 0.5m (dài x rộng x cao), lớn: 3m x 1m x 0.5m (dài x rộng x cao)",
        sendFrom: "thành phố D",
        storage: 123456,
      },
    });
  } else {
    productsCategoryDemo.push({
      id: a + 2,
      name: `gì đó đá gỗ sồi cô đơn trên sofa ${a}`,
      category: "Chiếu",
      price: 1500000000000000,
      description:
        "Ghế sofa da thật, bàn trà ngồi bên trên êm ái và thoải mái.",
      image: require("../../assets/products/sofaSquare.jpg"),
      number: 9881,
      color: ["black", "brown", "green", "pink"],
      size: ["s", "m", "l", "xl", "xxl"],
      carousel: [
        require("../../assets/products/Ban-tra-52-500x500.webp"),
        require("../../assets/products/sofaSquare.jpg"),
        require("../../assets/products/Ban-tra-52-500x500.webp"),
        require("../../assets/products/banTra.jpg"),
        require("../../assets/products/Ban-tra-52-500x500.webp"),
        require("../../assets/products/banTra.jpg"),
        require("../../assets/products/Ban-tra-52-500x500.webp"),
      ],
      details: {
        brand: "Việt Bách",
        insuarrance: "Bảo hành nhà sản xuẩt",
        insuarranceDate: "6 tháng",
        from: "Việt Nam",
        address:
          " Số 7749, đường A, phường B, quận C, thành phố D",
        materials:
          "Gỗ công nghiệp chất lượng nhập khẩu, sắt Hòa Phát",
        size: "nhỏ: 3m x 1m x 0.5m (dài x rộng x cao), vừa: 3m x 1m x 0.5m (dài x rộng x cao), lớn: 3m x 1m x 0.5m (dài x rộng x cao)",
        sendFrom: "thành phố D",
        storage: 123456,
      },
    });
  }
}

const productsCategory = productsCategoryDemo;
export default productsCategory;
