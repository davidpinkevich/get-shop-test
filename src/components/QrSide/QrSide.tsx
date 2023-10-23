import QRCode from 'react-qr-code';
import { useAppSelector } from '../../hooks';
import './QrSide.scss';

const QrSide = () => {
  const hidden = useAppSelector((state) => state.infoReducer.panelHidden);
  return (
    <div className={hidden ? 'qr__side' : 'qr__side qr__side-view'}>
      <p className="qr__side-info">Сканируйте QR-код для получения дополнительной информации</p>
      <div className="qr__side-wrapper">
        <QRCode value="Следуй за своей мечтой" size={110} />
      </div>
    </div>
  );
};

export default QrSide;
