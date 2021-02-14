import React from "react";
import Header from "components/Header";
import Footer from "../components/Footer";
import ShopMain from "../components/ShopMain";
import Head from "next/head";

export default function shop() {
  return (
    <div>
      <Head>
        <title>Estore | Shops </title>
        <meta
          name="description"
          content="trending smart phones and accessories style collection, Shop for the latest smartphone deals from Samsung, Apple, Oppo, LG, Asus and more."
        />
      </Head>
      <Header />
      <ShopMain />
      <Footer />
    </div>
  );
}
