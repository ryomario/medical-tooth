import { useEffect, useState } from "react";
import { IMenuItem } from "../Sidebar";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export default function MenuItem({menuItem}: {menuItem: IMenuItem}) {
    const [isMenuExtended, setIsMenuExtended] = useState(false);
    const [isExpandable, setIsExpandable] = useState(false);
    const [isMainActive, setIsMainActive] = useState(false);
    const [isOneOfChildrenActive, setIsOneOfChildrenActive] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuExtended(!isMenuExtended);
    };

    const handleMainMenuAction = () => {
        if (isExpandable) {
            toggleMenu();
            return;
        }
        navigate(menuItem.path ? menuItem.path : '/');
    };

    const calculateIsActive = (url: string) => {
        setIsMainActive(false);
        setIsOneOfChildrenActive(false);
        if (isExpandable && menuItem && menuItem.children) {
            menuItem.children.forEach((item) => {
                if (item.path === url) {
                    setIsOneOfChildrenActive(true);
                    setIsMenuExtended(true);
                }
            });
        } else if (menuItem.path === url) {
            setIsMainActive(true);
        }
    };

    useEffect(() => {
        if (location) {
            calculateIsActive(location.pathname);
        }
    }, [location, isExpandable, menuItem]);

    useEffect(() => {
        if (!isMainActive && !isOneOfChildrenActive) {
            setIsMenuExtended(false);
        }
    }, [isMainActive, isOneOfChildrenActive]);

    useEffect(() => {
        setIsExpandable(
            Boolean(menuItem && menuItem.children && menuItem.children.length > 0)
        );
    }, [menuItem]);

    return (
        <li className={`nav-item${isMenuExtended ? ' menu-open' : ''}`}>
            <a
                className={`nav-link${
                    isMainActive || isOneOfChildrenActive ? ' active' : ''
                }`}
                role="link"
                onClick={handleMainMenuAction}
                style={{cursor: 'pointer'}}
            >
                <i className={`${menuItem.icon}`} />
                <p>{menuItem.name}</p>
                {isExpandable ? <i className="right fas fa-angle-left icon-caret" /> : null}
            </a>

            {isExpandable &&
                menuItem &&
                menuItem.children &&
                menuItem.children.map((item) => (
                    <ul key={item.name} className="nav nav-treeview">
                        <li className="nav-item">
                        <NavLink className="nav-link" to={`${item.path}`}>
                            <i className={`${item.icon}`} />
                            <p>{item.name}</p>
                        </NavLink>
                        </li>
                    </ul>
                    )
                )
            }
        </li>
    );
}