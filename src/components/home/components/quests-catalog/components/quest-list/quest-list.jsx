import QuestCard from '../quest-card/quest-card';
import * as S from '../../quests-catalog.styled';

const QuestList = (quests) => {
  const questCards = quests.forEach((quest) => <QuestCard quest={quest} />);

  return (
    <S.QuestsList>
      {questCards}
    </S.QuestsList>
  );
};

export default QuestList;
