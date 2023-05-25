//Core React
import React from "react";
import ReactDOM from "react-dom/client";

//Router packages
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

//View Components
import App from "./App";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

//Redux Components
import { Provider } from "react-redux";
import store from "./store";

//CSS
//import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/bootstrap.custom.css";
import "./assets/index.css";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index={true} path="/" element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
        </Route>
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
