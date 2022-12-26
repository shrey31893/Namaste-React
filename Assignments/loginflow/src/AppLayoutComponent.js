import { Provider } from "react-redux";
import App from "./App.js";
import store from "./store.js";

const AppLayoutComponent = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppLayoutComponent;
