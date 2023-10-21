import { LOGIC } from '../../constants';

const changeDirection = ({ id, click }: { id: string; click: string }) => {
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

export { changeDirection };
