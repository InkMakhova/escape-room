import * as S from '../../quests-catalog.styled';
import { ReactComponent as IconPerson } from '../../../../../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../../../../../assets/img/icon-puzzle.svg';
import { AppRoute, QuestCardSizes } from '../../../../../../const';

const QuestCard = (props) => {
  const { quest } = props;
  const { id, title, previewImg, level, peopleCount } = quest;

  return (
    <S.QuestItem>
      <S.QuestItemLink to={`${AppRoute.Quest}/${id}`}>
        <S.Quest>
          <S.QuestImage
            src={previewImg}
            width={QuestCardSizes.Width}
            height={QuestCardSizes.Height}
            alt={`квест ${title}`}
          />

          <S.QuestContent>
            <S.QuestTitle>{title}</S.QuestTitle>

            <S.QuestFeatures>
              <S.QuestFeatureItem>
                <IconPerson />
                {`${peopleCount[0]}–${peopleCount[peopleCount.length-1]} чел`}
              </S.QuestFeatureItem>
              <S.QuestFeatureItem>
                <IconPuzzle />
                {level}
              </S.QuestFeatureItem>
            </S.QuestFeatures>
          </S.QuestContent>
        </S.Quest>
      </S.QuestItemLink>
    </S.QuestItem>
  );
};

export default QuestCard;
