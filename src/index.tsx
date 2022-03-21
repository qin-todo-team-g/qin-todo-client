import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import { Main } from "./components/Main";

const domain: string = process.env.REACT_APP_AUTH0_DOMAIN || "";
const clientId: string = process.env.REACT_APP_AUTH0_CLIENT_ID || "";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <ChakraProvider theme={theme}>
        <Main />
      </ChakraProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
