import { useHeaderBorderTogglerState, useNavbarVariantState, useSidebarControlTogglerState, useSidebarTogglerState } from "@app/store/ui";
import { useCallback } from "react";
import UserDropdown from "./headers/UserDropdown";

export default function Header() {
    const [_,toggleSidebarMenu] = useSidebarTogglerState();
    // const [__,toggleControlSidebar] = useSidebarControlTogglerState();
    const [navbarVariant] = useNavbarVariantState();
    const [headerBorder] = useHeaderBorderTogglerState();

    const handleToggleMenuSidebar = () => {
        toggleSidebarMenu();
    }
    // const handleToggleControlSidebar = () => {
    //     toggleControlSidebar();
    // }

    const getContainerClasses = useCallback(() => {
        let classes = `main-header navbar navbar-expand ${navbarVariant}`;
        if (headerBorder) {
            classes = `${classes} border-bottom-0`;
        }
        return classes;
    }, [navbarVariant, headerBorder]);

    return (
        <nav className={getContainerClasses()}>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <button
                        onClick={handleToggleMenuSidebar}
                        type="button"
                        className="nav-link"
                        >
                        <i className="fas fa-bars"/>
                    </button>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <UserDropdown/>
            </ul>
        </nav>
    );
}