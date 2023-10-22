import { LOGIC } from '../../constants';
import { TClasses, TDirection } from '../../types';

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

const addClassName = ({ id, focus }: TClasses) => {
  if (id === focus && !isNaN(Number(id))) {
    return 'button__number-number focus';
  } else if (id === focus && id === 'clear') {
    return 'button__number-clear focus';
  } else if (!isNaN(Number(id))) {
    return 'button__number-number';
  } else if (id === 'clear') {
    return 'button__number-clear';
  }
};

export { changeDirection, addClassName };
