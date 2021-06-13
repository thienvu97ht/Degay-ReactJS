import * as Types from "../constants/ActionTypes";

var initialState = [
  {
    product: {
      id: "1",
      name: "Quần Jean Ngắn Xám - QJN Xám",
      price: 290000,
      sold: 33,
      images: [
        {
          src: "https://product.hstatic.net/1000281824/product/1575a8c9-449d-414a-907a-3e1a2935b9ba_6d26ac370a2f429290f9558061faf79f_grande.jpeg",
        },
        {
          src: "https://product.hstatic.net/1000281824/product/e2308b5d-64b2-448d-b54f-883fed53a137_e374100d4f51493ca56f0a3f6a593dc4_grande.jpeg",
        },
        {
          src: "https://product.hstatic.net/1000281824/product/ce48efde-31c7-4017-a863-6faf93f3314f_69d42f1767d54b72ac6b81ab24f36fda_grande.jpeg",
        },
        {
          src: "https://product.hstatic.net/1000281824/product/3ba36066-b209-460c-aabf-a4cc078c39ce_a214ab0afa6744f096da3b007fde2a70_grande.jpeg",
        },
      ],
      collections: "pants",
    },

    quantity: 2,
  },
  {
    product: {
      id: "2",
      name: "Balo Hạt Nhân Degrey - BHND",
      price: 420000,
      sold: 32,
      images: [
        {
          src: "https://product.hstatic.net/1000281824/product/6494b116-a95f-42e1-bd99-33ae0fef78a3_c36ead4edfde4943b98b4ad16eb74463_grande.jpeg",
        },
        {
          src: "https://product.hstatic.net/1000281824/product/62a8601c-91a1-4ba9-8ea5-0ee44383f5de_6a15158e047d4e3795152580eadbb738_grande.jpeg",
        },
        {
          src: "https://product.hstatic.net/1000281824/product/33d933a3-3989-42e7-a8f2-a8ed2fedfa6d_53a0ccfc2b644c53b9b74fa3e82b030d_grande.jpeg",
        },
        {
          src: "https://product.hstatic.net/1000281824/product/a086ecb9-dab4-47c7-845a-a5d8b5075eb4_3f4fbb98fbae47d3a58ee797280bec7c_grande.jpeg",
        },
      ],
      collections: "accessories",
    },

    quantity: 1,
  },
];

var productsInCart = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_PRODUCTS:
      state = action.products;
      return [...state];
    default:
      return [...state];
  }
};

export default productsInCart;
