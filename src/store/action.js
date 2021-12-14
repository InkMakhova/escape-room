import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  LoadQuests: 'data/loadQuests',
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
