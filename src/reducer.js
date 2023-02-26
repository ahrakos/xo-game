const initialState = {
  turn: "X",
  board: [null, null, null, null, null, null, null, null, null],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLAY_TURN": {
      const idx = action.payload.idx;
      const newBoard = [...state.board];
      newBoard[idx] = state.turn;

      return {
        ...state,
        turn: state.turn === "X" ? "O" : "X",
        board: newBoard,
      };
    }

    default:
      return state;
  }
};
