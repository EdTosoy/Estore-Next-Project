import React from "react";
import Category from "../components/Category";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import NewsLetter from "../components/NewsLetter";
import Testimonials from "../components/Testimonials";
import { initializeApollo } from "../lib/apolloClient";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Category />
      <Features />
      <Testimonials />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}

export const getStaticPaths = async () => {
  return {
    paths: ["/"],
    fallback: true,
  };
};
