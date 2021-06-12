import React from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import ListProducts from "./components/ListProducts/ListProducts";
import Stores from "./components/Stores/Stores";
import About from "./components/About/About";
import Search from "./components/Search/Search";
import ViewCart from "./components/ViewCart/ViewCart";
import Account from "./components/Account/Account";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Checkout from "./components/Checkout/Checkout";
import EmptyCart from "./components/EmptyCart/EmptyCart";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/login",
    exact: false,
    main: () => <Login />,
  },
  {
    path: "/list-products",
    exact: false,
    main: () => <ListProducts />,
  },
  {
    path: "/stores",
    exact: false,
    main: () => <Stores />,
  },
  {
    path: "/about",
    exact: false,
    main: () => <About />,
  },
  {
    path: "/search",
    exact: false,
    main: () => <Search />,
  },
  {
    path: "/view-cart",
    exact: false,
    main: () => <ViewCart />,
  },
  {
    path: "/account",
    exact: false,
    main: () => <Account />,
  },
  {
    path: "/product-detail",
    exact: false,
    main: () => <ProductDetail />,
  },
  {
    path: "/checkout",
    exact: false,
    main: () => <Checkout />,
  },
  {
    path: "/empty-cart",
    exact: false,
    main: () => <EmptyCart />,
  },
];

export default routes;