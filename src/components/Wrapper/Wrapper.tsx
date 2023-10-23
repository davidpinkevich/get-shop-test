import VideoPlayer from '../VideoPlayer/VideoPlayer';
import Tooltip from '../Tooltip/Tooltip';
import Side from '../Side/Side';
import QrSide from '../QrSide/QrSide';
import './Wrapper.scss';

const Wrapper = () => {
  return (
    <div className="container">
      <VideoPlayer />
      <Tooltip />
      <Side />
      <QrSide />
    </div>
  );
};

export default Wrapper;
