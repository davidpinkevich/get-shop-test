import { useRef } from 'react';
import ButtonNumber from '../buttons/ButtonNumber/ButtonNumber';
import { PANEL } from '../../constants';
import './Side.scss';

export const Side = () => {
  const ref = useRef<HTMLButtonElement | null>(null);
  return (
    <div className="side">
      {PANEL.map((item, index) => {
        return <ButtonNumber ref={ref} key={index} id={item} />;
      })}
    </div>
  );
};

export default Side;
