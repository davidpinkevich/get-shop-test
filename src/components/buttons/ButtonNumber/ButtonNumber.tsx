import React, { forwardRef } from 'react';
import { useAppSelector } from '../../../hooks';
import { addClassName, contentForButton } from '../../utils';
import useLogics from './useLogics';

import './ButtonNumber.scss';

const ButtonNumber = forwardRef(
  ({ id }: { id: string }, ref: React.ForwardedRef<HTMLButtonElement>) => {
    const focusButton = useAppSelector((state) => state.infoReducer.focusButton);
    const { handlerButton, handlerMouse } = useLogics(id, ref);
    const hidden = useAppSelector((state) => state.infoReducer.panelHidden);

    return (
      <button
        ref={id === focusButton ? ref : null}
        className={addClassName({ id, focus: focusButton, close: hidden ? false : true })}
        onKeyDown={handlerButton}
        onClick={handlerMouse}
      >
        {contentForButton(id)}
      </button>
    );
  }
);

export default ButtonNumber;
