import { PfDropdown, PfImage } from "@profabric/react-components";
import { useCallback, useState } from "react";
import { useAuthState, useGetIdentity, useLogout } from "react-admin";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledSmallUserImage = styled(PfImage)`
  margin-top: 3px;
  --pf-box-shadow: 0 3px 6px #00000029, 0 3px 6px #0000003b !important;
`;

const StyledBigUserImage = styled(PfImage)`
  --pf-box-shadow: 0 3px 6px #00000029, 0 3px 6px #0000003b !important;
  --pf-border: 3px solid #fff3;
`;

const UserHeader = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 175px;
  padding: 10px;
  text-align: center;
  img {
    z-index: 5;
    height: 90px;
    width: 90px;
    border: 3px solid;
    border-color: transparent;
    border-color: rgba(255, 255, 255, 0.2);
  }
  p {
    z-index: 5;
    font-size: 17px;
    margin-top: 10px;
    small {
      display: block;
      font-size: 12px;
    }
  }
`;

const UserBody = styled.li`
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border-bottom: 1px solid #495057;
  border-top: 1px solid #dee2e6;
  padding: 15px;
  &::after {
    display: block;
    clear: both;
    content: '';
  }

  @media (min-width: 576px) {
    a {
      background: #ffffff !important;
      color: #495057 !important;
    }
  }
`;

const UserFooter = styled.li`
  background-color: #f8f9fa;
  padding: 10px;
  &::after {
    display: block;
    clear: both;
    content: '';
  }
  .btn-default {
    color: #6c757d;
  }

  @media (min-width: 576px) {
    .btn-default:hover {
      background-color: #f8f9fa;
    }
  }
`;

export const StyledDropdown = styled(PfDropdown)`
  border: none;
  width: fit-content;
  --pf-dropdown-menu-min-width: 280px;

  .dropdown-item {
    padding: 0.5rem 1rem;
  }

  .text-sm {
    margin-bottom: 0;
  }
  .dropdown-divider {
    margin: 0;
  }
`;

export default function UserDropdown() {
    const navigate = useNavigate();
    const {data: identity, isLoading, error} = useGetIdentity();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const {authenticated} = useAuthState();
    const logout = useLogout();

    const navigateToProfile = (event: any) => {
        event.preventDefault();
        setDropdownOpen(false);
        navigate('/profile');
    };

    const handleLogout = useCallback(() => {
        logout()
            .then(() => {
                setDropdownOpen(false);
            });
    },[logout]);

    if (!authenticated) return null;

    return (
        <StyledDropdown isOpen={dropdownOpen} hideArrow>
            <div className="d-flex justify-content-center align-items-center" slot="button">
                <StyledSmallUserImage
                    src={identity?.avatar}
                    fallbackSrc="/img/default-profile.png"
                    alt="User"
                    width={25}
                    height={25}
                    rounded
                />
                <span className="ml-2 text-nowrap d-none d-sm-inline-block">{identity?.fullName}</span>
            </div>
            <div slot="menu" className="">
                <UserHeader className="bg-primary">
                    <StyledBigUserImage
                        src={identity?.avatar}
                        fallbackSrc="/img/default-profile.png"
                        alt="User"
                        width={90}
                        height={90}
                        rounded
                    />
                    <p>
                        {identity?.fullName}
                        <small>
                            <span>{identity?.username}</span>
                        </small>
                    </p>
                </UserHeader>
                {/* <UserBody></UserBody> */}
                <UserFooter>
                    <button
                        type="button"
                        className="btn btn-default btn-flat"
                        onClick={navigateToProfile}
                    >Profil</button>
                    <button
                        type="button"
                        className="btn btn-danger btn-flat float-right"
                        onClick={handleLogout}
                    >Logout</button>
                </UserFooter>
            </div>
        </StyledDropdown>
    );
}