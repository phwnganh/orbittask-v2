import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import App from "@/App.tsx";
import QueryProvider from "@/shared/providers/QueryProvider.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <QueryProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
      </QueryProvider>
  </StrictMode>,
)
