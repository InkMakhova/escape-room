import { useEffect, useState } from 'react';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { useSelector } from 'react-redux';
import { getDetailedQuest, getIsNotFoundStatus } from '../../store/selectors';
import { useParams } from 'react-router-dom';
import NotFoundPage from '../not-found-page/not-found-page';
import { CatalogTabs, Genres, QuestLevels } from '../../const';
import { ToastContainer } from 'react-toastify';
import { store } from '../../index';
import { fetchDetailedQuestAction } from '../../store/api-actions';

const DetailedQuest = () => {
  const {id} = useParams();

  const isNotFoundPage = useSelector(getIsNotFoundStatus);

  useEffect(() => {store.dispatch(fetchDetailedQuestAction(Number(id)));}, [id, isNotFoundPage]);

  const quest = useSelector(getDetailedQuest);

  const {
    coverImg,
    title,
    type,
    duration,
    level,
    peopleCount,
    description
  } = quest;

  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  const closeModal = () => {
    setIsBookingModalOpened(false);
  }

  const getGenre = (genre) => {
    if (genre === Genres.SciFi) {
      return genre;
    }
    return CatalogTabs[`${genre.charAt(0).toUpperCase()}${genre.slice(1)}`];
  };

  const getLevel = (level) => QuestLevels[`${level.charAt(0).toUpperCase()}${level.slice(1)}`];

  if (isNotFoundPage) {
    return <NotFoundPage />
  } else if (quest.id !== Number(id)) {
    return <div />
  }
  return (
    <>
      <MainLayout>
        <S.Main>
          <S.PageImage
            src={`/${coverImg}`}
            alt={`Квест ${title}`}
            width="1366"
            height="768"
          />
          <S.PageContentWrapper>
            <S.PageHeading>
              <S.PageTitle>{title}</S.PageTitle>
              <S.PageSubtitle>{getGenre(type)}</S.PageSubtitle>
            </S.PageHeading>

            <S.PageDescription>
              <S.Features>
                <S.FeaturesItem>
                  <IconClock width="20" height="20" />
                  <S.FeatureTitle>{`${duration} мин`}</S.FeatureTitle>
                </S.FeaturesItem>
                <S.FeaturesItem>
                  <IconPerson width="19" height="24" />
                  <S.FeatureTitle>{`${peopleCount[0]}–${peopleCount[peopleCount.length - 1]} чел`}</S.FeatureTitle>
                </S.FeaturesItem>
                <S.FeaturesItem>
                  <IconPuzzle width="24" height="24" />
                  <S.FeatureTitle>{getLevel(level)}</S.FeatureTitle>
                </S.FeaturesItem>
              </S.Features>

              <S.QuestDescription>
                {description}
              </S.QuestDescription>

              <S.QuestBookingBtn onClick={onBookingBtnClick}>
                Забронировать
              </S.QuestBookingBtn>
            </S.PageDescription>
          </S.PageContentWrapper>

          {isBookingModalOpened && <BookingModal onCloseModal={closeModal} />}
        </S.Main>
      </MainLayout>
      <ToastContainer
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={false}
        closeButton={false}
      />
    </>
  );
};

export default DetailedQuest;
