import {
  Resource,
  ListGuesser,
  AdminContext,
  defaultI18nProvider,
  localStorageStore,
  Admin,
  CustomRoutes,
  EditGuesser,
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
import MedicsTable from "./contents/tables/Medics";
import AddMedicPage from "./contents/tables/medics/AddPage";
import ShowMedicPage from "./contents/tables/medics/ShowPage";
import EditMedicPage from "./contents/tables/medics/EditPage";

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
          {permissions => (
            <>
              {permissions === "admin" && 
                <>
                  <Resource name="users" list={UsersTable} create={UserCreate} edit={UserEdit} />
                  <Resource name="medics" list={MedicsTable} create={AddMedicPage} edit={EditMedicPage} show={ShowMedicPage} />
                </>
              }
              {permissions === "student" && 
                <>
                  <Resource name="medics" create={AddMedicPage} />
                </>
              }
              <Resource name="mahasiswas" recordRepresentation={(record: any) => `${record.nim} - ${record.nama}`} />
              <Resource name="pasiens" recordRepresentation="nama" />
              <CustomRoutes>
                <Route path="profile" Component={Profile}/>
                <Route path="profile/edit" Component={ProfileEdit}/>
              </CustomRoutes>
            </>
          )}
        </AdminUI>
      </AdminContext>
    </BrowserRouter>
  );
}
