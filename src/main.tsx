import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FormApp } from "./FormApp";
import "./index.css";
import { ModalProvaider } from "./context/ModalContext/ModalProvaider";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ModalProvaider>
        <FormApp />
      </ModalProvaider>
    </QueryClientProvider>
  </StrictMode>
);
