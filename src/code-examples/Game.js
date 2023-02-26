import { useState } from "react";
import { Cell } from "./Cell";
import "./Board.css";
import { useDispatch, useSelector } from "react-redux";

export const Game = () => {
  const dispatch = useDispatch();

  const board = useSelector((state) => state.board);

  const onClick = (char, idx) => {
    if (char) {
      return;
    }

    dispatch({
      type: "PLAY_TURN",
      payload: {
        idx,
      },
    });
  };

  return (
    <div className="board">
      {board.map((item, idx) => (
        <Cell key={idx} onClick={() => onClick(item, idx)} char={item} />
      ))}
    </div>
  );
};
