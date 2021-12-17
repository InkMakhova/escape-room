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
      state.quests = action.payload;
    })
    .addCase(changeType, (state, action) => {
        state.currentType = action.payload;
      })
    .addCase(loadDetailedQuest, (state, action) => {
        state.currentQuest = action.payload;
      });
});

export { reducer };
