import { questsData } from './quest-data';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({quests: questsData});
