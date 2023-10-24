import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useAppDispatch } from '../../hooks';
import { changeHidden, changePlay, viewTooltip, changeTimerView } from '../../redux/slice';
import './Timer.scss';

const renderTime = (dimension: string, time: number) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div className="time-text">{dimension}</div>
    </div>
  );
};
const getTimeSeconds = (time: number) => (10 - time) | 0;

const Timer = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="timer">
      <CountdownCircleTimer
        isPlaying
        size={140}
        strokeWidth={12}
        colors="#86d3f4"
        duration={10}
        onComplete={() => {
          dispatch(changeHidden(true));
          dispatch(changePlay(true));
          dispatch(viewTooltip(true));
          dispatch(changeTimerView(false));
        }}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>{renderTime('Продолжение', getTimeSeconds(elapsedTime))}</span>
        )}
      </CountdownCircleTimer>
    </div>
  );
};

export default Timer;
