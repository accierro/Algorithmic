import { Cell, AlgorithmOptions } from "../types";

class BaseAlgorithm {
  protected grid: Cell[][];

  protected startCell: Cell;
  protected targetCell: Cell;

  protected rows: number;
  protected columns: number;
  protected iter: number;

  protected finished: boolean;

  constructor(options: AlgorithmOptions) {
    this.grid = options.grid;
    this.startCell = options.startCell;
    this.targetCell = options.targetCell;

    this.rows = options.rows;
    this.columns = options.columns;

    this.iter = 0;

    this.finished = false;
  }

  getColor(): string {
    const red = 10 - (10 - 6) * (this.iter / (60 * 70));
    const green = 132 - (132 - 51) * (this.iter / (60 * 70));
    const blue = 255 - (255 - 97) * (this.iter / (60 * 70));

    return `rgb(${Math.min(10, red)}, ${Math.min(132, green)}, ${Math.min(
      255,
      blue
    )})`;
  }

  getNeighboors(grid: Cell[][], cell: Cell, includeVisited = false): Cell[] {
    this.iter++;
    const neighboors = [];
    const { x, y } = cell;
    if (x - 1 >= 0) {
      const check = grid[x - 1][y];
      if (!check.isWall && (includeVisited || !check.visited)) {
        check.iter = this.iter;
        check.color = this.getColor();
        check.marked = true;
        neighboors.push(check);
      }
    }

    if (y - 1 >= 0) {
      const check = grid[x][y - 1];
      if (!check.isWall && (includeVisited || !check.visited)) {
        check.iter = this.iter;
        check.color = this.getColor();
        check.marked = true;
        neighboors.push(check);
      }
    }

    if (y + 1 < this.columns) {
      const check = grid[x][y + 1];
      if (!check.isWall && (includeVisited || !check.visited)) {
        check.iter = this.iter;
        check.color = this.getColor();
        check.marked = true;
        neighboors.push(check);
      }
    }

    if (x + 1 < this.rows) {
      const check = grid[x + 1][y];
      if (!check.isWall && (includeVisited || !check.visited)) {
        check.iter = this.iter;
        check.color = this.getColor();
        check.marked = true;
        neighboors.push(check);
      }
    }

    return neighboors;
  }

  deleteWalls(): number[] {
    const diff = [];
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid[i].length; j++) {
        if (this.grid[i][j].isWall) {
          this.grid[i][j].isWall = false;
          diff.push(i);
        }
      }
    }
    return diff;
  }

  isFinished(): boolean {
    return this.finished;
  }
}

export default BaseAlgorithm;
