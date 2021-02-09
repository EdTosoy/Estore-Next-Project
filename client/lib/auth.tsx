import React, { useState, useEffect, useContext, createContext } from "react";
import nookies from "nookies";
import firebaseClient from "../firebaseClient";
import firebase from "firebase/app";
import "firebase/auth";

type ContextProps = {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
};
export const AuthContext = createContext<ContextProps>({
  user: null,
  setUser: () => {},
});

type Props = {
  children: React.ReactNode;
};

export let uid = "";

export const AuthProvider = ({ children }: Props) => {
  firebaseClient();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    return firebase.auth().onIdTokenChanged(async (user) => {
      console.log("auth changed");
      //@ts-ignore
      console.log("USERid:", user ? user.uid : "Nothing");
      if (user) {
        uid = user.uid;
      }

      if (!user) {
        setUser(null);
        nookies.set(undefined, "token", "", {});
        return;
      }

      const token = await user.getIdToken();
      setUser(user);
      nookies.set(undefined, "token", token, {});
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
// import React, { useState, createContext } from "react";

// type ContextProps = {
//   darkmode: boolean;
//   setDarkmode: React.Dispatch<React.SetStateAction<boolean>>;
// };

// export const DarkModeContext = createContext<ContextProps>({
//   darkmode: false,
//   setDarkmode: () => {},
// });

// type Props = {
//   children: React.ReactNode;
// };
// export const DarkModeProvider = ({ children }: Props) => {
//   const [darkmode, setDarkmode] = useState<boolean>(false);
//   return (
//     <DarkModeContext.Provider value={{ darkmode, setDarkmode }}>
//       {children}
//     </DarkModeContext.Provider>
//   );
// };
