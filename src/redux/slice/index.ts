import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TInitialState = {
  tooltip: boolean;
  play: boolean;
};

const initialState: TInitialState = {
  tooltip: false,
  play: false,
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
  },
});

export default infoSlice.reducer;
export const { viewTooltip, changePlay } = infoSlice.actions;
