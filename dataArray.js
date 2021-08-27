const dataArray = [
  {
    id: 1,
    name: "Intel Core i9-11900K",
    price: 549,
    seller: "localhost443",
    deal: true,
    dealvalue: 0.09, // Value is 10% = 0.1 (Percentage)
    imageUrl: require("./assets/images/1.jpg"),
  },
  {
    id: 2,
    name: "RTX 3090",
    price: 799,
    seller: "shashika05",
    deal: true,
    dealvalue: 0.1, // Value is 10% = 0.1 (Percentage)
    imageUrl: require("./assets/images/2.jpg"),
  },
  {
    id: 3,
    name: "Logitech G Pro X KeyBoard",
    price: 159,
    seller: "localhost443",
    deal: true,
    dealvalue: 0.1, // Value is 10% = 0.1 (Percentage)
    imageUrl: require("./assets/images/3.jpg"),
  },
  {
    id: 4,
    name: "Logitech G Pro X Superlight",
    price: 199,
    seller: "shashika05",
    deal: false,
    dealvalue: 0,
    imageUrl: require("./assets/images/4.jpg"),
  },
  {
    id: 5,
    name: "Samsung 970 Evo",
    price: 299,
    seller: "shashika05",
    deal: false,
    dealvalue: 0,
    imageUrl: require("./assets/images/5.jpg"),
  },
];

export default dataArray;
