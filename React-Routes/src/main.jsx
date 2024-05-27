import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import User from "./Components/User.jsx";
import GIthub from "./Components/GIthub.jsx";
import { GithubInfoLoader } from "./Components/GithubInfoLoader.jsx";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route path="user/:userid" element={<User />} />
      <Route loader = {GithubInfoLoader} path="github" element={<GIthub />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
