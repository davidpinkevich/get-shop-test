import { useAppSelector } from '../../hooks';
import InputNumber from '../InputNumber/InputNumber';
import Panel from '../Panel/Panel';
import PersonalData from '../PersonalData/PersonalData';
import './Side.scss';

export const Side = () => {
  const hidden = useAppSelector((state) => state.infoReducer.panelHidden);
  return (
    <div className={hidden ? 'side' : 'side view'}>
      <h2 className="side__title">Введите ваш номер мобильного телефона</h2>
      <InputNumber />
      <p className="side__info">и с Вами свяжется наш менеждер для дальнейшей консультации</p>
      <Panel />
      <PersonalData />
    </div>
  );
};

export default Side;
