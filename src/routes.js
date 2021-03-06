import React from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import ListProductsContainer from "./containers/ListProductsContainter";
import Stores from "./components/Stores/Stores";
import About from "./components/About/About";
import SearchContainer from "./containers/SearchContainer";
import ViewCartContainer from "./containers/ViewCartContainer";
import Account from "./components/Account/Account";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Checkout from "./components/Checkout/Checkout";
import EmptyCart from "./components/EmptyCart/EmptyCart";
import NotFound from "./components/NotFound/NotFound";
import OderSuccess from "./components/OderSuccess/OderSuccess";

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
    main: () => <ListProductsContainer />,
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
    main: () => <SearchContainer />,
  },
  {
    path: "/view-cart",
    exact: false,
    main: () => <ViewCartContainer />,
  },
  {
    path: "/account",
    exact: false,
    main: () => <Account />,
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
  {
    path: "/oder-success",
    exact: false,
    main: () => <OderSuccess />,
  },
  {
    path: "/product-detail/:id",
    exact: false,
    main: ({ match }) => <ProductDetail match={match} />,
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />,
  },
];

export default routes;
