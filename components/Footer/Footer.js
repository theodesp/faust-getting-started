import classNames from 'classnames/bind';
import { Container, NavigationMenu } from '../../components';
import styles from './Footer.module.scss';

import { useAuth } from '@faustwp/core';

export function AuthenticatedView() {
  return <>My authenticated content</>;
}

let cx = classNames.bind(styles);

export default function Footer({ title, menuItems }) {
  const { isAuthenticated, isReady, loginUrl } = useAuth();
  const year = new Date().getFullYear();

  return (
    <footer className={cx('component')}>
      <Container>
        <NavigationMenu menuItems={menuItems} />
        <p className={cx('copyright')}>{`${title} © ${year}. Powered by WordPress.`}</p>
        {isAuthenticated === true ? <AuthenticatedView />: null}
      </Container>
    </footer>
  );
}
