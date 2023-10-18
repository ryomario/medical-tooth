import { ComponentType, createElement } from "react";
import { AuthCallback, CoreAdminUI, CoreAdminUIProps, LoadingPage, NotFound, Notification } from "react-admin";

import {
    AdminLayout as DefaultLayout
} from "@app/layouts/Admin";
import { LoginPage } from "@app/layouts/LoginPage";

export const AdminUI = ({
    layout = DefaultLayout,
    catchAll = NotFound,
    loading = LoadingPage,
    loginPage = LoginPage,
    authCallbackPage = AuthCallback,
    notification = Notification,
    ...props
}: AdminUIProps) => (
    <>
        <CoreAdminUI
            layout={layout}
            catchAll={catchAll}
            loading={loading}
            loginPage={loginPage}
            authCallbackPage={authCallbackPage}
            {...props}
        />
        {createElement(notification)}
    </>
);
export interface AdminUIProps extends CoreAdminUIProps {
    /**
     * The component used to display notifications
     *
     * @see https://marmelab.com/react-admin/Admin.html#notification
     * @example
     * import { Admin, Notification } from 'react-admin';
     * import { dataProvider } from './dataProvider';
     *
     * const MyNotification = () => <Notification autoHideDuration={5000} />;
     *
     * const App = () => (
     *     <Admin notification={MyNotification} dataProvider={dataProvider}>
     *         ...
     *     </Admin>
     * );
     */
    notification?: ComponentType;
}
