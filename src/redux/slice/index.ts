import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TInitialState = {
  tooltip: boolean;
  play: boolean;
  panelHidden: boolean;
  personalData: boolean;
  focusButton: string | null;
  phoneNumber: Array<string>;
};

const initialState: TInitialState = {
  tooltip: false,
  play: false,
  panelHidden: true,
  personalData: false,
  focusButton: null,
  phoneNumber: [],
};

const infoSlice = createSlice({
  name: 'info',
  initialState: initialState,
  reducers: {
    viewTooltip(state, action: PayloadAction<boolean>) {
      state.tooltip = action.payload;
    },
    changePlay(state, action: PayloadAction<boolean>) {
      state.play = action.payload;
    },
    changeHidden(state, action: PayloadAction<boolean>) {
      state.panelHidden = action.payload;
    },
    changePersonalData(state, action: PayloadAction<boolean>) {
      state.personalData = action.payload;
    },
    changeFocus(state, action: PayloadAction<string | undefined | null>) {
      if (typeof action.payload === 'string') {
        state.focusButton = action.payload;
      }
    },
    changeNumber(state, action: PayloadAction<string>) {
      if (action.payload === 'clear') {
        state.phoneNumber = [];
      } else {
        state.phoneNumber.push(action.payload);
      }
    },
  },
});

export default infoSlice.reducer;
export const {
  viewTooltip,
  changePlay,
  changeFocus,
  changeNumber,
  changeHidden,
  changePersonalData,
} = infoSlice.actions;
