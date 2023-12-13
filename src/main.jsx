import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
// pages import
import Home from "./pages/home/index.jsx";
import About from "./pages/about/index.jsx";
import Projects from "./pages/projects/index.jsx";
import Contact from "./pages/contact/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <main className=" bg-slate-300/20">
    <RouterProvider router={router} />
  </main>
);
