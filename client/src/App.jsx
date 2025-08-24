import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home.jsx";
import SuperheroDetails from "./pages/SuperheroDetails";
import CreateSuperhero from "./pages/CreateSuperhero";
import EditSuperhero from "./pages/EditSuperhero";
import NotFound from "./pages/NotFound";
import { SuperheroProvider } from "./context/SuperheroesContext.jsx";

export default function App() {
  return (
    <SuperheroProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="superheroes/:id" element={<SuperheroDetails />} />
            <Route path="create" element={<CreateSuperhero />} />
            <Route path="edit/:id" element={<EditSuperhero />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SuperheroProvider>
  );
}
