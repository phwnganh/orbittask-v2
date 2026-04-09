import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import AppRoute from "./routes/app.route.tsx";
import QueryProvider from "@/shared/providers/QueryProvider.tsx";
import {authInitialization} from "@/authInitialization.ts";

await authInitialization()
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <QueryProvider>
            <BrowserRouter>
                <AppRoute/>
            </BrowserRouter>
      </QueryProvider>
  </StrictMode>,
)
