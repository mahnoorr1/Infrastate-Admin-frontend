import React, { useState } from 'react';
import appLogo from '../../assets/appLogo.png';
import { SidebarContainer, SidebarMenuContainer, StyledNavLink, LogoContainer, LogoOut } from './Sidebar.elements';
import { useNavigate } from 'react-router-dom';

const sidebarData = [
  {
    title: 'Dashboard',
    path: '/Dashboard',
    icon: 'bx bx-grid-alt nav_icon',
  },
  {
    title: 'Tracker',
    path: '/tracker',
    icon: 'bx bx-user nav_icon',
  },
  {
    title: 'Rules',
    path: '/rules',
    icon: 'bx bx-ruler nav_icon',
  },
  {
    title: 'Manage Users',
    icon: 'bx bx-user-plus nav_icon',
    subNav: [
      {
        title: 'Users',
        path: '/users/manageUsers',
        icon: 'bx bx-user nav_icon',
      },
      {
        title: 'Admins',
        path: '/users/manageAdmins',
        icon: 'bx bx-user-check nav_icon',
      },
    ],
  },
  {
    title: 'Subscriptions',
    path: '/subscriptions',
    icon: 'bx bx-user-plus nav_icon',
  },
  {
    title: 'Support',
    path: '/support',
    icon: 'bx bx-support nav_icon',
  },
];

export default function Sidebar(props) {

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
                    <i className={item.icon} />
                    <span style={{ fontWeight: 'bold', fontSize: '18px' }}>
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
                    <i className={item.icon} />
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
                        <i className={subItem.icon} />
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
