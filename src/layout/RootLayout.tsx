import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function RootLayout() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-144px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
