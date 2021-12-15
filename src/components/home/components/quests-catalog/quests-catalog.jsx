import QuestList from './components/quest-list/quest-list';
import { useDispatch, useSelector } from 'react-redux';
import { Genres } from '../../../../const';
import { getQuests } from '../../../../store/selectors';
import QuestTypes from './components/quest-types/quest-types';
import { getCurrentType } from '../../../../store/selectors';
import { useEffect } from 'react';
import { changeType } from '../../../../store/action';

const QuestsCatalog = () => {
  const quests = useSelector(getQuests);
  const currentType = useSelector(getCurrentType);

  const dispatch = useDispatch();

  useEffect(() => {dispatch(changeType(Genres.All))}, [dispatch]);

  const getQuestList = (quests) => {
    if (currentType === Genres.All) {
      return quests;
    }
    const filteredQuests = quests.filter((quest) => quest.type === currentType);

    return filteredQuests && filteredQuests.length > 0 ? filteredQuests : [];
  }

  return (
    <>
      <QuestTypes />

      <QuestList quests={quests && quests.length > 0 ? getQuestList(quests) : []}/>
    </>
  )};

export default QuestsCatalog;
