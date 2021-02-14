import React from "react";
import CartList from "components/CartList";
import Header from "components/Header";
import CartFooter from "../components/CartFooter";
import Head from "next/head";

export default function cart() {
  return (
    <div>
      <Head>
        <title>Estore | Cart</title>
        <meta
          name="description"
          content="trending smart phones and accessories style collection, Shop for the latest smartphone deals from Samsung, Apple, Oppo, LG, Asus and more."
        />
      </Head>
      <Header />
      <CartList />
      <CartFooter />
    </div>
  );
}
