import { useAppDispatch, useAppSelector } from '../../../hooks';
import { changePlay } from '../../../redux/slice';
import './ButtonPlay.scss';

const ButtonPlay = () => {
  const dispatch = useAppDispatch();
  const play = useAppSelector((state) => state.infoReducer.play);

  return (
    <button className="player__play" onClick={() => dispatch(changePlay(!play))}>
      Смотреть обзор
    </button>
  );
};

export default ButtonPlay;
