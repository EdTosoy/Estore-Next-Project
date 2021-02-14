import Header from "components/Header";
import Auth from "../components/Auth";
import { AuthProvider } from "../lib/auth";

export default function login() {
  return (
    <div>
      <AuthProvider>
        <Header />
        <Auth />
      </AuthProvider>
    </div>
  );
}
