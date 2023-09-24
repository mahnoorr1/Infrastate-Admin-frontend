import React, { useState } from 'react';
import appLogo from '../../assets/appLogo.png';
import { 
  SidebarContainer,
  SidebarMenuContainer,
  StyledNavLink,
  LogoContainer,
  LogoOut,
 } from './Sidebar.elements';
import { SlDoc } from 'react-icons/sl';
import { CiHome } from 'react-icons/ci';
import { PiUsers } from 'react-icons/pi';
import { BiMapPin } from 'react-icons/bi';
import { GoCreditCard } from 'react-icons/go';
import { FiHelpCircle } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { RiUserSettingsLine, RiAdminLine } from 'react-icons/ri';


const sidebarData = [
  {
    title: 'Dashboard',
    path: '/Dashboard',
    icon: CiHome,
  },
  {
    title: 'Tracker',
    path: '/tracker',
    icon: BiMapPin,
  },
  {
    title: 'Rules',
    path: '/rules',
    icon: SlDoc,
  },
  {
    title: 'Manage Users',
    icon: RiUserSettingsLine,
    subNav: [
      {
        title: 'Users',
        path: '/users/manageUsers',
        icon: PiUsers,
      },
      {
        title: 'Admins',
        path: '/users/manageAdmins',
        icon: RiAdminLine,
      },
    ],
  },
  {
    title: 'Subscriptions',
    path: '/subscriptions',
    icon: GoCreditCard,
  },
  {
    title: 'Support',
    path: '/support',
    icon: FiHelpCircle,
  },
];

const Sidebar= (props) => {

  const [isActive, setActive] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleClass = (index) => {
    setActive(index);
  };

  const toggleSubMenu = (index) => {
    setActiveSubMenu(activeSubMenu === index ? null : index);
  };

  const navigate = useNavigate();

  const logout = () => {
    navigate('/auth', {
      replace: true,
    });
  };

  return (
    <SidebarContainer act={props.toggle}>
      <SidebarMenuContainer>
        <div>
          <LogoContainer id="item" to="/">
            <img style = {{
              width: '150px'
            }}src={appLogo}></img>
          </LogoContainer>

          {sidebarData.map((item, index) => {
            const strClass = isActive === index ? 'active' : 'Noactive';

            return (
              <div key={index}>
                {item.subNav ? (
                  // Render submenu with toggle
                  <StyledNavLink 
                    to="#"
                    className={strClass}
                    onClick={() => toggleSubMenu(index)}
                  >
                  <item.icon style={{fontSize: '20px', color: 'white'}} />
                    <span>
                      {item.title}
                    </span>
                    <i
                      className={`bx ${
                        activeSubMenu === index
                          ? 'bx-caret-up'
                          : 'bx-caret-right'
                      } nav_icon`}
                    />
                  </StyledNavLink>
                ) : (
                  // Render regular link
                  <StyledNavLink
                    to={item.path}
                    className={strClass}
                    onClick={() => toggleClass(index)}
                  >
                    <item.icon style={{fontSize: '20px', color: 'white'}} />
                    <span>{item.title}</span>
                  </StyledNavLink>
                )}
                {activeSubMenu === index && item.subNav && (
                  // Render subnav links when submenu is open
                  <div style={{ marginLeft: '10px' }}>
                    {item.subNav.map((subItem, subIndex) => (
                      <StyledNavLink
                        to={subItem.path}
                        key={subIndex}
                        className={strClass}
                      >
                        <subItem.icon style={{fontSize: '20px', color: 'white'}} />
                        <span style={{ fontSize: '16px' }}>
                          {subItem.title}
                        </span>
                      </StyledNavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <LogoOut to="auth" onClick={logout}>
          <i className="bx bx-bookmark nav_icon" />
          <span>LogOut</span>
        </LogoOut>
      </SidebarMenuContainer>
    </SidebarContainer>
  );
}

export default Sidebar;
