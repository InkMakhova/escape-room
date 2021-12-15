import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  LoadQuests: 'data/loadQuests',
  LoadDetailedQuest: 'data/loadDetailedQuest',
  RedirectToRoute: 'data/redirectToRoute',
  ChangeType: 'catalog/changeType'
}

export const loadQuests = createAction(
  ActionType.LoadQuests,
  (quests) => ({
    payload: quests,
  }),
);

export const changeType = createAction(
  ActionType.ChangeType,
  (type) => ({
    payload: type,
  }),
);

export const loadDetailedQuest = createAction(
  ActionType.LoadDetailedQuest,
  (quest) => ({
    payload: quest,
  }),
);
