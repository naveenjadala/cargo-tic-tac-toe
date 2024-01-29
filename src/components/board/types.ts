export type boardProps = {
  matrix: string[][];
  board: string[][];
  onPlay: (i: number, j: number) => void;
};
