import { ErrorInfo, useState } from "react";
import { AppBar, LayoutProps, useSidebarState } from "react-admin";

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

    const [ open ] = useSidebarState();
    const [errorInfo, setErrorInfo] = useState<ErrorInfo | null>(null);

    const handleError = (error: Error, info: ErrorInfo) => {
        setErrorInfo(info);
    };

    return (
        <div className="wrapper">
            <AppBar/>
            {children}
        </div>
    );
}