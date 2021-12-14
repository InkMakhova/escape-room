import { createReducer } from '@reduxjs/toolkit';
import { loadQuests } from './action';

const initialState = {
  quests: [],
};

const questsData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadQuests, (state, action) => {
      const quests = action.payload;
      state.quests = quests;
    })
});

export { questsData };
