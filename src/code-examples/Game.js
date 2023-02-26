import { useState } from "react";
import { Cell } from "./Cell";
import "./Board.css";

export const Game = () => {
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const [turn, setTurn] = useState("X");

  const onClick = (item, idx) => {
    if (item) {
      return;
    }

    const newBoard = [...board];
    newBoard[idx] = turn;
    setTurn(turn === "X" ? "O" : "X");
    setBoard(newBoard);
  };

  return (
    <div className="board">
      {board.map((item, idx) => (
        <Cell key={idx} onClick={() => onClick(item, idx)} char={item} />
      ))}
    </div>
  );
};
