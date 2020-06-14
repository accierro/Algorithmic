import React, { Dispatch, SetStateAction } from "react";
import { ALGORITHMS, SPEED, DIMENSIONS } from "../constants/Algorithms";
import {
  Algorithm,
  FieldCallbacks,
  SpeedOption,
  AlgorithmStatus,
  Dimensions,
} from "../types";

export const defaultContext = {
  algorithm: ALGORITHMS[1],
  status: AlgorithmStatus.PREPARATION,
  fieldCallbacks: {
    reset: () => {},
    resetWalls: () => {},
    generateRandomWalls: () => {},
  },
  walls: 0,
  speed: SPEED[0],
  dimensions: { columns: DIMENSIONS.minColumns, rows: DIMENSIONS.minRows },
  setAlgorithm: () => console.log("NOT IMPLEMENTED"),
  setWalls: () => console.log("setWalls() NOT IMPLEMENTED"),
  setFieldCallbacks: () => console.log("setFieldCallbacks NOT IMPLEMENTED"),
  setSpeed: () => console.log("setSpeed NOT IMPLEMENTED"),
  setStatus: () => console.log("setStatus NOT IMPLEMENTED"),
};

const GridSettingsContext = React.createContext<{
  algorithm: Algorithm;
  status: AlgorithmStatus;
  walls: number;
  speed: SpeedOption;
  fieldCallbacks: FieldCallbacks;
  dimensions: Dimensions;
  setAlgorithm: Dispatch<SetStateAction<Algorithm>>;
  setWalls: Dispatch<SetStateAction<number>>;
  setFieldCallbacks: Dispatch<SetStateAction<FieldCallbacks>>;
  setSpeed: Dispatch<SetStateAction<SpeedOption>>;
  setStatus: Dispatch<SetStateAction<AlgorithmStatus>>;
}>(defaultContext);

export default GridSettingsContext;