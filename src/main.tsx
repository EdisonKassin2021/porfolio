import ReactDOM from "react-dom/client";
import "./index.css";
import RouteGroups from "./routes/Routes.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/app/store.ts";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      {/* Fix github error 404: https://youtu.be/fuGu-Ponjf8 */}
      <BrowserRouter basename={"/"}>
        <RouteGroups />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
