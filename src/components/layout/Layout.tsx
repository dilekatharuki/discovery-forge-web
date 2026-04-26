import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <Header />
    <main className="flex-1">
      <Outlet />
    </main>
  </div>
);

export default Layout;