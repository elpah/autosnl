import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"

// import "./i8n"
const queryClient = new QueryClient(
  // {defaultOptions:{
  //   queries:{
  //     retry:3,
  //     cacheTime:300_000,
  //     staleTime:10 * 1000, // how long a data is considered fresh. default is 0s, so here i modify to 10s
  //     refetchOnWindowFocus:false,
  //     refetchOnReconnect:true,
  //     refetchOnMount:true,
  //   }
  // }}
)
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <ReactQueryDevtools/>
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
