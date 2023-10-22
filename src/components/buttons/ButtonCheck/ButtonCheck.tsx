import { useAppDispatch, useAppSelector } from '../../../hooks';
import { changePersonalData } from '../../../redux/slice';
import image from '../../../assets/icons/check.svg';

const ButtonCheck = () => {
  const dispatch = useAppDispatch();
  const personalData = useAppSelector((state) => state.infoReducer.personalData);

  const handlerButton = () => {
    dispatch(changePersonalData(!personalData));
  };
  return (
    <button className="personal__btn" onClick={handlerButton}>
      {personalData && <img src={image} alt="check" />}
    </button>
  );
};

export default ButtonCheck;
