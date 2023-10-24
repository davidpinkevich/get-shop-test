import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { deleteNumberPhone } from '../../utils';
import { URL } from '../../constants';

type TInitialState = {
  tooltip: boolean;
  play: boolean;
  panelHidden: boolean;
  personalData: boolean;
  focusButton: string | null;
  phoneNumber: string;
  validNumber: boolean | null;
  loading: boolean;
  timer: boolean;
};

const initialState: TInitialState = {
  tooltip: false,
  play: false,
  panelHidden: true,
  personalData: false,
  focusButton: null,
  phoneNumber: '+7(___)___-__-__',
  validNumber: null,
  loading: false,
  timer: false,
};

export const checkValid = createAsyncThunk<{ valid: boolean }, string>(
  'infoReducer/checkValid',
  async (phone: string) => {
    const response = await fetch(`${URL.PATH}access_key=${URL.API_KEY}&number=${phone}`);
    const data = await response.json();
    return data;
  }
);

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
    addPhoneInput(state, action: PayloadAction<string>) {
      state.phoneNumber = action.payload;
    },
    changeFocus(state, action: PayloadAction<string | undefined | null>) {
      if (typeof action.payload === 'string') {
        state.focusButton = action.payload;
      }
    },
    changePhone(state, action: PayloadAction<string>) {
      if (action.payload === 'clear') {
        state.phoneNumber = '+7(___)___-__-__';
      } else if (action.payload !== 'close' && action.payload !== 'confirm') {
        state.phoneNumber = state.phoneNumber.replace(/_/, action.payload);
      }
    },
    deletePhone(state) {
      state.phoneNumber = deleteNumberPhone(state.phoneNumber);
    },
    changeValidNumber(state) {
      state.validNumber = null;
    },
    changeTimerView(state, action: PayloadAction<boolean>) {
      state.timer = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkValid.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkValid.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.valid === true) {
          state.validNumber = true;
        } else {
          state.validNumber = false;
        }
      });
  },
});

export default infoSlice.reducer;
export const {
  viewTooltip,
  changePlay,
  changeFocus,
  changeHidden,
  changePhone,
  changePersonalData,
  addPhoneInput,
  deletePhone,
  changeValidNumber,
  changeTimerView,
} = infoSlice.actions;
