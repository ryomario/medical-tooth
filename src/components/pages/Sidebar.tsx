import { useSidebarSkinState, useToggleDarkModeState } from "@app/store/ui";
import { PfImage } from "@profabric/react-components";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MenuItem from "./sidebars/MenuItem";

export interface IMenuItem {
    name: string;
    type?: string;
    icon?: string;
    path?: string;
    children?: Array<IMenuItem>;
    childrenHidden?: boolean;
}

export const MENU: IMenuItem[] = [
    {
        name: 'Admin',
        type: 'header'
    },
    {
        name: 'Dashboard',
        icon: 'fas fa-tachometer-alt nav-icon',
        path: '/'
    },
    {
        name: 'Users',
        icon: 'fas fa-users nav-icon',
        path: '/users'
    },
    {
        name: 'Menu',
        type: 'header'
    },
    {
        name: 'Data Medis',
        icon: 'fas fa-notes-medical nav-icon',
        children: [
            {
                name: "Isi Data Medis",
                icon: 'far fa-circle nav-icon',
                path: '/medics/add'
            },
            {
                name: "Semua Data Medis",
                icon: 'far fa-circle nav-icon',
                path: '/medics'
            }
        ]
    },
    {
        name: 'Pengaturan',
        type: 'header'
    },
    {
        name: 'Profil',
        icon: 'fas fa-user-cog nav-icon',
        children: [
        {
            name: 'Ubah Profil',
            icon: 'far fa-circle nav-icon',
            path: '/profile/edit'
        },

        {
            name: 'Profil Saya',
            icon: 'far fa-circle nav-icon',
            path: '/profile'
        }
        ]
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
                        className={`nav nav-pills nav-sidebar nav-child-indent flex-column`}
                        role="menu"
                    >
                        {MENU.map((menuItem: IMenuItem) => menuItem.type != 'header' ? (
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