import "./lib/error-capture";
import "./styles.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App";
import { CartProvider } from "./lib/cart-context";

const queryClient = new QueryClient();
const routerBasename = "/korjic";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <BrowserRouter basename={routerBasename}>
          <App />
        </BrowserRouter>
      </CartProvider>
    </QueryClientProvider>
  </StrictMode>,
);
