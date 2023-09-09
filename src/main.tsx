import ReactDOM from "react-dom/client";
import "./index.css";
import RouteGroups from "./routes/Routes.tsx";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/app/store.ts";
import { Provider } from "react-redux";
import "dotenv/config";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <RouteGroups />
    </BrowserRouter>
  </Provider>
);
