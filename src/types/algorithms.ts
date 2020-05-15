import { AlgorithmEnum } from "./enums";
import { Cell } from ".";

export type AlgorithmOptions = {
  grid: Cell[][];
  startCell: Cell;
  targetCell: Cell;
  rows: number;
  columns: number;
};

export type Algorithm = {
  name: string;
  id: number;
  start(options: AlgorithmOptions): IAlgorithm;
};

export type AlgorithmStore = {
  [key in AlgorithmEnum]: Algorithm;
};

export type TickResults = {
  changedRows: number[];
  resume: boolean;
};

export interface IAlgorithm {
  tick(): TickResults;
}