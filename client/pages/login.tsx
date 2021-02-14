import React from "react";
import firebase from "firebase";
import Head from "next/head";
import { useState } from "react";
import firebaseClient from "../firebaseClient";

export default function Home() {
  firebaseClient();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div>
      <div>
        <div>Login</div>
        <form>
          <label htmlFor="email">Email address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="emailAddress"
            value={email}
            aria-describedby="email-helper-text"
          />
          <div id="email-helper-text">We'll never share your email.</div>
        </form>
        <form>
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPass(e.target.value)}
            type="password"
            id="pass"
            value={pass}
            aria-describedby="password-helper-text"
          />
        </form>
        <div>
          <button
            onClick={async () => {
              await firebase
                .auth()
                .createUserWithEmailAndPassword(email, pass)
                .then(function (firebaseUser) {
                  window.location.href = "/";
                })
                .catch(function (error) {
                  const message = error.message;
                  console.log("registerError", message);
                });
            }}
          >
            Create account
          </button>
          <button
            onClick={async () => {
              await firebase
                .auth()
                .signInWithEmailAndPassword(email, pass)
                .then(function (firebaseUser) {
                  window.location.href = "/";
                })
                .catch(function (error) {
                  const message = error.message;
                  console.log("SignInError", message);
                });
            }}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}
