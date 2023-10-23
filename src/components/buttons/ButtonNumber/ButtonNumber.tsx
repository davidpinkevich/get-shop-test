import React, { forwardRef } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { useAppSelector } from '../../../hooks';
import { addClassName, contentForButton, countNumbers } from '../../../utils';
import useLogics from './useLogics';

import './ButtonNumber.scss';

const ButtonNumber = forwardRef(
  ({ id }: { id: string }, ref: React.ForwardedRef<HTMLButtonElement>) => {
    const focusButton = useAppSelector((state) => state.infoReducer.focusButton);
    const phone = useAppSelector((state) => state.infoReducer.phoneNumber);
    const personalData = useAppSelector((state) => state.infoReducer.personalData);
    const hidden = useAppSelector((state) => state.infoReducer.panelHidden);
    const loading = useAppSelector((state) => state.infoReducer.loading);

    const { handlerButton, handlerMouse } = useLogics(id, ref);

    return (
      <button
        disabled={
          id === 'confirm' && (countNumbers(phone) <= 10 || !personalData || loading) ? true : false
        }
        ref={id === focusButton ? ref : null}
        className={addClassName({ id, focus: focusButton, close: hidden ? false : true })}
        onKeyDown={handlerButton}
        onClick={handlerMouse}
      >
        {contentForButton(id)}
        {id === 'confirm' && (
          <BeatLoader
            style={{ position: 'absolute', right: '60px' }}
            size={8}
            loading={loading}
            color="#86D3F4"
          />
        )}
      </button>
    );
  }
);

export default ButtonNumber;
