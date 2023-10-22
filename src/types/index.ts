export type TDataVideo = {
  playedSeconds: number;
};

export type TLogic = {
  [key: string]: {
    ArrowUp: string | null;
    ArrowRight: string | null;
    ArrowDown: string | null;
    ArrowLeft: string | null;
  };
};

export type TDirection = { id: string; click: string };

export type TClasses = { id: string; focus: string | null };
