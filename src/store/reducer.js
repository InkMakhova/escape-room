import { createReducer } from '@reduxjs/toolkit';
import { changeType, loadDetailedQuest, loadQuests } from './action';
import { Genres } from '../const';

const initialQuestState = {
  id: 0,
  title: '',
  description: '',
  previewImg: '',
  coverImg: '',
  type: '',
  level: '',
  peopleCount: [],
  duration: 0,
}

const initialState = {
  quests: [],
  currentType: Genres.All,
  currentQuest: initialQuestState,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadQuests, (state, action) => {
      const quests = action.payload;
      state.quests = quests;
    })
    .addCase(changeType, (state, action) => {
        const currentType = action.payload;
        state.currentType = currentType;
      })
    .addCase(loadDetailedQuest, (state, action) => {
        const currentQuest = action.payload;
        state.currentQuest = currentQuest;
      });
});

export { reducer };
