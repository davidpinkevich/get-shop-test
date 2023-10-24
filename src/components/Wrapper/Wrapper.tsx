import { useAppSelector } from '../../hooks';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import Tooltip from '../Tooltip/Tooltip';
import Side from '../Side/Side';
import QrSide from '../QrSide/QrSide';
import Header from '../Header/Header';
import AcceptOrder from '../AcceptOrder/AcceptOrder';
import './Wrapper.scss';

const Wrapper = () => {
  const valid = useAppSelector((state) => state.infoReducer.validNumber);
  const tooltip = useAppSelector((state) => state.infoReducer.tooltip);
  return (
    <>
      <Header />
      <div className="container">
        <VideoPlayer />
        {tooltip && <Tooltip />}
        <Side />
        <QrSide />
        {valid && <AcceptOrder />}
      </div>
    </>
  );
};

export default Wrapper;
