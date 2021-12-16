import { MainLayout, PageTitle } from 'components/common/common';
import * as S from './stub-page.styled';

const StubPage = () => (
  <MainLayout>
    <S.Main>
      <S.ContentWrapper>
        <S.PageHeading>
          <PageTitle>Страница в разработке</PageTitle>
        </S.PageHeading>

      </S.ContentWrapper>
    </S.Main>
  </MainLayout>
);

export default StubPage;
