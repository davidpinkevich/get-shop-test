import { TLogic } from '../types';

const URL = {
  PATH: 'https://apilayer.net/api/validate?',
  API_KEY: '1b3c8fcd36d6846749054cf0bc2ac733',
};

const PANEL: Array<string> = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'clear',
  '0',
  'confirm',
  'close',
];

const LOGIC: TLogic = {
  '0': {
    ArrowUp: '9',
    ArrowRight: 'close',
    ArrowDown: 'confirm',
    ArrowLeft: 'clear',
  },
  '1': {
    ArrowUp: null,
    ArrowRight: '2',
    ArrowDown: '4',
    ArrowLeft: null,
  },
  '2': {
    ArrowUp: null,
    ArrowRight: '3',
    ArrowDown: '5',
    ArrowLeft: '1',
  },
  '3': {
    ArrowUp: null,
    ArrowRight: 'close',
    ArrowDown: '6',
    ArrowLeft: '2',
  },
  '4': {
    ArrowUp: '1',
    ArrowRight: '5',
    ArrowDown: '7',
    ArrowLeft: null,
  },
  '5': {
    ArrowUp: '2',
    ArrowRight: '6',
    ArrowDown: '8',
    ArrowLeft: '4',
  },
  '6': {
    ArrowUp: '3',
    ArrowRight: 'close',
    ArrowDown: '9',
    ArrowLeft: '5',
  },
  '7': {
    ArrowUp: '4',
    ArrowRight: '8',
    ArrowDown: 'clear',
    ArrowLeft: null,
  },
  '8': {
    ArrowUp: '5',
    ArrowRight: '9',
    ArrowDown: 'clear',
    ArrowLeft: '7',
  },
  '9': {
    ArrowUp: '6',
    ArrowRight: 'close',
    ArrowDown: '0',
    ArrowLeft: '8',
  },
  clear: {
    ArrowUp: '7',
    ArrowRight: '0',
    ArrowDown: 'confirm',
    ArrowLeft: null,
  },
  confirm: {
    ArrowUp: '0',
    ArrowRight: 'close',
    ArrowDown: null,
    ArrowLeft: null,
  },
  close: {
    ArrowUp: null,
    ArrowRight: null,
    ArrowDown: '3',
    ArrowLeft: '3',
  },
};

export { PANEL, LOGIC, URL };
