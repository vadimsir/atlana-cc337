import { NavLink } from 'react-router-dom';

import { routes } from '../../../../routes';

import styles from './index.module.scss';

const Header = (): JSX.Element => (
  <header className={styles.wrapper}>
    <nav>
      {routes.filter((route) => !route.hideInMenu).map((route) => (
        <NavLink key={route.bind.path} to={route.bind.path || '/'} className={styles.navLink}>
          {route.name}
        </NavLink>
      ))}
    </nav>
  </header>
);

export default Header;
