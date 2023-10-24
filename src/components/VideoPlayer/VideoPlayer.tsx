import ReactPlayer from 'react-player';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { viewTooltip } from '../../redux/slice';
import view from '../../assets/videos/view.mp4';
import ButtonPlay from '../buttons/ButtonPlay/ButtonPlay';
import { TDataVideo } from '../../types';

const VideoPlayer = () => {
  const dispatch = useAppDispatch();
  const play = useAppSelector((state) => state.infoReducer.play);
  const panelHidden = useAppSelector((state) => state.infoReducer.panelHidden);

  return (
    <div className="player">
      <ReactPlayer
        url={view}
        playing={play}
        width={1280}
        height={720}
        progressInterval={10}
        style={{ margin: '0 auto' }}
        onProgress={(data: TDataVideo) => {
          if (data.playedSeconds >= 5 && data.playedSeconds <= 5.05) dispatch(viewTooltip(true));
        }}
      />
      {!play && panelHidden && <ButtonPlay />}
    </div>
  );
};

export default VideoPlayer;
