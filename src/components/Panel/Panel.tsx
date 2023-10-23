import { useRef } from 'react';
import { PANEL } from '../../constants';
import ButtonNumber from '../buttons/ButtonNumber/ButtonNumber';
import './Panel.scss';

const Panel = () => {
  const ref = useRef<HTMLButtonElement | null>(null);
  return (
    <div className="side__panel">
      {PANEL.map((item, index) => (
        <ButtonNumber ref={ref} key={index} id={item} />
      ))}
    </div>
  );
};

export default Panel;
