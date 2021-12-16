import { loadDetailedQuest, loadQuests } from './action';
import { APIRoute } from '../const';
import { toast } from 'react-toastify';

export const fetchQuestsAction = () =>
  async (dispatch, _getState, api) => {
    const {data} = await api.get(APIRoute.Quests);
    dispatch(loadQuests(data));
  };

export const fetchDetailedQuestAction = (id) =>
  async (dispatch, _getState, api) => {
    await api.get(`${APIRoute.Quests}${id}`)
      .then(({ data }) => {
        dispatch(loadDetailedQuest(data));
      })
  };

export const submitOrderAction = ({ id, name, peopleCount, phone, isLegal }, successHandler, errorHandler) =>
  async (dispatch, _getState, api) => {
    await api.post(APIRoute.Orders, { name, peopleCount, phone, isLegal })
      .then(() => {
        successHandler();
        toast('Your order has been successfully sent. We\'ll contact you soon!:)', {autoClose: 4000, type: 'success'});
      })
      .catch((data) => {
        errorHandler(data.response.data.messages);
      });
  };
