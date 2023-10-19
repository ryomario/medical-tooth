import { useSidebarSkinState, useToggleDarkModeState } from "@app/store/ui";
import { PfImage } from "@profabric/react-components";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MenuItem from "./sidebars/MenuItem";

export interface IMenuItem {
    name: string;
    icon?: string;
    path?: string;
    children?: Array<IMenuItem>;
}

export const MENU: IMenuItem[] = [
    {
        name: 'Dashboard',
        icon: 'fas fa-tachometer-alt nav-icon',
        path: '/'
    },
    {
        name: 'Users',
        icon: 'fas fa-wrench nav-icon',
        path: '/users'
    },
    {
        name: 'Menu Item',
        icon: 'far fa-caret-square-down nav-icon',
        children: [
        {
            name: 'Item 1',
            icon: 'fas fa-hammer nav-icon',
            path: '/sub-menu-1'
        },

        {
            name: 'Item 2',
            icon: 'fas fa-cogs nav-icon',
            path: '/sub-menu-2'
        }
        ]
    },
    {
        name: 'Profil',
        icon: 'fas fa-wrench nav-icon',
        path: '/blank'
    },
];

const StyledBrandImage = styled(PfImage)`
  float: left;
  line-height: 0.8;
  margin: -1px 8px 0 6px;
  opacity: 0.8;
  --pf-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23) !important;
`;

export default function Sidebar() {
    const [isDarkMode] = useToggleDarkModeState();
    const [sidebarSkin] = useSidebarSkinState();

    return (
        <aside className={`main-sidebar elevation-4 ${sidebarSkin}`}>
            <Link to="/" className="brand-link">
                <StyledBrandImage
                    src="/assets/img/favicon.png"
                    alt="Dental Tooth"
                    width={33}
                    height={33}
                    rounded
                />
                <span className="brand-text font-weight-light">Dental Tooth</span>
            </Link>
            <div className="sidebar">
                <nav className="mt-2" style={{overflowY: 'hidden', overflowX: 'hidden'}}>
                    <ul
                        className={`nav nav-pills nav-sidebar flex-column`}
                        role="menu"
                    >
                        {MENU.map((menuItem: IMenuItem) => (
                            <MenuItem
                                key={menuItem.name + menuItem.path}
                                menuItem={menuItem}
                            />
                        ))}
                    </ul>
                </nav>
            </div>
        </aside>
    );
}