import React, { useEffect, useState } from 'react';
import { deletePhone, changeValidNumber, checkValid } from '../../../redux/slice';
import audioClose from '../../../assets/audio/open.mp3';
import audioClick from '../../../assets/audio/click.mp3';
import {
  changeFocus,
  changePhone,
  changeHidden,
  changePlay,
  viewTooltip,
} from '../../../redux/slice';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { changeDirection } from '../../../utils';

const useLogics = (id: string, ref: React.ForwardedRef<HTMLButtonElement>) => {
  const [audio] = useState(new Audio(id === 'close' ? audioClose : audioClick));
  const focusButton = useAppSelector((state) => state.infoReducer.focusButton);
  const phone = useAppSelector((state) => state.infoReducer.phoneNumber);
  useEffect(() => {
    if (ref !== null && 'current' in ref) ref.current?.focus();
  }, [ref, focusButton]);
  const dispatch = useAppDispatch();
  const handlerButton = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (event.code === 'Enter') {
      audio.play();
      dispatch(changePhone(id));
      if (id === 'close') {
        dispatch(changeHidden(true));
        dispatch(changePlay(true));
        dispatch(viewTooltip(true));
      } else if (id === 'confirm') {
        dispatch(checkValid(phone));
      } else if (id === 'clear') {
        dispatch(changeValidNumber());
      }
    } else if (
      event.code === 'ArrowUp' ||
      event.code === 'ArrowRight' ||
      event.code === 'ArrowDown' ||
      event.code === 'ArrowLeft'
    ) {
      dispatch(changeFocus(changeDirection({ id, click: event.code })));
    } else if (event.code === 'Backspace') {
      dispatch(changeValidNumber());
      dispatch(deletePhone());
    }
  };
  const handlerMouse = () => {
    audio.play();
    dispatch(changeFocus(id));
    dispatch(changePhone(id));
    if (id === 'close') {
      dispatch(changeHidden(true));
      dispatch(changePlay(true));
      dispatch(viewTooltip(true));
    } else if (id === 'confirm') {
      dispatch(checkValid(phone));
    } else if (id === 'clear') {
      dispatch(changeValidNumber());
    }
  };
  return { handlerButton, handlerMouse };
};

export default useLogics;
