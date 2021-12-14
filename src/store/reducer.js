import { createReducer } from '@reduxjs/toolkit';
import { changeType, loadQuests } from './action';
import { Genres } from '../const';

const initialState = {
  quests: [],
  currentType: Genres.All,
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
      });
});

export { reducer };
