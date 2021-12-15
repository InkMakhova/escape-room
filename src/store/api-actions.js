import { loadDetailedQuest, loadQuests } from './action';
import { APIRoute } from '../const';

export const fetchQuestsAction = () =>
  async (dispatch, _getState, api) => {
    const {data} = await api.get(APIRoute.Quests);
    dispatch(loadQuests(data));
  };

export const fetchDetailedQuestAction = (id) =>
  async (dispatch, _getState, api) => {
    await api.get(`${APIRoute.Quests}${id}`)
      .then(({ data }) => {
        const quest = data;
        dispatch(loadDetailedQuest(quest));
      })
  };
