import firebase from "firebase";
import firebaseClient from "firebaseClient";
import { FormEvent, useState } from "react";
export default function Auth() {
  firebaseClient();
  const [registration, setRegistration] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLoginSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function (firebaseUser) {
        console.log("LOGGEDIN, CHECK COOKIES");
        window.location.href = "/";
      })
      .catch(function (error) {
        console.log(email, password);
        console.log("signIN error", error);
      });

    setEmail("");
    setPassword("");
    setUsername("");
  };
  const handleRegisterSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function (firebaseUser) {
        console.log("REGISTERED, CHECK COOKIES");
        window.location.href = "/";
      })
      .catch(function (error) {
        console.log("login error", error);
      });
  };

  return (
    <div className="grid-container ">
      <main className="col-start-2 col-end-3 grid place-content-center text-center  ">
        <div className="border max-w-md p-4 md:p-8 sh rounded-lg bg-gradient-to-tr from-purple-600 to-red-400 mt-10">
          <h1 className=" text-3xl md:text-4xl md:mb-4">Free Account</h1>
          <p className="text-sm md:text-base mb-2 md:mb-4">
            EStore the leading online shoppin platform in SouthEast Asia and Taiwan
          </p>
          <form
            className="text-left md:text-xl "
            onSubmit={registration ? handleRegisterSubmit : handleLoginSubmit}
          >
            {registration && (
              <div className="">
                <label htmlFor="username">USERNAME</label>
                <input
                  type="text"
                  name="username"
                  value={username}
                  id="username"
                  required={true}
                  className="block p-2 rounded-md my-2 w-full"
                  placeholder="JohnDoe32"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            )}
            <label htmlFor="email">EMAIL</label>
            <input
              type="text"
              name="email"
              value={email}
              id="email"
              // required={true}
              className="block p-2 rounded-md my-2 w-full"
              placeholder="JohnDoe32@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              name="password"
              value={password}
              id="password"
              className="block p-2 rounded-md my-2 w-full"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex justify-between md:text-sm text-xs">
              <div className="">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  defaultChecked={true}
                  value="Remember Password"
                />
                <label htmlFor="remember">Remember Password</label>
              </div>
              <p>Forget Password?</p>
            </div>
            <button
              className="w-full  p-2 md:p-3 rounded-md  mt-3 md:mt-5 bg-purple-800 hover:bg-purple-700  text-white "
              type="submit"
            >
              {registration ? "Sign Up Free Account" : "Login Your Account"}
            </button>
            <button
              className=" w-full  p-2 md:p-3 rounded-md  mt-3 md:mt-5 bg-black   text-white"
              onClick={() => setRegistration((prev) => !prev)}
            >
              {registration ? "Login Your Account" : "Create New Account"}
            </button>
            <p className="md:text-sm text-xs  mt-3 md:mt-5">
              Signing up signifies that you have read and agree to the Terms of
              Service and our Privacy Policy.
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}
