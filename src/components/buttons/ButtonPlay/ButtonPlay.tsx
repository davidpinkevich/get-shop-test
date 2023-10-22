import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { changePlay } from '../../../redux/slice';
import audioPlay from '../../../assets/audio/play.mp3';
import './ButtonPlay.scss';

const ButtonPlay = () => {
  const dispatch = useAppDispatch();
  const play = useAppSelector((state) => state.infoReducer.play);
  const [audio] = useState(new Audio(audioPlay));
  const handlerButton = () => {
    audio.play();
    dispatch(changePlay(!play));
  };

  return (
    <button className="player__play" onClick={handlerButton}>
      Смотреть обзор
    </button>
  );
};

export default ButtonPlay;
