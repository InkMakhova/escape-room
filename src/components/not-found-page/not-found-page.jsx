import * as S from '../home/home.styled';
import { MainLayout } from '../common/common';
import { PageHeading, PageSubtext, PageTitle, Link } from './components/components';

const NotFoundPage = () => {
  return <MainLayout>
    <S.Main forwardedAs="main">
      <PageHeading>
        <PageSubtext>404</PageSubtext>
        <PageTitle>Page not found</PageTitle>
        <Link />
      </PageHeading>
    </S.Main>
  </MainLayout>
}

export default NotFoundPage;
