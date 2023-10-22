import Footer from "@app/components/pages/Footer";
import Header from "@app/components/pages/Header";
import Sidebar from "@app/components/pages/Sidebar";
import { useSidebarControlTogglerState, useSidebarTogglerState, useWindowSizeState } from "@app/store/ui";
import { addWindowClass, removeWindowClass } from "@app/utils/helpers";
import { PfImage } from "@profabric/react-components";
import { ErrorInfo, useCallback, useEffect, useState } from "react";
import { AppBar, LayoutProps, useAuthState, useSidebarState } from "react-admin";

export const AdminLayout = (props: LayoutProps) => {
    const {
        // appBar: AppBar = DefaultAppBar,
        appBarAlwaysOn,
        children,
        className,
        dashboard,
        error: errorComponent,
        // menu: Menu = DefaultMenu,
        // sidebar: Sidebar = DefaultSidebar,
        title,
        ...rest
    } = props;


    const [menuSidebarCollapsed, toggleSidebarMenu] = useSidebarTogglerState();
    // const [controlSidebarCollapsed] = useSidebarControlTogglerState();
    const [screenSize] = useWindowSizeState();

    const {isLoading: isAppLoading, authenticated: authentication} = useAuthState();
    const [errorInfo, setErrorInfo] = useState<ErrorInfo | null>(null);

    const handleToogleMenuSidebar = () => {
        toggleSidebarMenu();
    }

    const handleError = (error: Error, info: ErrorInfo) => {
        setErrorInfo(info);
    };

    useEffect(() => {
        removeWindowClass('register-page');
        removeWindowClass('login-page');
        removeWindowClass('hold-transition');

        addWindowClass('sidebar-mini');

        return () => {
            removeWindowClass('sidebar-mini');
        };
    }, []);

    useEffect(() => {
        removeWindowClass('sidebar-closed');
        removeWindowClass('sidebar-collapse');
        removeWindowClass('sidebar-open');
        if (menuSidebarCollapsed && screenSize === 'lg') {
            addWindowClass('sidebar-collapse');
        } else if (menuSidebarCollapsed && screenSize !== 'lg') {
            addWindowClass('sidebar-open');
        } else if (!menuSidebarCollapsed && screenSize !== 'lg') {
            addWindowClass('sidebar-closed');
            addWindowClass('sidebar-collapse');
        }
    }, [screenSize, menuSidebarCollapsed]);

    // useEffect(() => {
    //     if (controlSidebarCollapsed) {
    //         removeWindowClass('control-sidebar-slide-open');
    //     } else {
    //         addWindowClass('control-sidebar-slide-open');
    //     }
    // }, [screenSize, controlSidebarCollapsed]);
    

    const getAppTemplate = useCallback(() => {
        if (isAppLoading) {
            return (
                <div className="preloader flex-column justify-content-center align-items-center">
                    <PfImage
                        className="animation__shake"
                        src="/assets/img/favicon.png"
                        alt="Medical Tooth"
                        height={60}
                        width={60}
                    />
                </div>
            );
        }
        return (
            <>
                <Header/>
                <Sidebar/>
                <div className="content-wrapper">
                    <div className="pt-3"/>
                    <section className="content">
                        {children}
                    </section>
                </div>
                <Footer/>
                <div
                    id="sidebar-overlay"
                    role="presentation"
                    onClick={handleToogleMenuSidebar}
                    onKeyDown={() => {}}
                />
            </>
        );
    }, [isAppLoading]);

    return (
        <div className="wrapper">{getAppTemplate()}</div>
    );
}