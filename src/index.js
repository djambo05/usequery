import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CoinStats from "./pages/Coinstats";
import BinancePage from "./pages/BinancePage";
import Select from "./pages/Select";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
const queryClient = new QueryClient();
const router = createBrowserRouter([
  { path: "/", element: <Select /> },
  { path: "coinstats/", element: <CoinStats /> },
  { path: "binance/", element: <BinancePage /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
