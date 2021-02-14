import Header from "components/Header";
import Auth from "../components/Auth";
import { AuthProvider } from "../lib/auth";
import Head from "next/head";

export default function login() {
  return (
    <div>
      <Head>
        <title>Estore | Auth</title>
        <meta
          name="description"
          content="trending smart phones and accessories style collection, Shop for the latest smartphone deals from Samsung, Apple, Oppo, LG, Asus and more."
        />
      </Head>
      <AuthProvider>
        <Header />
        <Auth />
      </AuthProvider>
    </div>
  );
}
