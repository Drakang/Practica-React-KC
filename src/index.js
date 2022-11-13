import React from "react"
import {createRoot} from "react-dom/client"
import "./index.css"
import App from "./App"
import storage from "./utils/storage"
import { setAuthorizationHeader } from "./api/client"

const accessToken = storage.get("auth_token")
setAuthorizationHeader(accessToken)


const container = document.querySelector("#root")
const root = createRoot(container)
root.render(
<React.StrictMode>
  <App isPrevLogged={!!accessToken} />
</React.StrictMode>)

