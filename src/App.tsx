import {
  Resource,
  ListGuesser,
  AdminContext,
  defaultI18nProvider,
  localStorageStore,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { BrowserRouter } from "react-router-dom";
import { AdminUI } from "./components/AdminUI";

const defaultStore = localStorageStore();

export const App = () => (
  <BrowserRouter>
    <AdminContext
      dataProvider={dataProvider}
      authProvider={authProvider}
      i18nProvider={defaultI18nProvider}
      store={defaultStore}
    >
      <AdminUI
        title="Medical Tooth"
      >
        <Resource name="users" list={ListGuesser} />
      </AdminUI>
    </AdminContext>
  </BrowserRouter>
);
