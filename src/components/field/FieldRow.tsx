import React, { memo } from "react";
import { Cell } from "../../types";

function getColor(iter: number): string {
  const red = 10 - (10 - 6) * (iter / (60 * 70));
  const green = 132 - (132 - 51) * (iter / (60 * 70));
  const blue = 255 - (255 - 97) * (iter / (60 * 70));

  return `rgb(${Math.min(10, red)}, ${Math.min(132, green)}, ${Math.min(
    255,
    blue
  )})`;
}

type FieldRowProps = {
  row: Cell[];
  areEqual: boolean;
  onClick: (
    e: React.MouseEvent<HTMLTableDataCellElement, MouseEvent>,
    r: number,
    c: number
  ) => void;
};

const FieldRow: React.FC<FieldRowProps> = ({ row, onClick }) => {
  console.log(row[0].iter);
  return (
    <tr>
      {row.map((c) => {
        return (
          <td
            data-color={"red"}
            className={`${
              c.isShortestPath
                ? "shortest"
                : c.isWall
                ? "wall"
                : c.isStart
                ? "start"
                : c.isEnd
                ? "end"
                : c.visited
                ? "visited"
                : ""
            }`}
            style={{
              background:
                c.visited && c.iter != 0 ? getColor(c.iter) : undefined,
            }}
            key={`${c.x}-${c.y}`}
            onClick={(e) => onClick(e, c.x, c.y)}
          >
            {""}
          </td>
        );
      })}
    </tr>
  );
};

export default memo(FieldRow, (prev, next) => {
  return prev.onClick === next.onClick && next.areEqual;
});
