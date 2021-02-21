import Link from "next/link";
import nookies, { parseCookies } from "nookies";
import { GetServerSideProps, GetStaticProps } from "next";
import { verifyIdToken } from "../firebaseAdmin";

import React, { useContext } from "react";
import { AuthContext, uid } from "../lib/auth";
import firebase from "firebase";
import { MenuContext } from "ContextAPI/menuContext";

export default function Header() {
  const nav = [
    {
      name: "home",
      pathname: "/",
    },
    {
      name: "category",
      pathname: "/#category",
    },
    {
      name: "shop",
      pathname: "/shop",
    },
    {
      name: "blog",
      pathname: "/blog",
    },

    {
      name: "contact",
      pathname: "/#contact",
    },
  ];

  const { user } = useContext(AuthContext);
  const { openMenu, setOpenMenu } = useContext(MenuContext);

  console.log(uid);
  return (
    <header
      className="bg-white grid-container border-b sticky top-0 z-50  "
      id="home"
    >
      {openMenu && (
        <div className="col-start-1 md:hidden  col-end-4">
          <div className="top-16 mt-2 border-t border-b shadow-3xl absolute w-full  text-center  p-6 bg-white ">
            {nav.map(({ name, pathname }) => (
              <Link href={pathname} key={name}>
                <nav
                  className="cursor-pointer navigation my-4 uppercase hover:text-red-600 "
                  onClick={() => {
                    setOpenMenu((prev) => !prev);
                  }}
                >
                  {name}
                </nav>
              </Link>
            ))}
          </div>
        </div>
      )}
      <main className="col-start-2 col-end-3 flex items-center justify-between py-4">
        <div className="text-2xl text-red-600 ">
          <a href="/#">EStore</a>
        </div>
        <div className="hidden md:flex ">
          {nav.map(({ name, pathname }) => (
            <nav key={name} className="uppercase ml-8 hover:text-red-600 ">
              <Link href={`${pathname}`}>
                <a>{name}</a>
              </Link>
            </nav>
          ))}
        </div>
        <div className="flex items-center">
          <div
            className="md:hidden grid place-content-center p-2 hover:bg-gray-200 cursor-pointer  rounded-full"
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            <box-icon name="menu"></box-icon>
          </div>
          <div className="grid place-content-center p-2 hover:bg-gray-200 cursor-pointer  rounded-full">
            <Link href="/cart">
              <box-icon name="cart"></box-icon>
            </Link>
          </div>
          {!user ? (
            <div className="grid place-content-center p-2 hover:bg-gray-200 cursor-pointer  rounded-full">
              <Link href="/auth">
                <box-icon name="user-circle"></box-icon>
              </Link>
            </div>
          ) : (
            <button
              className="p-2 rounded-md hover:bg-gray-100"
              onClick={async () => {
                await firebase.auth().signOut();
                window.location.href = "/";
              }}
            >
              LogOut
            </button>
          )}
        </div>
      </main>
    </header>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);
    const { email } = token;
    return {
      props: { token },
    };
  } catch (err) {
    context.res.writeHead(302, { Location: "/login" });
    context.res.end();
    return { props: {} };
  }
};
