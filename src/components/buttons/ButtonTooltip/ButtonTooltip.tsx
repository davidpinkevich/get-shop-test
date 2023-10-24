import { useState } from 'react';
import { useAppDispatch } from '../../../hooks';
import {
  changeHidden,
  viewTooltip,
  changePlay,
  changeFocus,
  changeTimerView,
} from '../../../redux/slice';
import audioOK from '../../../assets/audio/ok.mp3';

const ButtonTooltip = () => {
  const dispatch = useAppDispatch();
  const [audio] = useState(new Audio(audioOK));

  const handlerButton = () => {
    audio.play();
    dispatch(changeHidden(false));
    dispatch(viewTooltip(false));
    dispatch(changePlay(false));
    dispatch(changeTimerView(true));
    dispatch(changeFocus('1'));
  };

  return (
    <button onClick={handlerButton} className="tooltip__btn">
      OK
    </button>
  );
};

export default ButtonTooltip;
