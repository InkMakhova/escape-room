import logo from 'assets/img/logo.svg';
import * as S from './header.styled';
import { AppRoute, Pages } from '../../../const';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <S.StyledHeader>
      <S.HeaderWrapper>
        <S.LogoLink to={AppRoute.Root}>
          <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
        </S.LogoLink>

        <S.Navigation>
          <S.Links>
            <S.LinkItem>
              <S.Link
                $isActiveLink={location.pathname === AppRoute.Root}
                to={AppRoute.Root}
              >
                {Pages.Quests}
              </S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link
                $isActiveLink={location.pathname === AppRoute.NewGamers}
                to={AppRoute.NewGamers}
              >{Pages.NewGamers}
              </S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link
                $isActiveLink={location.pathname === AppRoute.Reviews}
                to={AppRoute.Reviews}
              >
                {Pages.Reviews}
              </S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link
                $isActiveLink={location.pathname === AppRoute.Special}
                to={AppRoute.Special}
              >
                {Pages.Special}
              </S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link
                $isActiveLink={location.pathname === AppRoute.Contacts}
                to={AppRoute.Contacts}
              >
                {Pages.Contacts}
              </S.Link>
            </S.LinkItem>
          </S.Links>
        </S.Navigation>
        <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader>
  )
};

export default Header;
