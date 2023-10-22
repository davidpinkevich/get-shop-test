import React, { useEffect, useState } from 'react';
import audioClose from '../../../assets/audio/open.mp3';
import audioClick from '../../../assets/audio/click.mp3';
import {
  changeFocus,
  changeNumber,
  changeHidden,
  changePlay,
  viewTooltip,
} from '../../../redux/slice';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { changeDirection } from '../../../utils';

const useLogics = (id: string, ref: React.ForwardedRef<HTMLButtonElement>) => {
  const [audio] = useState(new Audio(id === 'close' ? audioClose : audioClick));
  const focusButton = useAppSelector((state) => state.infoReducer.focusButton);
  useEffect(() => {
    if (ref !== null && 'current' in ref) ref.current?.focus();
  }, [ref, focusButton]);
  const dispatch = useAppDispatch();
  const handlerButton = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (event.code === 'Enter') {
      audio.play();
      dispatch(changeNumber(id));
      if (id === 'close') {
        dispatch(changeHidden(true));
        dispatch(changePlay(true));
        dispatch(viewTooltip(true));
      }
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
    audio.play();
    dispatch(changeFocus(id));
    dispatch(changeNumber(id));
    if (id === 'close') {
      dispatch(changeHidden(true));
      dispatch(changePlay(true));
      dispatch(viewTooltip(true));
    }
  };
  return { handlerButton, handlerMouse };
};

export default useLogics;
