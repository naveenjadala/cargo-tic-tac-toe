export type WinnerComponentProps = {
  player: string;
  resetGame: () => void;
  label: 'winner' | 'draw';
};
