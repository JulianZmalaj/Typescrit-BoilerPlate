import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import store from "redux/store";
import { Provider } from "react-redux";
import { loadLanguage } from "services/i18n";

const skin = process.env.REACT_APP_SKIN_NAME;
if (skin) {
  const App = lazy(() => import(`skins/${skin}/App`));
  loadLanguage(skin);
  ReactDOM.render(
    <React.StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
        <Provider store={store}>
          <App />
        </Provider>
      </Suspense>
    </React.StrictMode>,
    document.querySelector("#root")
  );
} else {
  throw new Error(
    "No skin specified, use --skin=<SKIN_NAME> as script argument"
  );
}
