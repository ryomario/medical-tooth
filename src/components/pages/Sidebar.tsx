import { useSidebarSkinState, useToggleDarkModeState } from "@app/store/ui";
import { PfImage } from "@profabric/react-components";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MenuItem from "./sidebars/MenuItem";
import { usePermissions } from "react-admin";

export interface IMenuItem {
    name: string;
    type?: string;
    icon?: string;
    path?: string;
    pathRegex? : string;
    children?: Array<IMenuItem>;
    childrenHidden?: boolean;
    isAdminOnly?: boolean;
}

export const MENU: IMenuItem[] = [
    {
        name: 'Admin',
        type: 'header'
    },
    {
        name: 'Dashboard',
        icon: 'fas fa-tachometer-alt nav-icon',
        path: '/',
        pathRegex: '[/]{1}$'
    },
    {
        name: 'Users',
        icon: 'fas fa-users nav-icon',
        isAdminOnly: true,
        path: '/users',
        pathRegex: '(/users).*'
    },
    {
        name: 'Menu',
        type: 'header'
    },
    {
        name: 'Data Medis',
        icon: 'fas fa-notes-medical nav-icon',
        path: '/medics',
        pathRegex: '(/medics).*'
    },
    {
        name: 'Pengaturan',
        type: 'header'
    },
    {
        name: 'Profil Saya',
        icon: 'fas fa-user-cog nav-icon',
        path: '/profile',
        pathRegex: '(/profile).*'
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
    const [sidebarSkin] = useSidebarSkinState();

    const {permissions: role} = usePermissions();

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
                        className={`nav nav-pills nav-sidebar nav-child-indent flex-column`}
                        role="menu"
                    >
                        {MENU.filter((menuItem: IMenuItem) => role === 'admin' ? true : !menuItem.isAdminOnly).map((menuItem: IMenuItem) => menuItem.type != 'header' ? (
                            <MenuItem
                                key={menuItem.name + menuItem.path}
                                menuItem={menuItem}
                            />
                        ): (<li key={menuItem.name} className="nav-header">{menuItem.name}</li>))}
                    </ul>
                </nav>
            </div>
        </aside>
    );
}