import {
  Resource,
  ListGuesser,
  AdminContext,
  defaultI18nProvider,
  localStorageStore,
  Admin,
  CustomRoutes,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { BrowserRouter, Route } from "react-router-dom";
import { AdminUI } from "./components/AdminUI";
import { useWindowSize } from "./hooks/useWindowSize";
import { useWindowSizeState } from "./store/ui";
import { useEffect } from "react";
import { calculateWindowSize } from "./utils/helpers";
import UsersTable, { UserCreate, UserEdit } from "./contents/tables/Users";
import Dashboard from "./contents/Dashboard";
import Profile, { ProfileEdit } from "./contents/Profile";

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
          <Resource name="users" list={UsersTable} create={UserCreate} edit={UserEdit} />
          <CustomRoutes>
            <Route path="profile" Component={Profile}/>
            <Route path="profile/edit" Component={ProfileEdit}/>
          </CustomRoutes>
        </AdminUI>
      </AdminContext>
    </BrowserRouter>
  );
}
