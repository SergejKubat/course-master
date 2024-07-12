import React from "react";
import ReactDOM from "react-dom/client";

import FlagProvider from "@unleash/proxy-client-react";

import App from "./App";

import "./index.css";

const config = {
    url: import.meta.env.VITE_UNLEASH_API_BASE_URL,
    clientKey: import.meta.env.VITE_UNLEASH_CLIENT_TOKEN,
    refreshInterval: 60,
    appName: "frontend"
};

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <FlagProvider config={config}>
            <App />
        </FlagProvider>
    </React.StrictMode>
);
