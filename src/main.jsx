import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: (
      <div className="flex flex-col">
        <Link to={"/"}>Back to Home</Link>
        <Link to={"/about/next"}>Go to Next Page</Link>
      </div>
    ),
  },
  {
    path: "/about/next",
    element: (
      <div>
        <Link to={"/about"}>Back to About</Link>
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <main className=" bg-slate-300/20">
    <RouterProvider router={router} />
  </main>
);
