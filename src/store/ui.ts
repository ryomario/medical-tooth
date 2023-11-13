import { useWindowSize } from '@app/hooks/useWindowSize';
import {
  addWindowClass,
  calculateWindowSize,
  removeWindowClass
} from '@app/utils/helpers';
import {
  NAVBAR_DARK_VARIANTS,
  NAVBAR_LIGHT_VARIANTS,
  SIDEBAR_DARK_SKINS,
  SIDEBAR_LIGHT_SKINS
} from '@app/utils/themes';
import { useEffect, useState } from 'react';
import { useStore } from 'react-admin';

export interface UiState {
  screenSize: string;
  menuSidebarCollapsed: boolean;
  controlSidebarCollapsed: boolean;
  darkMode: boolean;
  headerBorder: boolean;
  headerFixed: boolean;
  footerFixed: boolean;
  layoutBoxed: boolean;
  layoutFixed: boolean;
  menuItemFlat: boolean;
  menuChildIndent: boolean;
  navbarVariant: string;
  sidebarSkin: string;
}

const initialState: UiState = {
  screenSize: calculateWindowSize(window.innerWidth),
  darkMode: false,
  navbarVariant: 'navbar-light',
  sidebarSkin: 'sidebar-dark-primary',
  menuSidebarCollapsed: false,
  controlSidebarCollapsed: true,
  headerBorder: false,
  headerFixed: false,
  footerFixed: true,
  layoutBoxed: false,
  menuItemFlat: false,
  menuChildIndent: false,
  layoutFixed: false
};

addWindowClass('layout-fixed');

// const uiSlice = {
//   actions: {
//     toggleHeaderFixed: (state) => {
//       state.headerFixed = !state.headerFixed;
//       if (state.headerFixed) {
//         addWindowClass('layout-navbar-fixed');
//       } else {
//         removeWindowClass('layout-navbar-fixed');
//       }
//     },
//     toggleFooterFixed: (state) => {
//       state.footerFixed = !state.footerFixed;
//       if (state.footerFixed) {
//         addWindowClass('layout-footer-fixed');
//       } else {
//         removeWindowClass('layout-footer-fixed');
//       }
//     },
//     toggleLayoutBoxed: (state) => {
//       state.layoutBoxed = !state.layoutBoxed;
//       if (state.layoutBoxed) {
//         addWindowClass('layout-boxed');
//       } else {
//         removeWindowClass('layout-boxed');
//       }
//     },
//     toggleLayoutFixed: (state) => {
//       state.layoutFixed = !state.layoutFixed;
//       if (state.layoutFixed) {
//         removeWindowClass('layout-fixed');
//       } else {
//         addWindowClass('layout-fixed');
//       }
//     },
//     toggleMenuItemFlat: (state) => {
//       state.menuItemFlat = !state.menuItemFlat;
//     },
//     toggleMenuChildIndent: (state) => {
//       state.menuChildIndent = !state.menuChildIndent;
//     },
//   }
// };

// sidebar toggler
var sidebarOpen: boolean, setSidebarOpen: (val: boolean) => void;
export const useSidebarTogglerState = (): useSidebarTogglerStateResult => {
  [sidebarOpen, setSidebarOpen] = useStore<boolean>('sidebar.open', initialState.menuSidebarCollapsed);
  const toggle = () => {setSidebarOpen(!sidebarOpen)};
  return [sidebarOpen, toggle];
};
export type useSidebarTogglerStateResult = [boolean, () => void];

// sidebar control toggler
export const useSidebarControlTogglerState = (): useSidebarControlTogglerStateResult => {
  const [open, setOpen] = useStore<boolean>('sidebar.control.open', initialState.controlSidebarCollapsed);
  return [open, () => setOpen(!open)];
};
export type useSidebarControlTogglerStateResult = [boolean, () => void];

// header border toggler
export const useHeaderBorderTogglerState = (): useHeaderBorderTogglerStateResult => {
  const [isSet, setB] = useStore<boolean>('header.border.set', initialState.headerBorder);
  return [isSet, () => setB(!isSet)];
};
export type useHeaderBorderTogglerStateResult = [boolean, () => void];

// window size
export const useWindowSizeState = (): useWindowSizeStateResult => {
  const windowSize = useWindowSize();
  const getSize = () => calculateWindowSize(windowSize.width);
  const [size, setSize] = useState(getSize());

  useEffect(() => {
    setSize(getSize());
  }, [windowSize]);
  return [size, setSize];
}
export type useWindowSizeStateResult = [string, (size: string) => void];

// dark mode toggler
export const useToggleDarkModeState = (): useToggleDarkModeStateResult => {
  const [isDarkMode, setDarkMode] = useStore<boolean>('mode.dark', initialState.darkMode);
  const toggleDarkMode = () => {
    const [_,setNavbarVariant] = useNavbarVariantState();
    const [__,setSidebarSkin] = useSidebarSkinState();
    const darkMode = !isDarkMode;
    if (darkMode) {
      setNavbarVariant(NAVBAR_DARK_VARIANTS[0].value);
      setSidebarSkin(SIDEBAR_DARK_SKINS[0].value);

      addWindowClass('dark-mode');
    } else {
      setNavbarVariant(NAVBAR_LIGHT_VARIANTS[0].value);
      setSidebarSkin(SIDEBAR_LIGHT_SKINS[0].value);

      removeWindowClass('dark-mode');
    }

    setDarkMode(darkMode);
  };
  return [isDarkMode, toggleDarkMode];
}
export type useToggleDarkModeStateResult = [boolean, () => void];

// navbar variant
export const useNavbarVariantState = (): useNavbarVariantStateResult => {
  const [variant, setVariant] = useStore<string>('navbar.variant', initialState.navbarVariant);
  const setNavbarVariant = (navbarVariant: string) => {
    const [isDarkMode] = useToggleDarkModeState();
    if (isDarkMode) {
      setVariant(navbarVariant || NAVBAR_DARK_VARIANTS[0].value);
    } else {
      setVariant(navbarVariant || NAVBAR_LIGHT_VARIANTS[0].value);
    }
  }
  return [variant, setNavbarVariant];
}
export type useNavbarVariantStateResult = [string, (size: string) => void];

// sidebar skin
export const useSidebarSkinState = (): useSidebarSkinStateResult => {
  const [skin, setSkin] = useStore<string>('sidebar.skin', initialState.sidebarSkin);
  const setSidebarSkin = (skinPayload: string) => {
    const [isDarkMode] = useToggleDarkModeState();
    if (isDarkMode) {
      setSkin(skinPayload || SIDEBAR_DARK_SKINS[0].value);
    } else {
      setSkin(skinPayload || SIDEBAR_LIGHT_SKINS[0].value);
    }
  }
  return [skin, setSidebarSkin];
}
export type useSidebarSkinStateResult = [string, (size: string) => void];

