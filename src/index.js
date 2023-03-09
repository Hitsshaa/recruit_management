import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux/store";
import { Provider } from "react-redux";
// import { useGoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* <GoogleOAuthProvider clientId="425255993918-d6pm68qh0jquti8kradsmkm2uefnbund.apps.googleusercontent.com"> */}
    <App />
    {/* </GoogleOAuthProvider> */}
  </Provider>
  // </React.StrictMode>
);

reportWebVitals();
