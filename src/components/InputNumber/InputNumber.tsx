import { InputMask } from '@react-input/mask';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addPhoneInput, changeValidNumber } from '../../redux/slice';
import './InputNumber.scss';

const InputNumber = () => {
  const dispatch = useAppDispatch();
  const phone = useAppSelector((state) => state.infoReducer.phoneNumber);
  const handlerInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(addPhoneInput(event.target.value));
    dispatch(changeValidNumber());
  };
  return (
    <InputMask
      className="side__number"
      mask="+7(___)___-__-__"
      showMask
      value={phone}
      onChange={handlerInput}
      replacement={{ _: /\d/ }}
    />
  );
};

export default InputNumber;
