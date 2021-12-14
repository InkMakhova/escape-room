import * as S from '../../quests-catalog.styled';
import { Genres, CatalogTabs } from '../../../../../../const';
import { ReactComponent as IconAllQuests } from '../../../../../../assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from '../../../../../../assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from '../../../../../../assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from '../../../../../../assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from '../../../../../../assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from '../../../../../../assets/img/icon-scifi.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentType } from '../../../../../../store/selectors';
import { changeType } from '../../../../../../store/action';

const QuestTypes = () => {
  const currentType = useSelector(getCurrentType);

  const dispatch = useDispatch();

  const onChangeType = (type) => {
    dispatch(changeType(type));
  };

  return (
    <S.Tabs>
      <S.TabItem>
        <S.TabBtn
          isActive={currentType === Genres.All}
          onClick={() => {onChangeType(Genres.All);}}
        >
          <IconAllQuests />
          <S.TabTitle>{CatalogTabs.All}</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn
          isActive={currentType === Genres.Adventures}
          onClick={() => {onChangeType(Genres.Adventures);}}
        >
          <IconAdventures />
          <S.TabTitle>{CatalogTabs.Adventures}</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn
          isActive={currentType === Genres.Horror}
          onClick={() => {onChangeType(Genres.Horror);}}
        >
          <IconHorrors />
          <S.TabTitle>{CatalogTabs.Horror}</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn
          isActive={currentType === Genres.Mystic}
          onClick={() => {onChangeType(Genres.Mystic);}}
        >
          <IconMystic />
          <S.TabTitle>{CatalogTabs.Mystic}</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn
          isActive={currentType === Genres.Detective}
          onClick={() => {onChangeType(Genres.Detective);}}
        >
          <IconDetective />
          <S.TabTitle>{CatalogTabs.Detective}</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn
          isActive={currentType === Genres.SciFi}
          onClick={() => {onChangeType(Genres.SciFi);}}
        >
          <IconScifi />
          <S.TabTitle>{CatalogTabs.SciFi}</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>
    </S.Tabs>
  );
}

export default QuestTypes;
