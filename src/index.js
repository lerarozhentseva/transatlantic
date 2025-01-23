import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ReactDOM from "react-dom/client";
import App from "./App";
import Homepage from "pages/Homepage/Homepage";
import ServicesPage from "pages/ServicesPage/ServicesPage";
import Layouts from "components/common/Layouts/Layouts";
import CasePage from "pages/CasePage/CasePage";
import CasesPage from "pages/CasesPage/CasesPage";
import AboutPage from "pages/AboutPage/AboutPage";
import ContactsPage from "pages/ContactsPage/ContactsPage";
import ParkPage from "pages/ParkPage/ParkPage";
import SeaServicePage from "pages/SeaServicePage";
import AutoServicePage from "pages/AutoServicePage";
import TrainServicePage from "pages/TrainServicePage/";
import MultiServicePage from "pages/MultiServicePage";
import AviaServicePage from "pages/AviaServicePage";
import Privacy from "pages/Privacy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    // errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Homepage />,
        lazy: () => import("./pages/Homepage/Homepage"),
      },
      {
        path: "/about",
        element: <AboutPage />,
        lazy: () => import("./pages/AboutPage/AboutPage"),
      },
      {
        path: "/cases",
        element: <CasesPage />,
        lazy: () => import("./pages/CasesPage/CasesPage"),
      },
      {
        path: "/cases/:caseID",
        element: <CasePage />,
        lazy: () => import("./pages/CasePage/CasePage"),
      },
      {
        path: "/services/1",
        element: <SeaServicePage />,
        lazy: () => import("./pages/SeaServicePage/SeaServicePage"),
      },
      {
        path: "/services/2",
        element: <TrainServicePage />,
        lazy: () => import("./pages/TrainServicePage/TrainServicePage"),
      },
      {
        path: "/services/3",
        element: <AutoServicePage />,
        lazy: () => import("./pages/AutoServicePage"),
      },
      {
        path: "/services/4",
        element: <AviaServicePage />,
        lazy: () => import("./pages/AviaServicePage"),
      },
      {
        path: "/services/5",
        element: <MultiServicePage />,
        lazy: () => import("./pages/MultiServicePage/MultiServicePage"),
      },
      {
        path: "/services",
        element: <ServicesPage />,
        lazy: () => import("./pages/ServicesPage/ServicesPage"),
      },

      {
        path: "/contacts",
        element: <ContactsPage />,
        lazy: () => import("./pages/ContactsPage/ContactsPage"),
      },
      {
        path: "/park",
        element: <ParkPage />,
        lazy: () => import("./pages/ParkPage/ParkPage"),
      },
      {
        path: "/privacy",
        element: <Privacy />,
        lazy: () => import("./pages/Privacy/Privacy"),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </HelmetProvider>
  </React.StrictMode>
);
