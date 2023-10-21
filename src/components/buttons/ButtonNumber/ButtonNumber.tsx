import React, { forwardRef, useEffect } from 'react';
import { changeFocus, changeNumber } from '../../../redux/slice';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { changeDirection } from '../../utils';

import './ButtonNumber.scss';

const ButtonNumber = forwardRef(
  ({ id }: { id: string }, ref: React.ForwardedRef<HTMLButtonElement>) => {
    const focusButton = useAppSelector((state) => state.infoReducer.focusButton);
    useEffect(() => {
      if (ref !== null && 'current' in ref) ref.current?.focus();
    }, [ref, focusButton]);
    const dispatch = useAppDispatch();

    const handlerButton = (event: React.KeyboardEvent<HTMLButtonElement>) => {
      event.preventDefault();
      if (event.code === 'Enter') {
        dispatch(changeNumber(id));
      } else if (
        event.code === 'ArrowUp' ||
        event.code === 'ArrowRight' ||
        event.code === 'ArrowDown' ||
        event.code === 'ArrowLeft'
      ) {
        dispatch(changeFocus(changeDirection({ id, click: event.code })));
      }
    };

    const handlerMouse = () => {
      dispatch(changeFocus(id));
      dispatch(changeNumber(id));
    };

    return (
      <button
        ref={id === focusButton ? ref : null}
        className={focusButton === id ? 'button__number focus' : 'button__number'}
        onKeyDown={handlerButton}
        onClick={handlerMouse}
      >
        {id}
      </button>
    );
  }
);

export default ButtonNumber;
