import { useAppSelector, useAppDispatch } from '../../hooks';
import { changeTimerView } from '../../redux/slice';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import Tooltip from '../Tooltip/Tooltip';
import Side from '../Side/Side';
import QrSide from '../QrSide/QrSide';
import Header from '../Header/Header';
import AcceptOrder from '../AcceptOrder/AcceptOrder';
import Timer from '../Timer/Timer';
import './Wrapper.scss';

const Wrapper = () => {
  const dispatch = useAppDispatch();
  const valid = useAppSelector((state) => state.infoReducer.validNumber);
  const tooltip = useAppSelector((state) => state.infoReducer.tooltip);
  const panelHidden = useAppSelector((state) => state.infoReducer.tooltip);
  const timer = useAppSelector((state) => state.infoReducer.timer);

  const handlerMouse = () => {
    if (!panelHidden) dispatch(changeTimerView(false));
  };
  return (
    <>
      <div className="container" onClick={handlerMouse}>
        <Header />
        <VideoPlayer />
        {tooltip && <Tooltip />}
        <Side />
        <QrSide />
        {valid && <AcceptOrder />}
        {timer && <Timer />}
      </div>
    </>
  );
};

export default Wrapper;
