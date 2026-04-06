import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import AppRoute from "./routes/app.route.tsx";
import QueryProvider from "@/providers/QueryProvider.tsx";
import AuthInitialization from "@/providers/AuthInitialization.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <QueryProvider>
          <AuthInitialization>
            <BrowserRouter>
                <AppRoute/>
            </BrowserRouter>
          </AuthInitialization>
      </QueryProvider>
  </StrictMode>,
)
