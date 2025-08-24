import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import BackButton from "./UI/BackButton";

export default function Layout() {
  const location = useLocation();

  const isDetailsPage =
    location.pathname.includes("/superheroes/") ||
    location.pathname.includes("/edit/") ||
    location.pathname.includes("/create");

  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-6">
        {isDetailsPage && <BackButton />}
        <Outlet />
      </main>
    </div>
  );
}
