import { loadDetailedQuest, loadQuests, setIsNotFoundStatus } from './action';
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
        dispatch(setIsNotFoundStatus(false));
        dispatch(loadDetailedQuest(data));
      }).catch(() => {dispatch(setIsNotFoundStatus(true))});
  };

export const submitOrderAction = ({ name, peopleCount, phone, isLegal }, successHandler, errorHandler) =>
  async (dispatch, _getState, api) => {
    await api.post(APIRoute.Orders, { name, peopleCount, phone, isLegal })
      .then(() => {
        successHandler();
        toast('Ваш заказ был успешно отправлен. Мы скоро вам перезвоним!:)', {autoClose: 3000, type: 'success'});
      })
      .catch(() => {
        errorHandler(`При отправке заказа на сервер что-то пошло не так:( Попробуйте отправить позже или позвоните нам!`);
      });
  };
