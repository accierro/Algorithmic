import React, { useRef, useState } from "react";
import { useClickAway } from "react-use";
import { motion } from "framer-motion";
import Pager from "./Pager";
import WarningBlock from "../warning/WarningBlock";
import Shortcut from "../common/Shortcut";

type PreviewBoxProps = {
  page?: number;
  onClose: () => void;
};

const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;

const pages = [
  {
    title: "Welcome",
    body: (
      <>
        <p>
          Algorithmic is a pathfinding algorithms visualizer. It was built to
          help with understanding of how different pathfinding algorithms work
          and demonstrate the differences between them. Currently the following
          algorithms are supported:
        </p>
        <p>
          Currently following algorithms are supported:
          <ul>
            <li>Breadth First</li>
            <li>Depth First</li>
            <li>Djikstra</li>
            <li>Greedy</li>
            <li>A*</li>
          </ul>
        </p>
      </>
    ),
  },
  {
    title: "Where to Start?",
    body: (
      <>
        <p>
          In front of you is an interactive field, where you can select the
          start position and the final destination. When these two points are
          selected, the algorithm is going to attempt finding a path between
          them.
        </p>
        <img
          src={`${process.env.PUBLIC_URL}/StartFinishDemo.gif`}
          alt="Puting start and finish position demo"
          style={{
            width: "150px",
            borderRadius: "4px",
            alignSelf: "center",
            flexGrow: 0,
          }}
        />
        <p>
          You can reset the field at any point by pressing the <b>'Reset'</b>{" "}
          button.
        </p>
        <img
          src={`${process.env.PUBLIC_URL}/ResetDemo.gif`}
          alt="Field reseting demo"
          style={{
            width: "100px",
            borderRadius: "4px",
            alignSelf: "center",
            flexGrow: 0,
          }}
        />
      </>
    ),
  },
  {
    title: "Speed Control",
    body: (
      <>
        <p>
          You can control the number of cells the algorithm can go through in a
          single tick (the movement speed) using the three buttons: <b>Slow</b>,{" "}
          <b>Medium</b>
          and <b>Fast</b>.
        </p>
        <p style={{ marginTop: 0 }}>
          You can pause the algorithm at any moment by pressing the <b>Pause</b>{" "}
          button. Press the same button again to resume the pathfinding process.
        </p>
        <WarningBlock
          warnText="Please Note!"
          message="Depending on your computer hardware 'Fast' option would not be a good decision if you have quite old computer."
        />
      </>
    ),
  },
  {
    title: "We Need Walls!",
    body: (
      <>
        <p>
          Holding <Shortcut shortcut={`${isMac ? "\u2318" : "Ctr"} + Click`} />{" "}
          and dragging your mouse over the field will create walls.
        </p>
        <img
          src={`${process.env.PUBLIC_URL}/WallDemo.gif`}
          alt="Wall creation demo"
          style={{
            width: "170px",
            borderRadius: "4px",
            alignSelf: "center",
            flexGrow: 0,
            marginBottom: "20px",
          }}
        />
        <p>
          <b>Reset</b> button will clear the field of all walls.
        </p>
        <WarningBlock
          warnText="Hint!"
          message="You can create/delete walls even when the algorithm is already running."
        />
      </>
    ),
  },
  {
    title: "Weights",
    body: (
      <>
        <p>
          Each cell is allocated a "weight", which indicates the travel "cost"
          through that cell. Weights are only used by the two algorithms:
          Djikstra and A*; others will ignore this value.
        </p>
        <p style={{ marginTop: 0 }}>
          You can show/hide the cell weight values using the checkbox on the
          right-hand side.
        </p>
        <p style={{ marginTop: 0 }}>
          In order to adjust the cell weights, turn the weight values on and
          click on the cell you want to increase the weight of.
        </p>
        <WarningBlock
          warnText="Note!"
          message="The weight of the cell you clicked on will increase by 2, while the adjacent cells will increase in weight by 1"
        />
        <img
          src={`${process.env.PUBLIC_URL}/WeightAdjustDemo.gif`}
          alt="Weight adjusting demo"
          style={{
            width: "200px",
            marginTop: "20px",
            borderRadius: "4px",
            alignSelf: "center",
            flexGrow: 0,
            marginBottom: "20px",
          }}
        />
      </>
    ),
  },
];

const PreviewBox: React.FC<PreviewBoxProps> = ({ page = 0, onClose }) => {
  const ref = useRef(null);
  const [currentPage, setCurrentPgae] = useState(page);
  useClickAway(ref, onClose);
  return (
    <motion.div
      ref={ref}
      className="preview-box"
      initial={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: 50 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h1 style={{ marginBottom: 0 }}>{pages[currentPage].title}</h1>
      {pages[currentPage].body}
      <Pager
        current={currentPage}
        max={pages.length}
        onChange={(n) => {
          setCurrentPgae(n);
        }}
      />
      <button
        className="btn"
        style={{ position: "absolute", bottom: 29, right: 32 }}
        onClick={onClose}
      >
        Let's go
      </button>
    </motion.div>
  );
};

export default PreviewBox;
