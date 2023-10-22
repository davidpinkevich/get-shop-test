import { LOGIC } from '../../constants';
import { TClasses, TDirection } from '../../types';
import cross from '../../assets/icons/cross.svg';

const changeDirection = ({ id, click }: TDirection) => {
  switch (click) {
    case 'ArrowUp':
      return LOGIC[id].ArrowUp;
    case 'ArrowRight':
      return LOGIC[id].ArrowRight;
    case 'ArrowDown':
      return LOGIC[id].ArrowDown;
    case 'ArrowLeft':
      return LOGIC[id].ArrowLeft;
  }
};

const addClassName = ({ id, focus, close }: TClasses) => {
  if (id === focus && !isNaN(Number(id))) {
    return 'button__number-number focus';
  } else if (id === focus && id === 'clear') {
    return 'button__number-clear focus';
  } else if (!isNaN(Number(id))) {
    return 'button__number-number';
  } else if (id === 'clear') {
    return 'button__number-clear';
  } else if (id === focus && id === 'confirm') {
    return 'button__number-confirm focus';
  } else if (id === 'confirm') {
    return 'button__number-confirm';
  } else if (id === focus && id === 'close' && close) {
    return 'button__number-close focus close-animation';
  } else if (id === 'close' && close) {
    return 'button__number-close close-animation';
  } else if (id === 'close' && !close) {
    return 'button__number-close';
  }
};

const contentForButton = (id: string) => {
  switch (id) {
    case 'clear':
      return 'стереть';
    case 'confirm':
      return 'подтвердить номер';
    case 'close':
      return <img src={cross} alt="cross" />;
    default:
      return id;
  }
};

export { changeDirection, addClassName, contentForButton };
