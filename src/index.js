import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CoinStats from "./pages/Coinstats";
import Binance from "./pages/Binance";
import Select from "./pages/Select";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  { path: "/", element: <Select /> },
  { path: "coinstats/", element: <CoinStats /> },
  { path: "binance/", element: <Binance /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
