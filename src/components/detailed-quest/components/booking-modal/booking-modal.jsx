import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitOrderAction } from '../../../../store/api-actions';

const BookingModal = (props) => {
  const { onCloseModal } = props;

  const [userName, setUserName] = useState('');
  const [userPhoneNumber, setUserPhoneNumber] = useState('');
  const [peopleNumber, setPeopleNumber] = useState(1);
  const [isLegal, setIsLegal] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);
  const [nameError, setNameError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [countPeopleError, setCountPeopleError] = useState('');

  const dispatch = useDispatch();

  const onSubmit = ({ name, peopleCount, phone, isLegal }, successHandler, errorHandler) => {
    dispatch(submitOrderAction({ name, peopleCount, phone, isLegal }, successHandler, errorHandler));
  };

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn
          onClick={() => onCloseModal()}
        >
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm
          action="https://echo.htmlacademy.ru"
          method="post"
          id="booking-form"
          onSubmit={(evt) => {
            evt.preventDefault();
            onSubmit({
              name: userName,
              peopleCount: peopleNumber,
              phone: userPhoneNumber,
              isLegal: isLegal,
            }, onCloseModal,
              (error) => {
              setErrorMessage(error)
            })
          }}
        >
          {errorMessage !== '' ? <p style={{color: 'red', margin: '0'}}>{errorMessage}</p> : ''}
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
            <S.BookingInput
              type="text"
              id="booking-name"
              name="booking-name"
              placeholder="Имя"
              pattern="^[а-яА-ЯёЁa-zA-Z ]{2,20}$"
              required
              onChange={({target}) => {
                setNameError('');
                if (!target.value.match(/^[а-яА-ЯёЁa-zA-Z ]{2,20}/)) {
                  setNameError('Имя должно содержать буквы (2-20 симв.)');
                }
                setUserName(target.value);
              }}
            />
            {nameError !== '' ? <p style={{color: 'orange', margin: '0'}}>{nameError}</p> : ''}
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">
              Контактный телефон
            </S.BookingLabel>
            <S.BookingInput
              type="tel"
              id="booking-phone"
              name="booking-phone"
              placeholder="Телефон"
              pattern="^[0-9]{10,10}$"
              required
              onChange={({target}) => {
                setPhoneNumberError('');
                if (!target.value.match(/^[0-9]{10,10}$/)) {
                  setPhoneNumberError('Номер телефона должен состоять из 10 цифр');
                }
                setUserPhoneNumber(target.value);
              }}
            />
            {phoneNumberError !== '' ? <p style={{color: 'orange', margin: '0'}}>{phoneNumberError}</p> : ''}
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">
              Количество участников
            </S.BookingLabel>
            <S.BookingInput
              type="number"
              id="booking-people"
              name="booking-people"
              placeholder="Количество участников"
              pattern="^[1-9]{1,2}$"
              required
              onChange={({target}) => {
                setCountPeopleError('');
                if (!target.value.match(/^[0-9]/) || Number(target.value) < 1 || Number(target.value) > 15) {
                  setCountPeopleError('Количество участников не может быть менее 1 и более 15');
                }
                setPeopleNumber(Number(target.value));
              }}
            />
            {countPeopleError !== '' ? <p style={{color: 'orange', margin: '0'}}>{countPeopleError}</p> : ''}
          </S.BookingField>
          <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              type="checkbox"
              id="booking-legal"
              name="booking-legal"
              required
              onChange={({target}) => {
                setIsLegal(target.checked);
              }}
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
                Я согласен с{' '}
                <S.BookingLegalLink href="#">
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  )
};

export default BookingModal;
