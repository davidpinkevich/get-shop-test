import QRCode from 'react-qr-code';
import ButtonTooltip from '../buttons/ButtonTooltip/ButtonTooltip';
import './Tooltip.scss';

const Tooltip = () => {
  return (
    <div className="tooltip">
      <h2 className="tooltip__header">Исполните свою мечту. Выберите квартиру в новом районе!</h2>
      <div className="tooltip__qr">
        <QRCode size={126} value="Хочу вместе с вами создавать прекрасные проекты" />
      </div>
      <p className="tooltip__info">Сканируйте QR-код или нажмите ОК</p>
      <ButtonTooltip />
    </div>
  );
};

export default Tooltip;
