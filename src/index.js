import React from "react";
import * as ReactDOM from 'react-dom/client';
import App from "./App.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

// https://github.com/facebook/react/blob/main/CHANGELOG.md#deprecations
// il metodo ReactDOM.render è deprecato a partire dal 26 aprile 2022:
// createRoot: New method to create a root to render or unmount.
// Use it instead of ReactDOM.render. New features in React 18 don't work without it.


