import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { changePersonalData } from '../../../redux/slice';
import image from '../../../assets/icons/check.svg';
import audioCheck from '../../../assets/audio/click.mp3';

const ButtonCheck = () => {
  const dispatch = useAppDispatch();
  const personalData = useAppSelector((state) => state.infoReducer.personalData);
  const [audio] = useState(new Audio(audioCheck));

  const handlerButton = () => {
    audio.play();
    dispatch(changePersonalData(!personalData));
  };
  return (
    <button className="personal__btn" onClick={handlerButton}>
      {personalData && <img src={image} alt="check" />}
    </button>
  );
};

export default ButtonCheck;
