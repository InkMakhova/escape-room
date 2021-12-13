import { loadQuests } from './action';
import { APIRoute } from '../const';

export const fetchQuestsAction = () =>
  async (dispatch, _getState, api) => {
  const {data} = await api.get(APIRoute.Quests);
  dispatch(loadQuests(data));
};
