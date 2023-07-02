import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(cls.navbar, {}, [className])}>
    <div className={cls.links}>
      <AppLink
        theme={AppLinkTheme.SECONDARY}
        className={cls.mainLink}
        to="/"
      // eslint-disable-next-line i18next/no-literal-string
      >
        Главная
      </AppLink>
      <AppLink
        theme={AppLinkTheme.SECONDARY}
        // eslint-disable-next-line i18next/no-literal-string
        to="/about"
      // eslint-disable-next-line i18next/no-literal-string
      >
        О сайте
      </AppLink>
    </div>
  </div>
);
