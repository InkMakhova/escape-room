import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  LoadQuests: 'data/loadQuests',
}

export const loadQuests = createAction(
  ActionType.LoadQuests,
  (quests) => ({
    payload: quests,
  }),
);
