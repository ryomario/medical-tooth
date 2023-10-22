import {
  Resource,
  ListGuesser,
  AdminContext,
  defaultI18nProvider,
  localStorageStore,
  Admin,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { BrowserRouter } from "react-router-dom";
import { AdminUI } from "./components/AdminUI";
import { useWindowSize } from "./hooks/useWindowSize";
import { useWindowSizeState } from "./store/ui";
import { useEffect } from "react";
import { calculateWindowSize } from "./utils/helpers";
import UsersTable from "./contents/tables/Users";
import Dashboard from "./contents/Dashboard";

const defaultStore = localStorageStore();

export const App = () => {
  // const windowSize = useWindowSize();
  const [screenSize, setScreenSize] = useWindowSizeState();

  useEffect(() => {
    // const size = calculateWindowSize(windowSize.width);
    // if (screenSize !== size) {
    //   setScreenSize(size);
    // }
    // console.log(screenSize);
  }, [screenSize]);
  return (
    <BrowserRouter>
      <AdminContext
        dataProvider={dataProvider}
        authProvider={authProvider}
        i18nProvider={defaultI18nProvider}
        store={defaultStore}
      >
        <AdminUI
          title="Medical Tooth"
          dashboard={Dashboard}
        >
          <Resource name="users" list={UsersTable} />
        </AdminUI>
      </AdminContext>
    </BrowserRouter>
  );
}
