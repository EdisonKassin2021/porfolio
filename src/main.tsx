import ReactDOM from "react-dom/client";
import "./index.css";
import RouteGroups from "./routes/Routes.tsx";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/app/store.ts";
import { Provider } from "react-redux";
import { BASE_ROUTE } from "./routes/constants.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    {/* Fix github error 404: https://youtu.be/fuGu-Ponjf8 */}
    <BrowserRouter basename={BASE_ROUTE}>
      <RouteGroups />
    </BrowserRouter>
  </Provider>
);
