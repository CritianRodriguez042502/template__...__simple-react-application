import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from "sonner";

// Routes
import { RoutesApp } from "@/routes/index.routes.jsx";

import "./index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Toaster expand={true} offset="37px" position="bottom-right" richColors />

      {/* Routes */}
      <RoutesApp />
    </QueryClientProvider>
  </StrictMode>,
);
