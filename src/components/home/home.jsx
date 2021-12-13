import {
  MainLayout,
  PageTitle,
  PageHeading,
  PageSubtext,
} from 'components/common/common';
import { QuestsCatalog } from './components/components';
import * as S from './home.styled';

const quests = [{
    id: 1,
    title: 'Склеп',
    description: 'Средневековое кладбище таит в себе много страшных тайн. Местные жители говорят, что в склепе похоронен граф вампир, который по ночам выходит на охоту, чтобы испить человеческой крови. Через час солнце опустится за горизонт, успеете ли вы убить вампира и выбраться из склепа?',
    previewImg: 'img/preview-sklep.jpg',
    coverImg: 'img/cover-sklep.jpg',
    type: 'horror',
    level: 'hard',
    peopleCount: [2, 5],
    duration: 120,
  }];

const HomePage = () => (
  <MainLayout>
    <S.Main forwardedAs="main">
      <PageHeading>
        <PageTitle>Выберите тематику</PageTitle>
        <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
      </PageHeading>
      <QuestsCatalog quests={quests}/>
    </S.Main>
  </MainLayout>
);

export default HomePage;
